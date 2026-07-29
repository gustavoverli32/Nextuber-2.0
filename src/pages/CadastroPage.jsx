import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { exportEstagiariosToExcel } from '../services/exportExcel';
import { Download } from 'lucide-react';

export const CadastroPage = () => {
  const { estagiarios, addEstagiario, isGestorMode, setIsLoginOpen, showToast } = useApp();

  const [name, setName] = useState('');
  const [func, setFunc] = useState('');
  const [track, setTrack] = useState('Técnico');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !func) {
      showToast('Por favor, preencha o nome e a função.');
      return;
    }

    addEstagiario({ name, func, track, email });
    setName('');
    setFunc('');
    setEmail('');
  };

  const handleExport = () => {
    exportEstagiariosToExcel(estagiarios);
    showToast('Relatório em Excel gerado com sucesso!');
  };

  if (!isGestorMode) {
    return (
      <div className="page-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '42px', marginBottom: '16px' }}>🔒</div>
        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '24px', marginBottom: '8px' }}>
          Área Restrita a Gestores
        </h2>
        <p style={{ color: 'var(--ink2)', fontSize: '14px', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
          O cadastro e gerenciamento de estagiários exige autenticação do modo gestor.
        </p>
        <button className="btn-save" onClick={() => setIsLoginOpen(true)}>
          Ativar Modo Gestor
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="ph" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1>Gestão & <em>Cadastro</em></h1>
          <p>Adicione novos talentos ou exporte os dados cadastrados.</p>
        </div>

        <button 
          className="btn-mode"
          onClick={handleExport}
          style={{ width: 'auto', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <Download size={14} />
          Exportar Relatório (.XLSX)
        </button>
      </div>

      <div className="g2">
        <div className="cad-single-card">
          <div className="cad-single-header">
            <div className={`cad-single-av ${name ? 'filled' : ''}`}>
              {name ? name.charAt(0).toUpperCase() : '+'}
            </div>
            <div>
              <div className="cad-single-title">Cadastrar Novo Estagiário</div>
              <div className="cad-single-sub">Preencha os dados básicos abaixo</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="cad-single-fields">
              <div className="field-grp">
                <label className="field-lbl">Nome Completo</label>
                <input 
                  type="text" 
                  className="field-in" 
                  placeholder="Ex: Clara Mendes" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="field-grp">
                <label className="field-lbl">Cargo / Função</label>
                <input 
                  type="text" 
                  className="field-in" 
                  placeholder="Ex: Front-end Dev" 
                  value={func}
                  onChange={(e) => setFunc(e.target.value)}
                />
              </div>

              <div className="field-grp">
                <label className="field-lbl">Trilha de Dev</label>
                <select 
                  className="field-in"
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                >
                  <option value="Técnico">Técnico</option>
                  <option value="Dados">Dados</option>
                  <option value="Produto">Produto</option>
                  <option value="Liderança">Liderança</option>
                </select>
              </div>

              <div className="field-grp">
                <label className="field-lbl">E-mail Institucional</label>
                <input 
                  type="email" 
                  className="field-in" 
                  placeholder="estagiario@itau.com.br" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="cad-single-footer">
              <button type="submit" className="btn-cad-add">
                Salvar Cadastro
              </button>
            </div>
          </form>
        </div>

        <div>
          <div className="cad-list-title">
            <span>Estagiários Cadastrados</span>
            <span className="cad-list-count">{estagiarios.length}</span>
          </div>

          {estagiarios.map((est) => (
            <div key={est.id} className="cad-list-row">
              <div className="cad-list-av">{est.avatar}</div>
              <div className="cad-list-info">
                <div className="cad-list-name">{est.name}</div>
                <div className="cad-list-meta">
                  <span>{est.func}</span>
                  <span>• {est.track}</span>
                </div>
              </div>
              <span className="nc-chip" style={{ fontSize: '11px' }}>{est.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};