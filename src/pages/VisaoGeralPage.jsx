import React from 'react';
import { useApp } from '../context/AppContext';

export const VisaoGeralPage = () => {
  const { bannerData, setIsEditBannerOpen, setIsVerMaisOpen, estagiarios, isGestorMode } = useApp();

  const totalEstagiarios = estagiarios.length;
  const ativosNoMes = estagiarios.filter(e => e.status === 'Ativo').length;
  const atencaoCount = estagiarios.filter(e => e.requerAtencao).length;
  const avgProgress = Math.round(estagiarios.reduce((acc, curr) => acc + curr.cicloProgress, 0) / (totalEstagiarios || 1));

  return (
    <div className="page active" id="page-overview">
      <div className="ph">
        <h1>Visão Geral do <em>Programa</em></h1>
        <p>Acompanhe métricas em tempo real, ciclos e evolução dos talentos.</p>
      </div>

      <div className="banner" style={{ background: 'linear-gradient(135deg, var(--or), var(--or-d))', color: '#fff', padding: '24px 28px', borderRadius: 'var(--r)', marginBottom: '24px', display: 'block' }}>
        <div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '24px', marginBottom: '8px' }}>{bannerData.title}</h2>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>{bannerData.subtitle}</p>
        </div>
        <div style={{ marginTop: '14px', display: 'flex', gap: '10px' }}>
          <button className="banner-btn" style={{ background: '#fff', color: 'var(--or-d)', fontWeight: 600 }} onClick={() => setIsVerMaisOpen(true)}>
            Ver mais detalhes
          </button>
          {isGestorMode && (
            <button className="banner-btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => setIsEditBannerOpen(true)}>
              Editar Banner
            </button>
          )}
        </div>
      </div>

      <div className="metrics">
        <div className="mc">
          <div className="lbl">TOTAL ESTAGIÁRIOS</div>
          <div className="val">{totalEstagiarios}</div>
          <div className="hint">Cadastrados na base</div>
        </div>
        <div className="mc">
          <div className="lbl">ATIVOS NO MÊS</div>
          <div className="val">{ativosNoMes}</div>
          <div className="hint">Em acompanhamento</div>
        </div>
        <div className="mc lt">
          <div className="lbl">META DO TRIMESTRE</div>
          <div className="val">85%</div>
          <div className="hint">Alvo de conclusão</div>
        </div>
        <div className="mc ac">
          <div className="lbl">TAXA MÉDIA</div>
          <div className="val">{avgProgress}%</div>
          <div className="hint">Evolução média</div>
        </div>
      </div>

      <div className="g2">
        <div className="card">
          <div className="card-ttl">CICLOS DE ACOMPANHAMENTO</div>
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
          <div className="card-ttl">LINHA DO TEMPO TRIMESTRAL</div>
          <div className="tline">
            <div className="tcell c1 done"><div className="tnum">MÊS 1</div><div className="tname">Sem 1</div></div>
            <div className="tcell c1 done"><div className="tnum">MÊS 1</div><div className="tname">Sem 2</div></div>
            <div className="tcell c2 done"><div className="tnum">MÊS 2</div><div className="tname">Sem 3</div></div>
            <div className="tcell c2"><div className="tnum">MÊS 2</div><div className="tname">Sem 4</div></div>
            <div className="tcell c3"><div className="tnum">MÊS 3</div><div className="tname">Sem 5</div></div>
            <div className="tcell c3"><div className="tnum">MÊS 3</div><div className="tname">Sem 6</div></div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-ttl">ALERTAS E ATUALIZAÇÕES</div>
        <div className="agrid">
          <div className="arow warn">
            <span className="aicon">⚠️</span>
            <div><strong>{atencaoCount} Estagiário(s)</strong> requerem atenção no acompanhamento semanal.</div>
          </div>
          <div className="arow good">
            <span className="aicon">ℹ️</span>
            <div><strong>Próximo Alinhamento Geral:</strong> Quinta-feira às 14h com as tutoras.</div>
          </div>
        </div>
      </div>
    </div>
  );
};