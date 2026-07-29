import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const EstagiariosPage = () => {
  const { estagiarios, setSelectedEstagiario, toggleAtencao, isGestorMode } = useApp();
  const [filterAtencaoOnly, setFilterAtencaoOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = estagiarios.filter(est => {
    const matchesSearch = est.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          est.func.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAtencao = filterAtencaoOnly ? est.requerAtencao : true;
    return matchesSearch && matchesAtencao;
  });

  return (
    <div className="page active" id="page-estagiarios">
      <div className="ph" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1>Base de <em>Estagiários</em></h1>
          <p>Visão geral dos talentos e seus status de acompanhamento.</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button 
            className={`btn-atencao ${filterAtencaoOnly ? 'ativo' : ''}`}
            onClick={() => setFilterAtencaoOnly(!filterAtencaoOnly)}
          >
            ⚠️ {filterAtencaoOnly ? 'Mostrando Apenas Atenção' : 'Filtrar Requer Atenção'}
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '16px', position: 'relative', maxWidth: '360px' }}>
        <input 
          type="text"
          className="field-in"
          placeholder="Buscar por nome ou função..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: 0 }}
        />
      </div>

      <div className="notion-grid">
        {filtered.map((est) => (
          <div 
            key={est.id} 
            className={`notion-card ${est.requerAtencao ? 'nc-active' : ''}`}
            onClick={() => setSelectedEstagiario(est)}
          >
            <div className="nc-top">
              <div className="nc-avatar">{est.avatar}</div>
              <div className="nc-name">{est.name}</div>
              <span className="nc-arrow">→</span>
            </div>

            <div className="nc-meta">
              <span className="nc-chip func">{est.func}</span>
              <span className="nc-chip">Trilha: {est.track}</span>
              {est.requerAtencao && (
                <span className="nc-atencao">
                  <span className="nc-atencao-dot"></span>
                  Requer Atenção
                </span>
              )}
            </div>

            <div className="nc-bottom" style={{ marginTop: '4px' }}>
              <div className="nc-dots">
                <div className="nd done"></div>
                <div className="nd done"></div>
                <div className={`nd ${est.cicloProgress > 50 ? 'prog' : ''}`}></div>
                <div className={`nd ${est.cicloProgress > 80 ? 'done' : ''}`}></div>
              </div>
              <span className="nc-count">{est.cicloProgress}% concluído</span>
            </div>

            {isGestorMode && (
              <div style={{ marginTop: '8px', borderTop: '1px solid var(--border)', paddingTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
                <button 
                  className="cad-list-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAtencao(est.id);
                  }}
                >
                  {est.requerAtencao ? 'Remover Atenção' : 'Marcar Atenção'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};