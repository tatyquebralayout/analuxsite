import React from 'react';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../contact/ContactForm';
import Location from '../contact/Location';

/**
 * Interface de propriedades do componente ContactSection (Removed)
 */
// interface ContactSectionProps {
//   language: string; // Idioma atual
// }

/**
 * Componente de seção de contato da página inicial
 *
 * Agrupa o formulário de contato e o mapa de localização
 * em uma única seção para a página inicial.
 */
// Remove language prop
// const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
const ContactSection: React.FC = () => {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Remove language prop pass-through */}
          <ContactForm />
          <Location />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
