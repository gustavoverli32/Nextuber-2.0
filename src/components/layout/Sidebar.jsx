import React from 'react';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const { activePage, setActivePage, isGestorMode, setIsGestorMode, setIsLoginOpen } = useApp();

  return (
    <aside className="sidebar">
      <div style={{ padding: '0 16px 20px', borderBottom: '1px solid var(--border)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="pwa-icons/icon-512x512.png" 
          alt="Nextuber" 
          style={{ 
            width: '130px', 
            height: '130px', 
            borderRadius: '16px', 
            display: 'block', 
            boxShadow: '0 6px 18px rgba(236,112,0,0.3)',
            objectFit: 'cover'
          }} 
        />
      </div>

      <div className="nav-section">
        <div className="nav-lbl">PAINEL</div>
        
        <div 
          className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => setActivePage('home')}
        >
          <span style={{ fontSize: '14px' }}>📙</span>
          <span>Página inicial</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'acompanhamento' ? 'active' : ''}`}
          onClick={() => setActivePage('acompanhamento')}
        >
          <span style={{ fontSize: '14px' }}>🕸️</span>
          <span>Acompanhamento</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'cadastro' ? 'active' : ''}`}
          onClick={() => setActivePage('cadastro')}
        >
          <span style={{ fontSize: '14px' }}>📋</span>
          <span>Cadastro</span>
        </div>

        <div className="nav-lbl" style={{ marginTop: '16px' }}>PROGRAMA</div>

        <div 
          className={`nav-item ${activePage === 'trilhas' ? 'active' : ''}`}
          onClick={() => setActivePage('trilhas')}
        >
          <span style={{ fontSize: '14px' }}>🌖</span>
          <span>Trilhas</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'agendamentos' ? 'active' : ''}`}
          onClick={() => setActivePage('agendamentos')}
        >
          <span style={{ fontSize: '14px' }}>❇️</span>
          <span>Agendamentos</span>
        </div>

        <div className="nav-lbl" style={{ marginTop: '16px' }}>SISTEMA</div>

        <div 
          className={`nav-item ${activePage === 'configuracoes' ? 'active' : ''}`}
          onClick={() => setActivePage('configuracoes')}
        >
          <span style={{ fontSize: '14px' }}>⚙️</span>
          <span>Configurações</span>
        </div>
      </div>

      <div className="sb-progress" style={{ marginTop: '12px' }}>
        <div className="sb-progress-row">
          <span>PROGRESSO</span>
          <span>0%</span>
        </div>
        <div className="sb-track">
          <div className="sb-fill" style={{ width: '0%' }}></div>
        </div>
      </div>

      <div className="sb-mode" style={{ marginTop: '12px' }}>
        <button 
          className="btn-mode on"
          onClick={() => {
            if (!isGestorMode) setIsLoginOpen(true);
            else setIsGestorMode(false);
          }}
          style={{ borderRadius: '20px', padding: '10px', fontSize: '12.5px', fontWeight: 600 }}
        >
          <span className="mode-pulse"></span>
          {isGestorMode ? 'Sair do modo edição' : 'Entrar no modo edição'}
        </button>
      </div>

      <div className="sb-footer">
        <div style={{ fontSize: '11px', color: 'var(--ink3)' }}>Tutora regional</div>
        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Kamilla</div>
        <div style={{ fontSize: '11px', color: 'var(--ink3)' }}>6 meses · 3 ciclos</div>
      </div>
    </aside>
  );
};