import React, { useState } from 'react';
import { initialTrilhas } from '../services/supabase';
import { RichEditor } from '../components/common/RichEditor';
import { useApp } from '../context/AppContext';

export const TrilhasPage = () => {
  const { isGestorMode, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('tecnico');
  const [openAccordions, setOpenAccordions] = useState({ 0: true });

  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const currentTrilha = initialTrilhas.find(t => t.id === activeTab) || initialTrilhas[0];

  const toggleAccordion = (idx) => {
    setOpenAccordions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleAddConteudo = (e) => {
    e.preventDefault();
    if (!newTitle) {
      showToast('Preencha o título do conteúdo.');
      return;
    }

    currentTrilha.topicos.push({
      num: currentTrilha.topicos.length + 1,
      tema: newTitle,
      obj: newContent || 'Conteúdo complementar inserido.',
      acoes: ['Estudar o material fornecido', 'Aplicar no projeto'],
      tutora: 'Tutora: "Aproveite a leitura!"',
      checks: ['Leitura concluída']
    });

    setNewTitle('');
    setNewContent('');
    setShowForm(false);
    showToast('Novo conteúdo adicionado à trilha!');
  };

  return (
    <div className="page active" id="page-trilhas">
      <div className="ph">
        <h1>Trilhas de <em>Desenvolvimento</em></h1>
        <p>Guias práticos, rotinas de estudos e checklists por área de atuação.</p>
      </div>

      <div className="trilha-tabs">
        {initialTrilhas.map((t) => (
          <button
            key={t.id}
            className={`trilha-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            <span className="tt-dot" style={{ background: t.color }}></span>
            {t.name}
          </button>
        ))}
      </div>

      <div className="t-header">
        <h2>{currentTrilha.title}</h2>
        <div className="tdesc">{currentTrilha.desc}</div>
        <div className="tfrase" style={{ color: currentTrilha.color }}>{currentTrilha.slogan}</div>
      </div>

      {currentTrilha.topicos.map((topico, idx) => {
        const isOpen = !!openAccordions[idx];

        return (
          <div key={idx} className={`acc-card ${isOpen ? 'open' : ''}`}>
            <div className="acc-header" onClick={() => toggleAccordion(idx)}>
              <div className="acc-num" style={{ background: currentTrilha.color, color: '#fff' }}>
                {topico.num}
              </div>
              <div className="acc-title">{topico.tema}</div>
              <span className="acc-arrow">›</span>
            </div>

            <div className="acc-body">
              <div className="acc-body-inner">
                <div style={{ marginBottom: '12px', color: 'var(--ink2)' }}>
                  <strong>Objetivo:</strong> {topico.obj}
                </div>

                <div className="t-body" style={{ background: 'var(--bg)', borderRadius: '8px', padding: '12px', marginTop: '10px' }}>
                  <div className="t-col">
                    <div className="t-col-ttl">Ações Práticas</div>
                    {topico.acoes.map((acao, aIdx) => (
                      <div key={aIdx} className="t-acao">
                        <div className="t-bullet" style={{ background: currentTrilha.color }}></div>
                        <span>{acao}</span>
                      </div>
                    ))}
                  </div>

                  <div className="t-col">
                    <div className="t-col-ttl">Checklist do Módulo</div>
                    {topico.checks.map((chk, cIdx) => (
                      <div key={cIdx} className="t-check">
                        <input type="checkbox" style={{ accentColor: currentTrilha.color }} />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="t-tutora" style={{ marginTop: '12px' }}>
                  💬 <em>{topico.tutora}</em>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {isGestorMode && (
        <div style={{ marginTop: '24px' }}>
          {!showForm ? (
            <button className="btn-show-add" onClick={() => setShowForm(true)}>
              + Adicionar Novo Conteúdo à Trilha
            </button>
          ) : (
            <form onSubmit={handleAddConteudo} className="add-conteudo-form">
              <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>
                Novo Módulo / Conteúdo na Trilha ({currentTrilha.name})
              </h4>

              <div style={{ marginBottom: '12px' }}>
                <label className="field-lbl">Título do Módulo</label>
                <input 
                  type="text" 
                  className="lin"
                  placeholder="Ex: Padrões de Projeto e Microserviços"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label className="field-lbl">Descrição / Conteúdo Rico</label>
                <RichEditor 
                  value={newContent}
                  onChange={setNewContent}
                  placeholder="Escreva a descrição do módulo, links úteis e recomendações..."
                />
              </div>

              <div className="add-conteudo-footer">
                <button type="submit" className="btn-add-content">Salvar Conteúdo</button>
                <button type="button" className="btn-cancel-content" onClick={() => setShowForm(false)}>Cancelar</button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};