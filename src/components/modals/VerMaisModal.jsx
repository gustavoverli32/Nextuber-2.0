import React from 'react';
import { useApp } from '../../context/AppContext';

export const VerMaisModal = () => {
  const { isVerMaisOpen, setIsVerMaisOpen } = useApp();

  if (!isVerMaisOpen) return null;

  return (
    <div className="modal-ov open">
      <div className="modal-box" style={{ maxWidth: '480px' }}>
        <h3>Detalhes do Projeto Nextuber 2.0</h3>
        
        <p style={{ fontSize: '13.5px', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '16px' }}>
          O Nextuber 2.0 é a plataforma oficial de aceleração e acompanhamento dos novos estagiários (Itubers). 
          Projetada com arquitetura reativa modular em React + Vite, ela garante performance máxima, isolamento de dados e facilidade para expansão contínua.
        </p>

        <div style={{ background: 'var(--bg)', padding: '12px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '12.5px', color: 'var(--ink)' }}>
          <strong>Principais Recursos:</strong>
          <ul style={{ paddingLeft: '18px', marginTop: '6px', lineHeight: 1.5 }}>
            <li>Trilhas de Desenvolvimento Personalizadas</li>
            <li>Acompanhamento de Ciclo Trimestral</li>
            <li>Módulo de Cadastro & Controle de Atenção</li>
            <li>Exportação de relatórios em Excel (.xlsx)</li>
          </ul>
        </div>

        <div className="modal-btns">
          <button className="btn-sm pr" onClick={() => setIsVerMaisOpen(false)}>Fechar</button>
        </div>
      </div>
    </div>
  );
};