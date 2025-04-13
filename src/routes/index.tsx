import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ServiceDetails from '../pages/ServiceDetails';
import About from '../pages/About';
import Partnership from '../pages/Partnership';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';

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
    </BrowserRouter>
  );
};

export default AppRoutes;