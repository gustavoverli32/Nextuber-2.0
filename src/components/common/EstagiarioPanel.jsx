import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X } from 'lucide-react';

export const EstagiarioPanel = () => {
  const { selectedEstagiario, setSelectedEstagiario, isGestorMode, showToast } = useApp();
  const [obsText, setObsText] = useState('Excelente desempenho nas entregas do último sprint.');

  if (!selectedEstagiario) return null;

  const handleSaveObs = () => {
    showToast('Observações da Tutora salvas com sucesso!');
  };

  return (
    <>
      <div 
        className="overlay-backdrop"
        onClick={() => setSelectedEstagiario(null)}
      ></div>

      <div className="slide-panel">
        <div className="panel-hd">
          <div className="panel-av">{selectedEstagiario.avatar}</div>
          <div>
            <div className="panel-nm">{selectedEstagiario.name}</div>
            <div className="panel-fn">{selectedEstagiario.func} • Trilha: {selectedEstagiario.track}</div>
          </div>
          <button className="panel-close" onClick={() => setSelectedEstagiario(null)}>
            <X size={18} />
          </button>
        </div>

        <div className="panel-body">
          <div className="psec">
            <div className="psec-ttl">Resumo de Desempenho</div>
            <div className="prow">
              <span className="prow-lbl">Progresso do Ciclo:</span>
              <span className="prow-val">{selectedEstagiario.cicloProgress}%</span>
            </div>
            <div className="prow">
              <span className="prow-lbl">Status de Atenção:</span>
              <span className="prow-val" style={{ color: selectedEstagiario.requerAtencao ? '#EAB308' : '#16A34A' }}>
                {selectedEstagiario.requerAtencao ? '⚠️ Requer Atenção' : '✅ Regular'}
              </span>
            </div>
            <div className="prow">
              <span className="prow-lbl">Mês de Entrada:</span>
              <span className="prow-val">{selectedEstagiario.startMonth || 'Jan'}</span>
            </div>
          </div>

          <div className="psec">
            <div className="psec-ttl">Evolução Mensal no Trimestre</div>
            <div className="pmeses">
              <div className="pmes m-done">
                <div className="pmes-n">Mês 1 (Jan)</div>
                <div className="pmes-s">Concluído (90%)</div>
              </div>
              <div className="pmes m-active">
                <div className="pmes-n">Mês 2 (Fev)</div>
                <div className="pmes-s">Em Andamento</div>
              </div>
              <div className="pmes m-pend">
                <div className="pmes-n">Mês 3 (Mar)</div>
                <div className="pmes-s">Pendente</div>
              </div>
            </div>
          </div>

          <div className="psec psec-full">
            <div className="psec-ttl">Observações & Anotações da Tutora</div>
            <textarea 
              className="obs"
              value={obsText}
              onChange={(e) => setObsText(e.target.value)}
              disabled={!isGestorMode}
              placeholder="Escreva anotações importantes sobre a evolução do estagiário..."
            ></textarea>
            {isGestorMode && (
              <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
                <button className="btn-obs" onClick={handleSaveObs}>
                  Salvar Anotações
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};