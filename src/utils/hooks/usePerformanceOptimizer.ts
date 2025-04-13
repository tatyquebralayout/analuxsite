import { useEffect, useState } from 'react';
import { PerformanceOptions } from '../../types';

/**
 * Hook personalizado para otimizar performance
 *
 * Detecta capacidades do dispositivo e preferências do usuário
 * para ajustar animações e efeitos visuais.
 *
 * @param options - Opções de configuração
 * @returns Objeto com flag de otimização e função para definir preferência manual
 */
export const usePerformanceOptimizer = (options: PerformanceOptions = {}) => {
  // Extrai opções com valores padrão
  const {
    disableAnimationsOnLowEnd = true, // Por padrão, desativa animações em dispositivos de baixo desempenho
    reducedMotionPreference = true, // Por padrão, respeita preferência de movimento reduzido
    cookieKey = 'amanluxdog-performance-settings', // Chave padrão para cookie
  } = options;

  // Estado para armazenar se deve otimizar
  const [shouldOptimize, setShouldOptimize] = useState(false);

  // Efeito para detectar capacidades e preferências
  useEffect(() => {
    // Verifica preferência salva em cookies
    const savedPreference = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${cookieKey}=`))
      ?.split('=')[1];

    // Se existir uma preferência salva, usa ela
    if (savedPreference) {
      setShouldOptimize(savedPreference === 'true');
      return;
    }

    // Verifica preferência de movimento reduzido
    if (reducedMotionPreference && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShouldOptimize(true);
      return;
    }

    // Verifica se é um dispositivo de baixo desempenho
    if (disableAnimationsOnLowEnd) {
      // Heurística simples para dispositivos de baixo desempenho
      const isLowEnd =
        navigator.hardwareConcurrency <= 4 || // 4 ou menos núcleos de CPU
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // Dispositivo móvel

      setShouldOptimize(isLowEnd);
    }
  }, [disableAnimationsOnLowEnd, reducedMotionPreference, cookieKey]);

  // Função para salvar preferência em cookie
  const setPerformancePreference = (optimize: boolean) => {
    document.cookie = `${cookieKey}=${optimize}; max-age=31536000; path=/`; // 1 ano de expiração
    setShouldOptimize(optimize);
  };

  return {
    shouldOptimize,
    setPerformancePreference,
  };
};
