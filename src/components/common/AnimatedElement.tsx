import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePerformance } from '../../contexts';
import { AnimationProps } from '../../types';

interface AnimatedElementProps extends AnimationProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'h1' | 'h2' | 'h3' | 'p' | 'button' | 'span';
  threshold?: number;
  triggerOnce?: boolean;
  id?: string;
  onClick?: () => void;
  delay?: number;
}

/**
 * Componente reutilizável para elementos animados
 *
 * Utiliza o framer-motion para aplicar animações e transições
 * com detecção automática de visibilidade na tela.
 *
 * Respeita preferências de performance e redução de movimento.
 */
const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  as = 'div',
  threshold = 0.1,
  triggerOnce = true,
  id,
  initial = { opacity: 0, y: 20 },
  animate,
  transition = { duration: 0.6 },
  variants,
  custom,
  onClick,
  delay = 0,
  ...props
}) => {
  // Obtém referência e estado de visibilidade para animação baseada em scroll
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  // Verifica se deve aplicar otimizações de performance
  const { shouldOptimize } = usePerformance();

  // Se otimização estiver ativada, não aplica animações
  const defaultAnimate = shouldOptimize
    ? { opacity: 1, y: 0 }
    : animate || (inView ? { opacity: 1, y: 0 } : initial);

  // Ajusta atraso na transição se especificado
  const finalTransition = delay ? { ...transition, delay: Number(delay) } : transition;

  // Retorna o componente motion adequado com base no tipo solicitado
  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      id={id}
      initial={shouldOptimize ? { opacity: 1, y: 0 } : initial}
      animate={defaultAnimate}
      transition={finalTransition}
      variants={variants}
      custom={custom}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedElement;
