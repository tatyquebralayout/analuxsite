/**
 * Animações e variantes reutilizáveis para framer-motion
 * Usa as configurações centralizadas do arquivo animation.ts
 */
import { Variants } from 'framer-motion';
import { ANIMATION_CONFIG, getAdjustedDuration } from '../animation';

/**
 * Variante básica para fade-in de elementos
 */
export const fadeInVariants: Variants = {
  ...ANIMATION_CONFIG.variants.fadeIn,
};

/**
 * Variante com fade-in + slide-up
 */
export const fadeSlideUpVariants: Variants = {
  ...ANIMATION_CONFIG.variants.slideUp,
};

/**
 * Variante com fade-in + slide-in da esquerda
 */
export const fadeSlideInLeftVariants: Variants = {
  ...ANIMATION_CONFIG.variants.slideRight,
};

/**
 * Variante com fade-in + slide-in da direita
 */
export const fadeSlideInRightVariants: Variants = {
  ...ANIMATION_CONFIG.variants.slideLeft,
};

/**
 * Variante para exibir itens em staggered animation (um após o outro)
 */
export const staggeredItemsVariants: Variants = {
  ...ANIMATION_CONFIG.variants.staggeredItems,
};

/**
 * Variante para exibir um único item em uma lista staggered
 */
export const staggeredItemVariants: Variants = {
  ...ANIMATION_CONFIG.variants.staggeredItem,
};

/**
 * Configuração padrão para animação scroll-triggered
 */
export const defaultScrollAnimation = {
  viewport: { once: true, margin: '-100px 0px' },
  initial: 'hidden',
  whileInView: 'visible',
};

/**
 * Gera uma variante de fade-in com configurações personalizadas
 */
export function createFadeInVariant(options?: {
  duration?: number;
  delay?: number;
  ease?: string | number[];
}): Variants {
  const {
    duration = ANIMATION_CONFIG.duration.medium,
    delay = 0,
    ease = ANIMATION_CONFIG.easing.smooth,
  } = options || {};

  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: getAdjustedDuration(duration),
        delay,
        ease,
      },
    },
  };
}

/**
 * Gera uma variante de slide up com configurações personalizadas
 */
export function createSlideUpVariant(options?: {
  duration?: number;
  delay?: number;
  distance?: number;
  ease?: string | number[];
}): Variants {
  const {
    duration = ANIMATION_CONFIG.duration.medium,
    delay = 0,
    distance = 20,
    ease = ANIMATION_CONFIG.easing.smooth,
  } = options || {};

  return {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: getAdjustedDuration(duration),
        delay,
        ease,
      },
    },
  };
}
