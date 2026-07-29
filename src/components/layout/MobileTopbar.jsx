import React from 'react';
import { useApp } from '../../context/AppContext';

export const MobileTopbar = () => {
  const { isDrawerOpen, setIsDrawerOpen, isGestorMode, setIsGestorMode, setIsLoginOpen } = useApp();

  return (
    <div className="mob-topbar">
      <div 
        className={`mob-hamburger ${isDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="mob-topbar-title">Nextuber 2.0</div>
      <button 
        className={`mob-mode-btn ${isGestorMode ? 'on' : ''}`}
        onClick={() => {
          if (!isGestorMode) setIsLoginOpen(true);
          else setIsGestorMode(false);
        }}
      >
        {isGestorMode ? 'Gestor' : 'Estagiário'}
      </button>
    </div>
  );
};