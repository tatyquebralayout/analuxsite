import React, { createContext, useContext } from 'react';
import { usePerformanceOptimizer } from '../utils/hooks/usePerformanceOptimizer';

/**
 * Interface que define a estrutura do contexto de performance
 */
interface PerformanceContextType {
  shouldOptimize: boolean;  // Indica se as otimizações devem ser aplicadas
  setPerformancePreference: (optimize: boolean) => void;  // Função para definir preferência manual
}

/**
 * Contexto para gerenciamento de otimizações de performance
 * 
 * Este contexto permite que as configurações de performance
 * sejam acessíveis em qualquer componente da aplicação.
 */
const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

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

/**
 * Hook personalizado para acessar o contexto de performance
 * 
 * Facilita o acesso às configurações de performance em qualquer
 * componente da aplicação.
 * 
 * Lança um erro se usado fora de um PerformanceProvider.
 */
export const usePerformance = (): PerformanceContextType => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance deve ser usado dentro de um PerformanceProvider');
  }
  return context;
};