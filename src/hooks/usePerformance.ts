import { useContext } from 'react';
import { PerformanceContext } from '../contexts/PerformanceContext'; // Import the exported context
import { PerformanceContextType } from '../types';

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
