import React, { createContext } from 'react';
import { usePerformanceOptimizer } from '../utils/hooks/usePerformanceOptimizer';
import { PerformanceContextType } from '../types';

/**
 * Contexto para gerenciamento de otimizações de performance
 *
 * Este contexto permite que as configurações de performance
 * sejam acessíveis em qualquer componente da aplicação.
 */
const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);
// Export the context itself
export { PerformanceContext };

/**
 * Provider do contexto de performance
 *
 * Componente que fornece o contexto de performance para seus filhos.
 * Utiliza o hook usePerformanceOptimizer para detectar automaticamente
 * as capacidades do dispositivo e preferências do usuário.
 */
export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Obtém as configurações de performance do hook personalizado
  const { shouldOptimize, setPerformancePreference } = usePerformanceOptimizer();

  return (
    <PerformanceContext.Provider value={{ shouldOptimize, setPerformancePreference }}>
      {children}
    </PerformanceContext.Provider>
  );
};
