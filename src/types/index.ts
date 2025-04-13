// Central exports file for all type definitions

// Re-export translation types
export * from './translations';

// Performance context types
export interface PerformanceContextType {
  shouldOptimize: boolean;
  setPerformancePreference: (optimize: boolean) => void;
}

// Performance optimizer options
export interface PerformanceOptions {
  disableAnimationsOnLowEnd?: boolean;
  reducedMotionPreference?: boolean;
  cookieKey?: string;
}

// Common component prop types
export interface WithLanguageProps {
  language: string;
}

// Specific Framer Motion types para evitar conflitos
export interface AnimationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initial?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animate?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exit?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transition?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: any;
  custom?: number;
}
