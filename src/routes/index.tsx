import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/common/LoadingScreen';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Hundebetreuung = lazy(() => import('../pages/Hundebetreuung'));
const Hundetraining = lazy(() => import('../pages/Hundetraining'));
const Partnership = lazy(() => import('../pages/Partnership'));

/**
 * Configuração de rotas da aplicação
 *
 * Define todas as rotas disponíveis na aplicação usando React Router v6.
 * Todas as rotas são aninhadas dentro do componente Layout, que fornece
 * elementos comuns como header e footer.
 *
 * Rotas:
 * - / : Página inicial
 * - /services : Página de cuidados com cães (Hundebetreuung)
 * - /services/hundetraining : Página de treinamento de cães
 * - /about : Página sobre nós
 * - /partnership : Página de parcerias
 * - /contact : Página de contato
 * - /404 : Página não encontrada
 * - * : Redireciona para a página 404
 */
const AppRoutes: React.FC = () => {
  const location = useLocation();

  // Este efeito verificará se estamos na rota /404 diretamente
  // e redirecionará para a home se for o caso da primeira carga da página
  useEffect(() => {
    // Verificando se é a primeira carga (não tem histórico anterior)
    // e estamos diretamente na página 404
    if (location.pathname === '/404' && window.history.length <= 1) {
      window.location.href = '/'; // Redireciona para a raiz
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Hundebetreuung />} />
          <Route path="services/hundetraining" element={<Hundetraining />} />
          <Route path="about" element={<About />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
