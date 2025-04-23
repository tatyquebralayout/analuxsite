// Central exports file for utilities

// Export translations
export { translations } from './translations';

// Export hooks
export * from './hooks';

// Importações de hooks
import * as hooks from './hooks';

// Exportar módulos e hooks
export { hooks };

// Exportar utilitários de animação
export * from './animation';
export * from './canvasAnimator';

// Reexportar hooks individualmente para manter compatibilidade
export { usePerformanceOptimizer } from './hooks';
export { useLocalStorage } from './hooks';
export { useScrollToTop } from './hooks';
export { useAnimatedCounter } from './hooks';
export { useDeviceCapabilities } from './hooks';
