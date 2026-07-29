import React from 'react';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const { activePage, setActivePage, isGestorMode, setIsGestorMode, setIsLoginOpen, estagiarios } = useApp();

  const totalEstagiarios = estagiarios.length;
  const concluidos = estagiarios.filter(e => e.cicloProgress >= 80).length;
  const pctGeral = totalEstagiarios > 0 ? Math.round((concluidos / totalEstagiarios) * 100) : 0;

  return (
    <aside className="sidebar">
      <div className="sb-logo">
        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: '24px', color: 'var(--ink)', marginBottom: '4px' }}>
          Next<span style={{ color: 'var(--or)' }}>uber</span>
        </div>
        <div className="sub">A próxima geração de Itubers</div>
      </div>

      <div className="nav-section">
        <div className="nav-lbl">Menu Principal</div>
        
        <div 
          className={`nav-item ${activePage === 'overview' ? 'active' : ''}`}
          onClick={() => setActivePage('overview')}
        >
          <span>Visão Geral</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'estagiarios' ? 'active' : ''}`}
          onClick={() => setActivePage('estagiarios')}
        >
          <span>Estagiários</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'cadastro' ? 'active' : ''}`}
          onClick={() => setActivePage('cadastro')}
        >
          <span>Gestão & Cadastro</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'trilhas' ? 'active' : ''}`}
          onClick={() => setActivePage('trilhas')}
        >
          <span>Trilhas de Dev</span>
        </div>
      </div>

      <div className="sb-progress">
        <div className="sb-progress-row">
          <span>Meta do Ciclo</span>
          <span>{pctGeral}%</span>
        </div>
        <div className="sb-track">
          <div className="sb-fill" style={{ width: `${pctGeral}%` }}></div>
        </div>
      </div>

      <div className="sb-mode">
        <button 
          className={`btn-mode ${isGestorMode ? 'on' : ''}`}
          onClick={() => {
            if (!isGestorMode) {
              setIsLoginOpen(true);
            } else {
              setIsGestorMode(false);
            }
          }}
        >
          <span className="mode-pulse"></span>
          {isGestorMode ? 'Modo Gestor (Ativo)' : 'Modo Estagiário'}
        </button>
      </div>

      <div className="sb-footer">
        Plataforma <strong>Nextuber</strong>
      </div>
    </aside>
  );
};