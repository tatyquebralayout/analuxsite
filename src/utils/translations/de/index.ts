import { common } from './common';
import { pages } from './pages';
import { TranslationSchema } from '../../../types/translations';

/**
 * Combinação de todas as traduções em alemão
 */
export const de: Partial<TranslationSchema> = {
  ...common,
  ...pages,
  // Aqui seriam adicionadas outras seções específicas
};

export default de;
