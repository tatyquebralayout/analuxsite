import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../components/contact/ContactForm';
import emailjs from '@emailjs/browser';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// Mock do EmailJS
vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve({ text: 'Success' })),
    init: vi.fn(),
  },
}));

// Tipo para o mock do EmailJS
type EmailJSMock = {
  sendForm: ReturnType<typeof vi.fn>;
  init: ReturnType<typeof vi.fn>;
};

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    // Verifica se os campos obrigatórios estão presentes
    expect(screen.getByLabelText('Name *')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone *')).toBeInTheDocument();
    expect(screen.getByLabelText('Email *')).toBeInTheDocument();
    expect(screen.getByLabelText('Message *')).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    // Preenche o formulário
    fireEvent.change(screen.getByLabelText('Name *'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText('Phone *'), {
      target: { value: '+49123456789' },
    });
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Message *'), {
      target: { value: 'Test message' },
    });

    // Submete o formulário
    fireEvent.click(screen.getByText('Send Message'));

    // Verifica se o EmailJS foi chamado
    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalled();
    });

    // Verifica se a mensagem de sucesso aparece
    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });
  });

  it('shows error message on submission failure', async () => {
    // Configura o mock para falhar
    const emailjsMock = emailjs as unknown as EmailJSMock;
    emailjsMock.sendForm.mockRejectedValueOnce(new Error('Failed to send'));

    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    // Preenche o formulário
    fireEvent.change(screen.getByLabelText('Name *'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText('Phone *'), {
      target: { value: '+49123456789' },
    });
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Message *'), {
      target: { value: 'Test message' },
    });

    // Submete o formulário
    fireEvent.click(screen.getByText('Send Message'));

    // Verifica se a mensagem de erro aparece
    await waitFor(() => {
      expect(screen.getByText(/problem sending your message/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    // Tenta submeter o formulário sem preencher os campos
    fireEvent.click(screen.getByText('Send Message'));

    // Verifica se os campos obrigatórios são marcados
    await waitFor(() => {
      expect(screen.getByLabelText('Name *')).toBeInvalid();
      expect(screen.getByLabelText('Phone *')).toBeInvalid();
      expect(screen.getByLabelText('Email *')).toBeInvalid();
      expect(screen.getByLabelText('Message *')).toBeInvalid();
    });
  });

  it('validates email format', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    // Preenche com email inválido
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'invalid-email' },
    });

    // Submete o formulário
    fireEvent.click(screen.getByText('Send Message'));

    // Verifica se o campo de email é marcado como inválido
    await waitFor(() => {
      expect(screen.getByLabelText('Email *')).toBeInvalid();
    });
  });

  it('validates phone number format', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactForm />
      </I18nextProvider>
    );

    const phoneInput = screen.getByLabelText('Phone *') as HTMLInputElement;

    // Preenche com telefone inválido
    fireEvent.change(phoneInput, {
      target: { value: '123' },
    });

    // Verifica se o campo não corresponde ao padrão
    expect(phoneInput.validity.patternMismatch).toBe(true);

    // Preenche com telefone válido
    fireEvent.change(phoneInput, {
      target: { value: '+49123456789' },
    });

    // Verifica se o campo agora é válido
    expect(phoneInput.validity.patternMismatch).toBe(false);
  });
}); 