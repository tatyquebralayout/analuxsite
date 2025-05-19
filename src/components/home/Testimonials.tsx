import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Definindo o tipo para um item de testemunho
interface TestimonialItemRaw {
  text: string;
  name: string;
  pet: string;
  photo?: string;
}

interface TestimonialProcessed {
  textLines: string[];
  name: string;
  pet: string;
  photo?: string;
}

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Obter os testemunhos usando t() e adicionar fotos
  const testimonialItemsResult = t('testimonials.items', {
    returnObjects: true,
    defaultValue: [],
  }) as TestimonialItemRaw[]; // Adicionando type assertion aqui

  // Adicionar validação para garantir que testimonialItemsResult seja um array
  const testimonials: TestimonialProcessed[] = useMemo(() => {
    if (!Array.isArray(testimonialItemsResult)) {
      return [];
    }
    // O parâmetro 'index' foi removido pois não era utilizado
    return testimonialItemsResult.map((item: TestimonialItemRaw) => {
      // Dividir o texto em linhas para melhor formatação
      const textLines = item.text ? item.text.split('\n').map((line: string) => line.trim()) : [];
      return {
        textLines,
        name: item.name,
        pet: item.pet,
        photo: item.photo,
      };
    });
  }, [testimonialItemsResult]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when testimonials change (e.g., language switch)
  useEffect(() => {
    setCurrentIndex(0);
  }, [testimonials]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  if (!testimonials || testimonials.length === 0) {
    // Handle case where testimonials are not loaded or empty
    // console.log("Testimonials not loaded or empty");
    return <p>Loading testimonials...</p>; // Or return null or a placeholder
  }

  const testimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
          {t('testimonials.title')}
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 overflow-hidden">
            {testimonial && testimonial.photo && (
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={`${testimonial.name} (${testimonial.pet})`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-secondary dark:border-secondary-dark"
                />
              </div>
            )}
            {testimonial && (
              <div className="text-center">
                <div className="mb-4" style={{ minHeight: '150px' }}>
                  {testimonial.textLines.map((line: string, lineIdx: number) => (
                    <p
                      key={`${i18n.language}-${currentIndex}-${lineIdx}`}
                      className="text-gray-600 dark:text-gray-300 italic mb-2"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">({testimonial.pet})</p>
              </div>
            )}
          </div>
          {testimonials.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-primary hover:bg-primary-dark text-white rounded-full p-2 transition-colors duration-200 shadow-md dark:bg-secondary-dark dark:hover:bg-secondary"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-primary hover:bg-primary-dark text-white rounded-full p-2 transition-colors duration-200 shadow-md dark:bg-secondary-dark dark:hover:bg-secondary"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
