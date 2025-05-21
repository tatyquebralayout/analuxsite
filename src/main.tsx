import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './i18n-fixed'; // Changed from './i18n' to './i18n-fixed'

// Determines the basename based on the current URL
const getBasename = () => {
  const { pathname } = window.location;
  // Check if we are on localhost and the path includes '/analuxsite/'
  if (pathname.includes('/analuxsite/')) {
    return '/analuxsite';
  }
  // Otherwise, use the root path
  return '/';
};

/**
 * Application Entry Point
 *
 * Renders the App component within a StrictMode to
 * detect potential problems during development.
 *
 * createRoot is the recommended React 18 API for rendering,
 * which enables features like Concurrent Mode.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Use BrowserRouter for routing, setting the basename dynamically */}
    <BrowserRouter basename={getBasename()}>
      {/* Provides context for managing document head tags */}
      <HelmetProvider>
        {/* Render the main application component */}
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
