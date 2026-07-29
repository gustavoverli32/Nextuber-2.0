import React from 'react';
import { useApp } from '../../context/AppContext';
import { LayoutDashboard, Users, UserPlus, Compass } from 'lucide-react';

export const Sidebar = () => {
  const { activePage, setActivePage, isGestorMode, setIsGestorMode, setIsLoginOpen, estagiarios } = useApp();

  const totalEstagiarios = estagiarios.length;
  const concluidos = estagiarios.filter(e => e.cicloProgress >= 80).length;
  const pctGeral = totalEstagiarios > 0 ? Math.round((concluidos / totalEstagiarios) * 100) : 0;

  return (
    <aside className="sidebar">
      <div className="sb-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'var(--or)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontFamily: 'DM Serif Display, serif'
          }}>N</div>
          <span style={{ fontFamily: 'DM Serif Display, serif', fontSize: '20px', color: 'var(--ink)' }}>
            Next<span style={{ color: 'var(--or)' }}>uber</span> 2.0
          </span>
        </div>
        <div className="sub">A próxima geração de Itubers</div>
      </div>

      <div className="nav-section">
        <div className="nav-lbl">Menu Principal</div>
        
        <div 
          className={`nav-item ${activePage === 'overview' ? 'active' : ''}`}
          onClick={() => setActivePage('overview')}
        >
          <LayoutDashboard size={16} />
          <span>Visão Geral</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'estagiarios' ? 'active' : ''}`}
          onClick={() => setActivePage('estagiarios')}
        >
          <Users size={16} />
          <span>Estagiários</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'cadastro' ? 'active' : ''}`}
          onClick={() => setActivePage('cadastro')}
        >
          <UserPlus size={16} />
          <span>Gestão & Cadastro</span>
        </div>

        <div 
          className={`nav-item ${activePage === 'trilhas' ? 'active' : ''}`}
          onClick={() => setActivePage('trilhas')}
        >
          <Compass size={16} />
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
        <div>Plataforma <strong>Nextuber 2.0</strong></div>
        <div style={{ fontSize: '11px', marginTop: '2px' }}>Versão React + Vite</div>
      </div>
    </aside>
  );
};