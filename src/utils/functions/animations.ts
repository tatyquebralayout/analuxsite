/**
 * Animações e variantes reutilizáveis para framer-motion
 */
import { Variants } from 'framer-motion';

/**
 * Variante básica para fade-in de elementos
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

/**
 * Variante com fade-in + slide-up
 */
export const fadeSlideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * Variante com fade-in + slide-in da esquerda
 */
export const fadeSlideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * Variante com fade-in + slide-in da direita
 */
export const fadeSlideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * Variante com escala (zoom-in)
 */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Animação para itens em sequência (staggered)
 * @param index - índice do item na sequência
 * @param delayFactor - fator de atraso entre itens (padrão: 0.1)
 */
export const getStaggerDelay = (index: number, delayFactor = 0.1): number => {
  return index * delayFactor;
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
 * Transição padrão para hover
 */
export const hoverTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 17,
};
