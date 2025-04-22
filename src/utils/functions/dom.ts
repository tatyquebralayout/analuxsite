/**
 * Funções utilitárias para manipulação do DOM
 */

/**
 * Obtém a altura da janela do navegador
 * @returns Altura da janela em pixels
 */
export const getWindowHeight = (): number => {
  if (typeof window !== 'undefined') {
    return window.innerHeight;
  }
  return 0;
};

/**
 * Obtém a largura da janela do navegador
 * @returns Largura da janela em pixels
 */
export const getWindowWidth = (): number => {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 0;
};

/**
 * Verifica se o código está sendo executado no navegador
 * @returns true se estiver no navegador, false caso contrário
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Verifica se a tela atual é um dispositivo móvel
 * @param maxWidth - Largura máxima para considerar como dispositivo móvel (padrão: 768px)
 * @returns true se for um dispositivo móvel, false caso contrário
 */
export const isMobile = (maxWidth = 768): boolean => {
  return isBrowser() && window.innerWidth <= maxWidth;
};

/**
 * Obtém a posição de um elemento na página
 * @param element - O elemento DOM
 * @returns Objeto com propriedades top e left
 */
export const getElementPosition = (element: HTMLElement): { top: number; left: number } => {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
};

/**
 * Rola a página até um elemento específico
 * @param elementId - O ID do elemento para rolar até
 * @param offset - Deslocamento adicional em pixels (padrão: 0)
 * @param behavior - Comportamento da rolagem (padrão: 'smooth')
 */
export const scrollToElement = (
  elementId: string,
  offset = 0,
  behavior: ScrollBehavior = 'smooth'
): void => {
  if (!isBrowser()) return;

  const element = document.getElementById(elementId);
  if (element) {
    const position = getElementPosition(element).top - offset;
    window.scrollTo({
      top: position,
      behavior,
    });
  }
};

/**
 * Rola a página até o topo
 * @param behavior - Comportamento da rolagem (padrão: 'smooth')
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  if (!isBrowser()) return;

  window.scrollTo({
    top: 0,
    behavior,
  });
};

/**
 * Define ou obtém um item do localStorage
 * @param key - A chave do item
 * @param value - O valor a ser armazenado (opcional)
 * @returns O valor armazenado se nenhum valor for fornecido
 */
export const localStorageItem = (key: string, value?: string): string | null => {
  if (!isBrowser()) return null;

  if (value !== undefined) {
    localStorage.setItem(key, value);
    return value;
  }

  return localStorage.getItem(key);
};

/**
 * Remove um item do localStorage
 * @param key - A chave do item a ser removido
 */
export const removeLocalStorageItem = (key: string): void => {
  if (!isBrowser()) return;

  localStorage.removeItem(key);
};

/**
 * Define ou obtém um item do sessionStorage
 * @param key - A chave do item
 * @param value - O valor a ser armazenado (opcional)
 * @returns O valor armazenado se nenhum valor for fornecido
 */
export const sessionStorageItem = (key: string, value?: string): string | null => {
  if (!isBrowser()) return null;

  if (value !== undefined) {
    sessionStorage.setItem(key, value);
    return value;
  }

  return sessionStorage.getItem(key);
};

/**
 * Adiciona uma classe a um elemento
 * @param element - O elemento DOM
 * @param className - A classe a ser adicionada
 */
export const addClass = (element: HTMLElement, className: string): void => {
  element.classList.add(className);
};

/**
 * Remove uma classe de um elemento
 * @param element - O elemento DOM
 * @param className - A classe a ser removida
 */
export const removeClass = (element: HTMLElement, className: string): void => {
  element.classList.remove(className);
};

/**
 * Verifica se um elemento tem uma classe específica
 * @param element - O elemento DOM
 * @param className - A classe a ser verificada
 * @returns true se o elemento tiver a classe, false caso contrário
 */
export const hasClass = (element: HTMLElement, className: string): boolean => {
  return element.classList.contains(className);
};

/**
 * Alterna uma classe em um elemento
 * @param element - O elemento DOM
 * @param className - A classe a ser alternada
 */
export const toggleClass = (element: HTMLElement, className: string): void => {
  element.classList.toggle(className);
};
