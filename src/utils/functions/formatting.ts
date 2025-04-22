/**
 * Funções de formatação para textos e valores
 */

/**
 * Formata um número como moeda
 * @param value - O valor a ser formatado
 * @param locale - A localidade para formatação (padrão: 'pt-BR')
 * @param currency - O código da moeda (padrão: 'BRL')
 * @returns String formatada como moeda
 */
export const formatCurrency = (value: number, locale = 'pt-BR', currency = 'BRL'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

/**
 * Formata um número com casas decimais específicas
 * @param value - O valor a ser formatado
 * @param decimalPlaces - Número de casas decimais (padrão: 2)
 * @param locale - A localidade para formatação (padrão: 'pt-BR')
 * @returns String formatada com o número de casas decimais especificado
 */
export const formatNumber = (value: number, decimalPlaces = 2, locale = 'pt-BR'): string => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value);
};

/**
 * Formata uma data para o formato local
 * @param date - A data a ser formatada (Date ou string ISO)
 * @param locale - A localidade para formatação (padrão: 'pt-BR')
 * @returns String formatada de acordo com a localidade
 */
export const formatDate = (date: Date | string, locale = 'pt-BR'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale);
};

/**
 * Formata uma data e hora para o formato local
 * @param date - A data a ser formatada (Date ou string ISO)
 * @param locale - A localidade para formatação (padrão: 'pt-BR')
 * @returns String formatada com data e hora de acordo com a localidade
 */
export const formatDateTime = (date: Date | string, locale = 'pt-BR'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleString(locale);
};

/**
 * Limita uma string a um número máximo de caracteres e adiciona reticências se necessário
 * @param text - O texto a ser limitado
 * @param maxLength - O comprimento máximo (padrão: 100)
 * @param suffix - O sufixo a ser adicionado quando o texto é truncado (padrão: '...')
 * @returns String limitada ao comprimento especificado
 */
export const truncateText = (text: string, maxLength = 100, suffix = '...'): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Formata um número de telefone brasileiro
 * @param phone - O número de telefone (apenas dígitos)
 * @returns String formatada como número de telefone brasileiro
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');

  if (cleaned.length === 11) {
    // Celular com DDD: (xx) xxxxx-xxxx
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`;
  } else if (cleaned.length === 10) {
    // Telefone fixo com DDD: (xx) xxxx-xxxx
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
  }

  // Se não for um formato reconhecido, retorna como está
  return phone;
};

/**
 * Formata um CPF
 * @param cpf - O CPF (apenas dígitos)
 * @returns String formatada como CPF (xxx.xxx.xxx-xx)
 */
export const formatCPF = (cpf: string): string => {
  const cleaned = cpf.replace(/\D/g, '');

  if (cleaned.length !== 11) return cpf;

  return `${cleaned.substring(0, 3)}.${cleaned.substring(3, 6)}.${cleaned.substring(
    6,
    9
  )}-${cleaned.substring(9)}`;
};

/**
 * Formata um CNPJ
 * @param cnpj - O CNPJ (apenas dígitos)
 * @returns String formatada como CNPJ (xx.xxx.xxx/xxxx-xx)
 */
export const formatCNPJ = (cnpj: string): string => {
  const cleaned = cnpj.replace(/\D/g, '');

  if (cleaned.length !== 14) return cnpj;

  return `${cleaned.substring(0, 2)}.${cleaned.substring(2, 5)}.${cleaned.substring(
    5,
    8
  )}/${cleaned.substring(8, 12)}-${cleaned.substring(12)}`;
};
