import { useState, useEffect } from 'react';

/**
 * Interface que define as capacidades do dispositivo detectadas
 */
export interface DeviceCapabilities {
  // Performance do dispositivo
  isLowPerformance: boolean;

  // Capacidades gráficas
  supportsWebGL: boolean;

  // Características do dispositivo
  touchDevice: boolean;
  screenSize: 'small' | 'medium' | 'large' | 'unknown';
  isMobile: boolean;

  // Preferências do usuário
  prefersReducedMotion: boolean;
  prefersDarkMode: boolean;
}

/**
 * Hook que detecta as capacidades do dispositivo
 *
 * Utilizado para:
 * - Ajustar o nível de complexidade visual para dispositivos de baixa performance
 * - Ativar/desativar animações com base nas preferências do usuário
 * - Adaptar a interface para diferentes tipos de dispositivos
 */
export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isLowPerformance: false,
    supportsWebGL: false,
    touchDevice: false,
    screenSize: 'unknown',
    isMobile: false,
    prefersReducedMotion: false,
    prefersDarkMode: false,
  });

  useEffect(() => {
    // Protege contra execução no servidor (SSR)
    if (typeof window === 'undefined') return;

    // Detecção de WebGL
    let supportsWebGL = false;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      supportsWebGL = !!gl;
    } catch {
      supportsWebGL = false;
    }

    // Detecção de touch
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Detecção de tamanho de tela
    const width = window.innerWidth;
    let screenSize: 'small' | 'medium' | 'large' = 'medium';
    if (width < 768) screenSize = 'small';
    else if (width > 1200) screenSize = 'large';

    // Detecção de dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // Detecção de preferências do usuário
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Detecção de performance
    let isLowPerformance = false;

    // 1. Verificações básicas de hardware
    const hasLimitedCPU = navigator.hardwareConcurrency <= 2;
    const hasLimitedMemory =
      'deviceMemory' in navigator &&
      // TypeScript não conhece a propriedade deviceMemory
      (navigator as unknown as { deviceMemory: number }).deviceMemory <= 2;

    if (hasLimitedCPU || hasLimitedMemory) {
      isLowPerformance = true;
    }
    // 2. Para dispositivos no limite, fazer um teste de performance
    else if (navigator.hardwareConcurrency <= 4) {
      // Teste de performance sintético
      const testStart = performance.now();

      // Operação intensiva - o resultado não é usado, mas a operação precisa
      // ser executada para medir a performance

      let _dummy = 0;
      for (let i = 0; i < 100000; i++) {
        _dummy += Math.sqrt(Math.random() * 10000);
      }

      const testDuration = performance.now() - testStart;
      isLowPerformance = testDuration > 100; // Mais de 100ms indica baixa performance
    }

    // Atualiza o estado com todas as capacidades detectadas
    setCapabilities({
      isLowPerformance,
      supportsWebGL,
      touchDevice,
      screenSize,
      isMobile,
      prefersReducedMotion,
      prefersDarkMode,
    });

    // Listener para mudanças em preferências do usuário
    const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      setCapabilities(prev => ({
        ...prev,
        prefersReducedMotion: event.matches,
      }));
    };

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setCapabilities(prev => ({
        ...prev,
        prefersDarkMode: event.matches,
      }));
    };

    // Adiciona listeners para mudanças de preferências
    if (reducedMotionMediaQuery.addEventListener) {
      reducedMotionMediaQuery.addEventListener('change', handleReducedMotionChange);
      darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    } else {
      // Fallback para navegadores antigos (deprecated)
      reducedMotionMediaQuery.addListener(handleReducedMotionChange);
      darkModeMediaQuery.addListener(handleDarkModeChange);
    }

    // Remove listeners ao desmontar o componente
    return () => {
      if (reducedMotionMediaQuery.removeEventListener) {
        reducedMotionMediaQuery.removeEventListener('change', handleReducedMotionChange);
        darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
      } else {
        // Fallback para navegadores antigos (deprecated)
        reducedMotionMediaQuery.removeListener(handleReducedMotionChange);
        darkModeMediaQuery.removeListener(handleDarkModeChange);
      }
    };
  }, []);

  return capabilities;
}
