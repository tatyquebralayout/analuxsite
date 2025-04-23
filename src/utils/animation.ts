/**
 * Configurações centralizadas para animações no projeto AmanluxDog
 * Este arquivo fornece padrões consistentes para todas as animações do site
 */

export const ANIMATION_CONFIG = {
  // Durações padrão para diferentes tipos de animações
  duration: {
    fast: 0.3,
    medium: 0.6,
    slow: 1.0,
  },

  // Funções de easing para diferentes tipos de animações
  easing: {
    standard: 'easeOut',
    bounce: [0.175, 0.885, 0.32, 1.275], // Efeito de "quicar"
    smooth: [0.43, 0.13, 0.23, 0.96], // Curva suave para a maioria das animações
  },

  // Variantes Framer Motion pré-definidas para reutilização
  variants: {
    // Fade in simples
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
      },
    },

    // Fade in + slide para cima
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }),
    },

    // Fade in + slide para baixo
    slideDown: {
      hidden: { opacity: 0, y: -20 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }),
    },

    // Fade in + slide da esquerda
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }),
    },

    // Fade in + slide da direita
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }),
    },

    // Zoom in
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
      },
    },

    // Para listas com itens aparecendo em sequência
    staggeredItems: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },

    // Para um único item em uma lista com staggering
    staggeredItem: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
      },
    },
  },
};

/**
 * Ajusta a duração das animações com base na preferência do usuário.
 * Útil para acessibilidade - alguns usuários preferem animações reduzidas.
 */
export function getAdjustedDuration(duration: number): number {
  // Verifica se o usuário prefere animações reduzidas
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Retorna duração menor ou zero se o usuário preferir animações reduzidas
  return prefersReducedMotion ? 0 : duration;
}

/**
 * Hook para detectar a preferência de redução de movimento do usuário
 */
export function usePrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
}
