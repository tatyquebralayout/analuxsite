import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Ponto de entrada da aplicação
 * 
 * Renderiza o componente App dentro de um StrictMode para
 * detectar problemas potenciais durante o desenvolvimento.
 * 
 * O createRoot é a API recomendada do React 18 para renderização,
 * que habilita recursos como Concurrent Mode.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);