import { useState, useEffect } from 'react';

/**
 * Interface de opções para o contador animado
 */
interface CounterOptions {
  duration?: number; // Duração da animação em milissegundos
  interval?: number; // Intervalo de atualização em milissegundos
  triggerOnce?: boolean; // Se a animação deve ocorrer apenas uma vez
}

/**
 * Hook personalizado para criar contadores animados
 *
 * Cria um contador que anima de 0 até um valor alvo quando
 * um elemento se torna visível na tela.
 *
 * @param targetValue - Valor final do contador
 * @param isVisible - Se o elemento está visível
 * @param options - Opções de configuração da animação
 * @returns O valor atual do contador
 */
export const useAnimatedCounter = (
  targetValue: number,
  isVisible: boolean,
  options: CounterOptions = {}
) => {
  // Extrai opções com valores padrão
  const {
    duration = 2000, // Duração padrão: 2 segundos
    interval = 20, // Intervalo padrão: 20ms
    triggerOnce = true, // Por padrão, anima apenas uma vez
  } = options;

  // Estado para armazenar o valor atual do contador
  const [count, setCount] = useState(0);

  // Estado para rastrear se a animação já ocorreu
  const [hasRun, setHasRun] = useState(false);

  // Efeito para animar o contador
  useEffect(() => {
    // Não faz nada se o elemento não estiver visível ou se já tiver sido animado (quando triggerOnce=true)
    if (!isVisible || (triggerOnce && hasRun)) return;

    // Calcula o incremento por etapa
    const step = targetValue / (duration / interval);
    let timer: NodeJS.Timeout;
    let currentCount = 0;

    // Função para iniciar a contagem
    const startCounting = () => {
      timer = setInterval(() => {
        currentCount += step;

        // Verifica se atingiu ou ultrapassou o valor alvo
        if (currentCount >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
          setHasRun(true);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, interval);
    };

    startCounting();

    // Limpa o timer quando o componente é desmontado
    return () => {
      clearInterval(timer);
    };
  }, [isVisible, targetValue, duration, interval, triggerOnce, hasRun]);

  return count;
};
