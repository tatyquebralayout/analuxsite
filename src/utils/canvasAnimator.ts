/**
 * Classe utilitária para gerenciar animações baseadas em Canvas de forma consistente
 *
 * Esta classe resolve problemas comuns de animações Canvas:
 * 1. Usa deltaTime para garantir animações consistentes em diferentes dispositivos
 * 2. Simplifica gerenciamento do ciclo de animação (iniciar/parar)
 * 3. Facilita limpeza de recursos ao desmontar componentes
 */
export class CanvasAnimator {
  private lastTime: number = 0;
  private animationFrameId: number | null = null;
  private isRunning: boolean = false;

  /**
   * @param animationCallback Função chamada a cada frame da animação
   * @param speedFactor Fator de velocidade da animação (1.0 = normal)
   * @param onStatsUpdate Opcional: callback para estatísticas de performance
   */
  constructor(
    private animationCallback: (deltaTime: number, elapsedTime: number) => void,
    private speedFactor: number = 1.0,
    private onStatsUpdate?: (stats: { fps: number; deltaTime: number }) => void
  ) {}

  /**
   * Inicia a animação
   */
  start() {
    if (this.isRunning) return;

    this.lastTime = performance.now();
    this.isRunning = true;
    this.animationFrameId = requestAnimationFrame(this.animate);

    return this; // Para encadeamento de métodos
  }

  /**
   * Para a animação
   */
  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
      this.isRunning = false;
    }

    return this; // Para encadeamento de métodos
  }

  /**
   * Ajusta o fator de velocidade da animação
   */
  setSpeedFactor(factor: number) {
    this.speedFactor = factor;
    return this; // Para encadeamento de métodos
  }

  /**
   * Verifica se a animação está em execução
   */
  isActive(): boolean {
    return this.isRunning;
  }

  /**
   * Frame de animação principal
   * Usa deltaTime para garantir velocidade consistente em diferentes taxas de quadros
   */
  private animate = (currentTime: number) => {
    // Cálculo do delta time em segundos
    const deltaTimeMs = currentTime - this.lastTime;
    this.lastTime = currentTime;

    // Converte para segundos e aplica o fator de velocidade
    const normalizedDelta = deltaTimeMs * 0.001 * this.speedFactor;

    // Tempo total decorrido desde o início (útil para algumas animações)
    const elapsedTime = currentTime * 0.001;

    // Calcula FPS para estatísticas (opcional)
    if (this.onStatsUpdate && deltaTimeMs > 0) {
      const fps = Math.round(1000 / deltaTimeMs);
      this.onStatsUpdate({ fps, deltaTime: normalizedDelta });
    }

    // Executa o callback de animação com o delta time normalizado
    this.animationCallback(normalizedDelta, elapsedTime);

    // Continua o loop de animação
    if (this.isRunning) {
      this.animationFrameId = requestAnimationFrame(this.animate);
    }
  };
}

/**
 * Hook React para usar a classe CanvasAnimator em componentes funcionais
 *
 * Exemplo de uso:
 * ```
 * const { animator, stats } = useCanvasAnimation((deltaTime) => {
 *   // Atualizar canvas aqui usando deltaTime
 * });
 *
 * useEffect(() => {
 *   animator.start();
 *   return () => animator.stop();
 * }, []);
 * ```
 */
export function createCanvasAnimation(
  callback: (deltaTime: number, elapsedTime: number) => void,
  speedFactor: number = 1.0
): CanvasAnimator {
  return new CanvasAnimator(callback, speedFactor);
}
