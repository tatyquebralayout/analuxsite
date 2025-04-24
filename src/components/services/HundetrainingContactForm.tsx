import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  user_name: string;
  user_phone: string;
  training_service: string;
  dog_count: string;
  dog_size: string;
  user_email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const HundetrainingContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_phone: '',
    training_service: '',
    dog_count: '',
    dog_size: '',
    user_email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formMessage, setFormMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Validação simples (ex: checkbox de tamanho)
    if (!formData.dog_size) {
      setFormStatus('error');
      setFormMessage('Bitte wählen Sie mindestens eine Hundegrösse aus.');
      return;
    }

    setFormStatus('loading');
    setFormMessage('');

    // Substitua com suas credenciais EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // Prepara os parâmetros para EmailJS (sendForm lê os names, mas podemos enviar dados extras)
    // Certifique-se que seu template EmailJS espera variáveis com os mesmos nomes que os atributos 'name' do form.
    // Ex: {{user_name}}, {{user_phone}}, {{training_service}}, {{dog_count}}, {{dog_size}}, {{user_email}}, {{message}}

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      result => {
        console.log('EmailJS Success:', result.text);
        setFormStatus('success');
        setFormMessage('Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.');
        // Limpar o formulário (opcional)
        setFormData({
          user_name: '',
          user_phone: '',
          training_service: '',
          dog_count: '',
          dog_size: '',
          user_email: '',
          message: '',
        });
        if (form.current) form.current.reset(); // Reseta o formulário visualmente
      },
      error => {
        console.error('EmailJS Error:', error.text);
        setFormStatus('error');
        setFormMessage(
          'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.'
        );
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-center mb-8 text-gray-600">Fields marked with an * are required</p>
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-2 font-bold text-primary">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block mb-2 font-bold text-primary">
            Telefonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          />
        </div>

        {/* Service Select */}
        <div>
          <label htmlFor="service" className="block mb-2 font-bold text-primary">
            Angebot *
          </label>
          <select
            id="service"
            name="training_service"
            value={formData.training_service}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="tagesbetreuung">Tagesbetreuung</option>
            <option value="ferienbetreuung">Ferienbetreuung</option>
            <option value="hundetraining">Hundetraining</option>
          </select>
        </div>

        {/* Dog Count Select */}
        <div>
          <label htmlFor="dogs" className="block mb-2 font-bold text-primary">
            Wie viele hunde? *
          </label>
          <select
            id="dogs"
            name="dog_count"
            value={formData.dog_count}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 oder +</option>
          </select>
        </div>

        {/* Dog Size Radio Buttons */}
        <div>
          <label className="block mb-2 font-bold text-primary">Hundegrosse *</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="dog_size"
                value="Kleiner (bis 10 kg)"
                checked={formData.dog_size === 'Kleiner (bis 10 kg)'}
                onChange={handleChange}
                className="mr-2"
                disabled={formStatus === 'loading'}
              />
              Kleiner (bis 10 kg)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="dog_size"
                value="Grosse (ab 10 kg)"
                checked={formData.dog_size === 'Grosse (ab 10 kg)'}
                onChange={handleChange}
                className="mr-2"
                disabled={formStatus === 'loading'}
              />
              Grosse (ab 10 kg)
            </label>
          </div>
          {formStatus === 'error' && formMessage.includes('Hundegrösse') && (
            <p className="text-red-500 text-sm mt-1">{formMessage}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-2 font-bold text-primary">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block mb-2 font-bold text-primary">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
            disabled={formStatus === 'loading'}
          ></textarea>
        </div>

        {/* Submit Button and Status Message */}
        <div>
          <button
            type="submit"
            className={`bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition ${
              formStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={formStatus === 'loading'}
          >
            {formStatus === 'loading' ? 'Senden...' : 'Absenden'}
          </button>
          {formStatus === 'success' && <p className="text-green-600 mt-4">{formMessage}</p>}
          {formStatus === 'error' && !formMessage.includes('Hundegrösse') && (
            <p className="text-red-600 mt-4">{formMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default HundetrainingContactForm;
