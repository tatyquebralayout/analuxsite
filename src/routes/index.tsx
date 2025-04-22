import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/common/LoadingScreen';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails'));
const About = lazy(() => import('../pages/About'));
const Partnership = lazy(() => import('../pages/Partnership'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

/**
 * Configuração de rotas da aplicação
 *
 * Define todas as rotas disponíveis na aplicação usando React Router v6.
 * Todas as rotas são aninhadas dentro do componente Layout, que fornece
 * elementos comuns como header e footer.
 *
 * Rotas:
 * - / : Página inicial
 * - /services : Página de serviços
 * - /services/:serviceId : Detalhes de um serviço específico
 * - /about : Página sobre nós
 * - /partnership : Página de parcerias
 * - /contact : Página de contato
 * - /404 : Página não encontrada
 * - * : Redireciona para a página 404
 */
const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<ServiceDetails />} />
            <Route path="about" element={<About />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="contact" element={<Contact />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
