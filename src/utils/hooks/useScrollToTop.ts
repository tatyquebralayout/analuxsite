import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado para rolar para o topo da página
 * 
 * Rola a página para o topo automaticamente quando a rota muda.
 * Útil para garantir que o usuário comece a visualizar uma nova
 * página a partir do topo.
 */
export const useScrollToTop = () => {
  // Obtém o pathname atual da URL
  const { pathname } = useLocation();
  
  // Efeito para rolar para o topo quando o pathname muda
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Rolagem suave
    });
  }, [pathname]);  // Executa quando o pathname muda
};