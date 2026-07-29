import React from 'react';
import { useApp } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { MobileTopbar } from './components/layout/MobileTopbar';
import { Drawer } from './components/layout/Drawer';
import { VisaoGeralPage } from './pages/VisaoGeralPage';
import { EstagiariosPage } from './pages/EstagiariosPage';
import { CadastroPage } from './pages/CadastroPage';
import { TrilhasPage } from './pages/TrilhasPage';
import { EstagiarioPanel } from './components/common/EstagiarioPanel';
import { Toast } from './components/common/Toast';
import { LoginModal } from './components/modals/LoginModal';
import { EditBannerModal } from './components/modals/EditBannerModal';
import { VerMaisModal } from './components/modals/VerMaisModal';

export const App = () => {
  const { activePage } = useApp();

  return (
    <div className="app-layout">
      {/* Sidebar Desktop */}
      <Sidebar />

      {/* Topbar Mobile */}
      <MobileTopbar />

      {/* Drawer Mobile */}
      <Drawer />

      {/* Conteúdo Principal */}
      <main className="main-content">
        {activePage === 'overview' && <VisaoGeralPage />}
        {activePage === 'estagiarios' && <EstagiariosPage />}
        {activePage === 'cadastro' && <CadastroPage />}
        {activePage === 'trilhas' && <TrilhasPage />}
      </main>

      {/* Overlays e Modais */}
      <EstagiarioPanel />
      <LoginModal />
      <EditBannerModal />
      <VerMaisModal />
      <Toast />
    </div>
  );
};

export default App;