/**
 * Funções de validação para formulários e campos de entrada
 */

/**
 * Funções utilitárias para validação de dados
 */

/**
 * Valida se uma string é um email válido
 * @param email - Email a ser validado
 * @returns true se for um email válido, false caso contrário
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida se uma string tem um comprimento mínimo
 * @param value - Valor a ser validado
 * @param minLength - Comprimento mínimo (padrão: 3)
 * @returns true se o comprimento for maior ou igual ao mínimo, false caso contrário
 */
export const hasMinLength = (value: string, minLength = 3): boolean => {
  return value.length >= minLength;
};

/**
 * Valida se uma string tem um comprimento máximo
 * @param value - Valor a ser validado
 * @param maxLength - Comprimento máximo (padrão: 100)
 * @returns true se o comprimento for menor ou igual ao máximo, false caso contrário
 */
export const hasMaxLength = (value: string, maxLength = 100): boolean => {
  return value.length <= maxLength;
};

/**
 * Valida se uma string está vazia
 * @param value - Valor a ser validado
 * @returns true se a string estiver vazia, false caso contrário
 */
export const isEmpty = (value: string): boolean => {
  return value.trim() === '';
};

/**
 * Valida se uma string não está vazia
 * @param value - Valor a ser validado
 * @returns true se a string não estiver vazia, false caso contrário
 */
export const isNotEmpty = (value: string): boolean => {
  return !isEmpty(value);
};

/**
 * Valida se um número está dentro de um intervalo
 * @param value - Número a ser validado
 * @param min - Valor mínimo (inclusivo)
 * @param max - Valor máximo (inclusivo)
 * @returns true se o número estiver dentro do intervalo, false caso contrário
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Valida um CPF brasileiro
 * @param cpf - CPF a ser validado (pode conter formatação)
 * @returns true se for um CPF válido, false caso contrário
 */
export const isValidCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  const cleanCPF = cpf.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (cleanCPF.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cleanCPF)) return false;

  // Cálculo do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }

  let remainder = sum % 11;
  const firstVerifier = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cleanCPF.charAt(9)) !== firstVerifier) return false;

  // Cálculo do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }

  remainder = sum % 11;
  const secondVerifier = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(cleanCPF.charAt(10)) === secondVerifier;
};

/**
 * Valida um CNPJ brasileiro
 * @param cnpj - CNPJ a ser validado (pode conter formatação)
 * @returns true se for um CNPJ válido, false caso contrário
 */
export const isValidCNPJ = (cnpj: string): boolean => {
  // Remove caracteres não numéricos
  const cleanCNPJ = cnpj.replace(/\D/g, '');

  // Verifica se tem 14 dígitos
  if (cleanCNPJ.length !== 14) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cleanCNPJ)) return false;

  // Cálculo do primeiro dígito verificador
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanCNPJ.charAt(i)) * weights1[i];
  }

  let remainder = sum % 11;
  const firstVerifier = remainder < 2 ? 0 : 11 - remainder;

  if (parseInt(cleanCNPJ.charAt(12)) !== firstVerifier) return false;

  // Cálculo do segundo dígito verificador
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  sum = 0;

  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanCNPJ.charAt(i)) * weights2[i];
  }

  remainder = sum % 11;
  const secondVerifier = remainder < 2 ? 0 : 11 - remainder;

  return parseInt(cleanCNPJ.charAt(13)) === secondVerifier;
};

/**
 * Valida um telefone brasileiro
 * @param phone - Telefone a ser validado (pode conter formatação)
 * @returns true se for um telefone válido, false caso contrário
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, '');
  // Aceita formatos com 10 ou 11 dígitos (com DDD)
  return /^([1-9]{2})(9?[0-9]{8})$/.test(cleanPhone);
};

/**
 * Valida um CEP brasileiro
 * @param cep - CEP a ser validado (pode conter formatação)
 * @returns true se for um CEP válido, false caso contrário
 */
export const isValidCEP = (cep: string): boolean => {
  const cleanCEP = cep.replace(/\D/g, '');
  return /^[0-9]{8}$/.test(cleanCEP);
};

/**
 * Valida uma URL
 * @param url - URL a ser validada
 * @returns true se for uma URL válida, false caso contrário
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Valida uma senha forte
 * @param password - Senha a ser validada
 * @param minLength - Comprimento mínimo (padrão: 8)
 * @returns true se for uma senha forte, false caso contrário
 */
export const isStrongPassword = (password: string, minLength = 8): boolean => {
  if (password.length < minLength) return false;

  // Deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
};

/**
 * Valida se duas senhas são iguais
 * @param password - Senha original
 * @param confirmPassword - Confirmação da senha
 * @returns true se as senhas forem iguais, false caso contrário
 */
export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};
