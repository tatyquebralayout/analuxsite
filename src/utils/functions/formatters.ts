/**
 * Funções utilitárias para formatação
 */

/**
 * Formata um valor monetário para o formato de moeda
 *
 * @param value - Valor a ser formatado
 * @param locale - Localização para formatação (padrão: de-CH para Suíça)
 * @param currency - Moeda (padrão: CHF)
 * @returns Valor formatado como string
 */
export const formatCurrency = (value: number, locale = 'de-CH', currency = 'CHF'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Formata uma data para o formato local
 *
 * @param date - Data a ser formatada
 * @param locale - Localização para formatação (padrão: de-CH para Suíça)
 * @returns Data formatada como string
 */
export const formatDate = (date: Date | string | number, locale = 'de-CH'): string => {
  const dateObject = typeof date === 'object' ? date : new Date(date);

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObject);
};

/**
 * Capitaliza a primeira letra de uma string
 *
 * @param text - Texto a ser capitalizado
 * @returns Texto com a primeira letra em maiúsculo
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Trunca um texto para o tamanho máximo, adicionando reticências
 *
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo (padrão: 100)
 * @returns Texto truncado
 */
export const truncateText = (text: string, maxLength = 100): string => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
