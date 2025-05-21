import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/common/LoadingScreen';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Hundebetreuung = lazy(() => import('../pages/Hundebetreuung')); // Dog care page
const Hundetraining = lazy(() => import('../pages/Hundetraining')); // Dog training page
const Partnership = lazy(() => import('../pages/Partnership'));

/**
 * Application Route Configuration
 *
 * Defines all available routes in the application using React Router v6.
 * All routes are nested within the MainLayout component, which provides
 * common elements like the header and footer.
 *
 * Routes:
 * - / : Home page
 * - /services : Dog care page
 * - /services/hundetraining : Dog training page
 * - /about : About us page
 * - /partnership : Partnership page
 * - /contact : Contact page
 * - /404 : Not found page
 * - * : Redirects to the 404 page
 */
const AppRoutes: React.FC = () => {
  const location = useLocation();

  // This effect checks if we are directly on the /404 route on initial load
  // and redirects to the home page if so.
  useEffect(() => {
    // Check if it's the initial load (no previous history)
    // and we are directly on the 404 page
    if (location.pathname === '/404' && window.history.length <= 1) {
      // Redirect to the root path
      window.location.href = '/';
    }
  }, [location.pathname]);

  return (
    // Show a fallback loading screen while lazy-loaded components are loading
    <Suspense fallback={<LoadingScreen />}>
      {/* Define the main application routes */}
      <Routes>
        {/* Use MainLayout as the wrapper for all main routes */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route for the home page */}
          <Route index element={<Home />} />
          {/* Route for the dog care page */}
          <Route path="services" element={<Hundebetreuung />} />
          {/* Route for the dog training page */}
          <Route path="services/hundetraining" element={<Hundetraining />} />
          {/* Route for the about us page */}
          <Route path="about" element={<About />} />
          {/* Route for the partnership page */}
          <Route path="partnership" element={<Partnership />} />
          {/* Route for the contact page */}
          <Route path="contact" element={<Contact />} />
          {/* Route for the 404 not found page */}
          <Route path="404" element={<NotFound />} />
          {/* Catch-all route for any undefined paths, redirects to 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
