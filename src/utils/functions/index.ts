// Arquivo de exportação central para funções utilitárias

// Exportação de funções de validação
export * from './validation';

// Exportação de funções de formatação
// Formatters (CH) e formatting (BR) têm algumas funções com mesmo nome
// mas implementações específicas para regiões diferentes
export * from './formatters';
// Re-exportação explícita para evitar conflitos
export {
  formatNumber,
  formatDateTime,
  formatPhoneNumber,
  formatCPF,
  formatCNPJ,
} from './formatting';

// Exportação de funções de animação
export * from './animations';

// Exportação de funções de DOM
export * from './dom';
