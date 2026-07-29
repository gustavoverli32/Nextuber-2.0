import React from 'react';
import { useApp } from '../context/AppContext';
import { AlertTriangle, Info, Edit3 } from 'lucide-react';

export const VisaoGeralPage = () => {
  const { bannerData, setIsEditBannerOpen, setIsVerMaisOpen, estagiarios, isGestorMode } = useApp();

  const totalEstagiarios = estagiarios.length;
  const ativosNoMes = estagiarios.filter(e => e.status === 'Ativo').length;
  const atencaoCount = estagiarios.filter(e => e.requerAtencao).length;
  const avgProgress = Math.round(estagiarios.reduce((acc, curr) => acc + curr.cicloProgress, 0) / (totalEstagiarios || 1));

  return (
    <div className="page-container">
      {/* Banner Principal */}
      <div style={{
        background: 'linear-gradient(135deg, var(--or), var(--or-d))',
        borderRadius: 'var(--r)',
        padding: '24px 28px',
        color: '#fff',
        marginBottom: '24px',
        boxShadow: '0 8px 24px rgba(236,112,0,0.2)',
        position: 'relative'
      }}>
        <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '24px', marginBottom: '8px' }}>
          {bannerData.title}
        </h2>
        <p style={{ fontSize: '14px', opacity: 0.9, maxWidth: '640px', lineHeight: 1.5 }}>
          {bannerData.subtitle}
        </p>

        <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button 
            className="btn-sm" 
            style={{ background: '#fff', color: 'var(--or-d)', border: 'none', fontWeight: 600 }}
            onClick={() => setIsVerMaisOpen(true)}
          >
            Ver mais detalhes
          </button>
          
          {isGestorMode && (
            <button 
              className="btn-sm" 
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              onClick={() => setIsEditBannerOpen(true)}
            >
              <Edit3 size={13} />
              Editar Banner
            </button>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="mc">
          <div className="lbl">Total Estagiários</div>
          <div className="val">{totalEstagiarios}</div>
          <div className="hint">Cadastrados na base</div>
        </div>

        <div className="mc">
          <div className="lbl">Ativos no Mês</div>
          <div className="val">{ativosNoMes}</div>
          <div className="hint">Em acompanhamento</div>
        </div>

        <div className="mc lt">
          <div className="lbl">Meta do Trimestre</div>
          <div className="val">85%</div>
          <div className="hint">Alvo de conclusão</div>
        </div>

        <div className="mc ac">
          <div className="lbl">Taxa Médica</div>
          <div className="val">{avgProgress}%</div>
          <div className="hint">Evolução média</div>
        </div>
      </div>

      {/* Grid de Ciclo e Linha do Tempo */}
      <div className="g2">
        <div className="card">
          <div className="card-ttl">Ciclos de Acompanhamento</div>
          
          {estagiarios.slice(0, 4).map((est) => (
            <div key={est.id} className="cbar">
              <div className="cdot" style={{ background: est.requerAtencao ? '#EAB308' : 'var(--or)' }}></div>
              <div className="cname">{est.name}</div>
              <div className="ctrack">
                <div className="cfill" style={{ width: `${est.cicloProgress}%`, background: est.requerAtencao ? '#EAB308' : 'var(--or)' }}></div>
              </div>
              <div className="cpct">{est.cicloProgress}%</div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-ttl">Linha do Tempo Trimestral</div>
          <div className="tline">
            <div className="tcell c1 done">
              <div className="tnum">MÊS 1</div>
              <div className="tname">Sem 1</div>
            </div>
            <div className="tcell c1 done">
              <div className="tnum">MÊS 1</div>
              <div className="tname">Sem 2</div>
            </div>
            <div className="tcell c2 done">
              <div className="tnum">MÊS 2</div>
              <div className="tname">Sem 3</div>
            </div>
            <div className="tcell c2">
              <div className="tnum">MÊS 2</div>
              <div className="tname">Sem 4</div>
            </div>
            <div className="tcell c3">
              <div className="tnum">MÊS 3</div>
              <div className="tname">Sem 5</div>
            </div>
            <div className="tcell c3">
              <div className="tnum">MÊS 3</div>
              <div className="tname">Sem 6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Alertas */}
      <div className="card">
        <div className="card-ttl">Alertas e Atualizações</div>
        <div className="agrid">
          <div className="arow warn">
            <AlertTriangle size={14} className="aicon" />
            <div>
              <strong>{atencaoCount} Estagiário(s)</strong> requerem atenção no acompanhamento semanal.
            </div>
          </div>
          <div className="arow good">
            <Info size={14} className="aicon" />
            <div>
              <strong>Próximo Alinhamento Geral:</strong> Quinta-feira às 14h com as tutoras.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};