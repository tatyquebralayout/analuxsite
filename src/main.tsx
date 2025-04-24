import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n-fixed'; // Alterado de './i18n' para './i18n-fixed'

// Determina o basename com base na URL atual
const getBasename = () => {
  const { pathname } = window.location;
  // Verifica se estamos em localhost
  if (pathname.includes('/analuxsite/')) {
    return '/analuxsite';
  }
  return '/';
};

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
    <BrowserRouter basename={getBasename()}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
