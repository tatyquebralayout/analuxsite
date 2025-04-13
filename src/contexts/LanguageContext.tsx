import React, { createContext } from 'react';

/**
 * Interface que define a estrutura do contexto de idioma
 */
export interface LanguageContextType {
  language: string; // Código do idioma atual (pt, en, es, fr, de)
  setLanguage: (lang: string) => void; // Função para alterar o idioma
}

/**
 * Contexto para gerenciamento de idioma
 *
 * Este contexto permite que o idioma selecionado pelo usuário
 * seja acessível em qualquer componente da aplicação.
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Provider do contexto de idioma
 *
 * Componente que fornece o contexto de idioma para seus filhos.
 * Recebe o valor atual do idioma e a função para alterá-lo.
 */
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  value: LanguageContextType;
}> = ({ children, value }) => {
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// The useLanguage hook has been moved to src/contexts/useLanguage.ts

// Make sure LanguageContext is exported if needed by the hook in the other file
export { LanguageContext }; // Export context itself
