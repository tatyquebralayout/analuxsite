import React from 'react';
import AppRoutes from './routes';
import { PerformanceProvider } from './contexts/PerformanceContext';

/**
 * Componente principal da aplicação
 * 
 * Este componente envolve toda a aplicação com o PerformanceProvider
 * para gerenciar otimizações de performance em toda a aplicação.
 * 
 * O PerformanceProvider detecta capacidades do dispositivo e preferências
 * do usuário para ajustar animações e efeitos visuais.
 */
function App() {
  return (
    <PerformanceProvider>
      <AppRoutes />
    </PerformanceProvider>
  );
}

export default App;