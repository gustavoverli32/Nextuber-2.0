import React from 'react';
import { useApp } from '../../context/AppContext';
import { LayoutDashboard, Users, UserPlus, Compass } from 'lucide-react';

export const Drawer = () => {
  const { isDrawerOpen, setIsDrawerOpen, activePage, setActivePage, isGestorMode, setIsGestorMode, setIsLoginOpen } = useApp();

  if (!isDrawerOpen) return null;

  const navigate = (page) => {
    setActivePage(page);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div 
        className="drawer-overlay open" 
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      <div className="drawer open">
        <div className="drawer-header">
          <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '22px', color: 'var(--ink)' }}>
            Next<span style={{ color: 'var(--or)' }}>uber</span> 2.0
          </div>
          <div className="drawer-sub">Plataforma de Desenvolvimento</div>
        </div>

        <div className="drawer-nav">
          <div className="drawer-section-lbl">Navegação</div>

          <div 
            className={`drawer-item ${activePage === 'overview' ? 'active' : ''}`}
            onClick={() => navigate('overview')}
          >
            <LayoutDashboard size={20} />
            <span>Visão Geral</span>
          </div>

          <div 
            className={`drawer-item ${activePage === 'estagiarios' ? 'active' : ''}`}
            onClick={() => navigate('estagiarios')}
          >
            <Users size={20} />
            <span>Estagiários</span>
          </div>

          <div 
            className={`drawer-item ${activePage === 'cadastro' ? 'active' : ''}`}
            onClick={() => navigate('cadastro')}
          >
            <UserPlus size={20} />
            <span>Gestão & Cadastro</span>
          </div>

          <div 
            className={`drawer-item ${activePage === 'trilhas' ? 'active' : ''}`}
            onClick={() => navigate('trilhas')}
          >
            <Compass size={20} />
            <span>Trilhas de Dev</span>
          </div>
        </div>

        <div className="drawer-footer">
          <button 
            className={`drawer-mode-btn ${isGestorMode ? 'on' : ''}`}
            onClick={() => {
              setIsDrawerOpen(false);
              if (!isGestorMode) setIsLoginOpen(true);
              else setIsGestorMode(false);
            }}
          >
            {isGestorMode ? 'Modo Gestor (Ativo)' : 'Ativar Modo Gestor'}
          </button>
        </div>
      </div>
    </>
  );
};