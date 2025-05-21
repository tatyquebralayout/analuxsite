import React, { useState, useEffect } from 'react';
import AppRoutes from './routes';
import { PerformanceProvider } from './contexts/PerformanceContext';

/**
 * Main Application Component
 *
 * This component wraps the entire application with the PerformanceProvider
 * to manage performance optimizations throughout the app.
 *
 * The PerformanceProvider detects device capabilities and user preferences
 * to adjust animations and visual effects.
 */
function App() {
  // State to track if the component has mounted
  const [isMounted, setIsMounted] = useState(false);

  // Effect to set isMounted to true after the initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Optionally show a loading indicator before mounting
  if (!isMounted) {
    return <div>Loading...</div>; // Consider using a more sophisticated loading component
  }

  return (
    // Wrap the application with the PerformanceProvider
    <PerformanceProvider>
      {/* Render the application routes */}
      <AppRoutes />
    </PerformanceProvider>
  );
}

export default App;
