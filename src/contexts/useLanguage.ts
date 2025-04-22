import { useContext } from 'react';
import { LanguageContext, LanguageContextType } from './LanguageContext';

/**
 * Hook personalizado para acessar o contexto de idioma
 *
 * Facilita o acesso ao idioma atual e à função para alterá-lo
 * em qualquer componente da aplicação.
 *
 * Lança um erro se usado fora de um LanguageProvider.
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
