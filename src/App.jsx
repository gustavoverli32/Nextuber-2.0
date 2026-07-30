import React, { useEffect } from 'react';
import { initEngine } from './engine/originalEngine';

export const App = () => {
  useEffect(() => {
    initEngine();
  }, []);

  return (
    <div className="layout">
      {/*  MOBILE TOP BAR  */}
  <div className="mob-topbar" id="mobTopbar">
    <div className="mob-hamburger" id="hamburger"><span></span><span></span><span></span></div>
    <div className="mob-topbar-title">Nextuber</div>
    <button className="mob-mode-btn" id="mobileModeBtn">Fazer login</button>
  </div>

  {/*  SIDEBAR  */}
  <aside className="sidebar">
    <div className="sb-logo">
      <img src="pwa-icons/icon-512x512.png" alt="Nextuber" style={{"width":"140px","display":"block","margin":"0 auto","borderRadius":"8px"}} />
    </div>
    <div className="nav-section">
      <div className="nav-lbl">Painel</div>
      <div className="nav-item active" data-page="overview">◈ Página inicial</div>
      <div className="nav-item" data-page="estagiarios" data-tutora="only">◎ Acompanhamento</div>
      <div className="nav-item" data-page="cadastro" data-tutora="only" data-gga="show">◫ Cadastro</div>
    </div>
    <div className="nav-section">
      <div className="nav-lbl">Programa</div>
      <div className="nav-item" data-page="trilhas" data-tutora="only">◑ Trilhas</div>
      <div className="nav-item" data-page="agendamentos">◉ Agendamentos</div>
    </div>
    <div className="nav-section" data-tutora="only">
      <div className="nav-lbl">Sistema</div>
      <div className="nav-item" data-page="configuracoes" data-tutora="only">⚙ Configurações</div>
    </div>
    <div className="sb-progress" data-tutora="only">
      <div className="sb-progress-row"><span>PROGRESSO</span><span id="pctLbl">0%</span></div>
      <div className="sb-track"><div className="sb-fill" id="pctFill" style={{"width":"0%"}}></div></div>
    </div>
    <div className="sb-mode">
      <button className="btn-mode" id="modeBtn">Fazer login</button>
      <button className="btn-mode" id="btnMeuPerfil" style={{"marginTop":"8px","display":"none","background":"var(--bg)","color":"var(--ink)","border":"1px solid var(--border2)"}}>👤 Meu perfil</button>
    </div>
    <div className="sb-footer">Tutora regional<br /><strong>Kamilla</strong><br /><span style={{"fontSize":"11px"}}>6 meses · 3 ciclos</span></div>
  </aside>

  {/*  DRAWER MOBILE  */}
  <div className="drawer-overlay" id="drawerOverlay"></div>
  <div className="drawer" id="drawer">
    <div className="drawer-header">
      <img src="pwa-icons/icon-512x512.png" className="drawer-logo" alt="Nextuber" style={{"width":"140px","display":"block","borderRadius":"8px"}} />
      <div className="drawer-sub">A próxima geração de Itubers</div>
    </div>
    <div className="drawer-nav">
      <div className="drawer-section-lbl">Painel</div>
      <div className="drawer-item active" data-page="overview">◈ Página inicial</div>
      <div className="drawer-item" data-page="estagiarios" data-tutora="only">◎ Acompanhamento</div>
      <div className="drawer-item" data-page="cadastro" data-tutora="only" data-gga="show">◫ Cadastro</div>

      <div className="drawer-section-lbl">Programa</div>
      <div className="drawer-item" data-page="trilhas" data-tutora="only">◑ Trilhas</div>
      <div className="drawer-item" data-page="agendamentos">◉ Agendamentos</div>

      <div className="drawer-section-lbl" data-tutora="only">Sistema</div>
      <div className="drawer-item" data-page="configuracoes" data-tutora="only">⚙ Configurações</div>
    </div>
    <div className="drawer-footer">
      <button className="drawer-mode-btn" id="drawerModeBtn">Fazer login</button>
      <button className="drawer-mode-btn" id="drawerMeuPerfil" style={{"marginTop":"8px","display":"none","background":"var(--bg)","color":"var(--ink)"}}>👤 Meu perfil</button>
    </div>
  </div>

  {/*  MAIN CONTENT  */}
  <main className="main">

    {/*  OVERVIEW  */}
    <section id="page-overview" className="page active">
      
      {/*  Banner Principal com Gradiente e Textos Editáveis  */}
      <div style={{"background":"linear-gradient(135deg, var(--or), var(--or-d))","borderRadius":"16px","padding":"28px 32px","color":"#fff","marginBottom":"24px","boxShadow":"0 8px 24px rgba(236,112,0,0.25)","position":"relative"}}>
        <div style={{"position":"absolute","top":"24px","right":"28px","display":"flex","gap":"10px"}}>
          <button id="btnEditarBanner" style={{"background":"rgba(255,255,255,0.2)","color":"#fff","border":"1px solid rgba(255,255,255,0.35)","padding":"7px 16px","borderRadius":"8px","fontSize":"12px","fontWeight":"600","cursor":"pointer","display":"none","alignItems":"center","gap":"6px"}}>
            ✏️ Editar
          </button>
          <button id="btnVerMaisProjeto" style={{"background":"rgba(255,255,255,0.25)","color":"#fff","border":"1px solid rgba(255,255,255,0.4)","padding":"7px 16px","borderRadius":"8px","fontSize":"12px","fontWeight":"600","cursor":"pointer"}}>
            Ver mais →
          </button>
        </div>

        <div id="bannerOver" style={{"fontSize":"10.5px","textTransform":"uppercase","letterSpacing":".12em","fontWeight":"700","opacity":".9","marginBottom":"6px"}}>PLATAFORMA FORMA+</div>
        <h1 id="bannerTitulo" style={{"fontFamily":"'DM Serif Display', serif","fontSize":"28px","marginBottom":"10px","lineHeight":"1.15"}}>Formação que evolui!</h1>
        <p id="bannerDesc" style={{"fontSize":"13.5px","opacity":".92","maxWidth":"640px","lineHeight":"1.55"}}>Programa estruturado de 6 meses para formar estagiários comerciais com excelência técnica, comportamental e comprometimento com o cliente. Acompanhamento contínuo, trilhas adaptadas e desenvolvimento orientado.</p>
      </div>

      {/*  Linha Hoje + Trimestre Vigente  */}
      <div className="g2" style={{"marginBottom":"24px"}}>
        <div className="card" style={{"padding":"18px 22px"}}>
          <div className="card-ttl">HOJE</div>
          <div id="ovHoje" style={{"fontSize":"18px","fontWeight":"700","color":"var(--ink)"}}>—</div>
        </div>

        <div className="card" style={{"padding":"18px 22px"}}>
          <div className="card-ttl">TRIMESTRE VIGENTE</div>
          <div id="ovTri" style={{"fontSize":"18px","fontWeight":"700","color":"var(--or)"}}>—</div>
        </div>
      </div>

      {/*  Visão Consolidada - KPIs Dinâmicos  */}
      <div style={{"fontSize":"11px","textTransform":"uppercase","letterSpacing":".08em","color":"var(--ink3)","fontWeight":"600","marginBottom":"12px"}}>VISÃO CONSOLIDADA</div>
      <div id="overviewKpis" style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(180px, 1fr))","gap":"12px","marginBottom":"24px"}}>
        {/*  Preenchido via JS renderOverviewKpis()  */}
      </div>

      {/*  Distribuição por Trilha  */}
      <div className="card" style={{"marginBottom":"24px"}}>
        <div className="card-ttl">DISTRIBUIÇÃO POR TRILHA</div>
        <div id="overviewTrilhaChart" style={{"display":"flex","flexDirection":"column","gap":"14px","marginTop":"12px"}}>
          {/*  Preenchido via JS renderOverviewTrilhaChart()  */}
        </div>
      </div>

      {/*  Próximos Encontros  */}
      <div className="card" id="cardEncontros">
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"14px"}}>
          <div className="card-ttl" style={{"marginBottom":"0"}}>PRÓXIMOS ENCONTROS</div>
          <button id="btnAddEncontro" style={{"padding":"6px 14px","borderRadius":"20px","border":"1.5px solid var(--border2)","background":"var(--surface)","color":"var(--or)","fontSize":"12px","fontWeight":"600","cursor":"pointer","display":"none"}}>
            + Adicionar
          </button>
        </div>
        <div id="encontrosList">
          <div style={{"fontSize":"13.5px","color":"var(--ink3)","fontStyle":"italic","padding":"12px 0"}}>Nenhum encontro agendado.</div>
        </div>

        {/*  Formulário In-line para Adicionar Encontro (Oculto por padrão)  */}
        <div id="encontroFormWrap" style={{"display":"none","marginTop":"16px","paddingTop":"16px","borderTop":"1px solid var(--border)"}}>
          <div style={{"fontWeight":"600","fontSize":"14px","marginBottom":"10px"}}>Novo Encontro / Ritual</div>
          <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"10px","marginBottom":"10px"}}>
            <input className="field-in" type="text" id="encTitulo" placeholder="Título (ex: Alinhamento Semanal)" />
            <input className="field-in" type="datetime-local" id="encData" />
          </div>
          <input className="field-in" type="text" id="encDescricao" placeholder="Descrição / Link da reunião" style={{"marginBottom":"12px"}} />
          <div style={{"display":"flex","gap":"8px"}}>
            <button id="btnSalvarEncontro" className="btn-cad-add" style={{"padding":"6px 16px","fontSize":"13px"}}>Salvar Encontro</button>
            <button id="btnCancelarEncontro" style={{"padding":"6px 14px","background":"transparent","border":"1px solid var(--border2)","borderRadius":"var(--r2)","fontSize":"13px","cursor":"pointer"}}>Cancelar</button>
          </div>
        </div>
      </div>

      {/*  Ranking de Acompanhamento (Disponível apenas para Tutora / GGA)  */}
      <div id="rankingSection" className="card" style={{"marginTop":"24px","display":"none"}}>
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"14px"}}>
          <div className="card-ttl" style={{"marginBottom":"0"}}>RANKING DE EVOLUÇÃO</div>
          <select id="rankingFiltroTrilha" style={{"fontSize":"12px","border":"1px solid var(--border2)","borderRadius":"6px","padding":"4px 8px","background":"var(--surface)","cursor":"pointer"}}>
            <option value="todas">Todas as Trilhas</option>
            <option value="Técnico">Técnico</option>
            <option value="Dados">Dados</option>
            <option value="Produto">Produto</option>
            <option value="Liderança">Liderança</option>
          </select>
        </div>
        <div id="rankingList"></div>
      </div>
    </section>

    {/*  ACOMPANHAMENTO  */}
    <section id="page-estagiarios" className="page">
      {/*  Lock screen (shown when not tutora)  */}
      <div className="lock-screen" id="estagLock">
        <div className="lock-icon">🔒</div>
        <div className="lock-title">Acesso restrito</div>
        <div className="lock-sub">Esta área é exclusiva para a tutora.<br />Faça login para visualizar o acompanhamento dos estagiários.</div>
        <button className="btn-lock-login" id="btnLockLogin">Fazer login</button>
      </div>

      {/*  Content (shown when tutora)  */}
      <div id="estagContent" style={{"display":"none"}}>
        <div className="ph" style={{"display":"flex","alignItems":"flex-start","justifyContent":"space-between","flexWrap":"wrap","gap":"10px"}}>
          <div><h1>Acompanhamento <em>individual</em></h1><p>Toque no card para ver o perfil e adicionar observações.</p></div>
          <button id="btnExportExcel" style={{"display":"flex","alignItems":"center","gap":"6px","padding":"8px 16px","border":"1px solid var(--border2)","borderRadius":"8px","background":"var(--surface)","color":"var(--ink)","fontSize":"13px","fontWeight":"500","cursor":"pointer","marginTop":"6px","whiteSpace":"nowrap"}} title="Exportar resultados para Excel">
            <span style={{"fontSize":"16px"}}>📊</span> Exportar Excel
          </button>
        </div>
        
        {/*  Barra de filtros  */}
        <div id="filtrosBar" style={{"background":"var(--surface)","border":"1px solid var(--border)","borderRadius":"10px","padding":"12px 14px","marginBottom":"14px","display":"flex","alignItems":"center","flexWrap":"wrap","gap":"10px"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"6px","color":"var(--ink3)","fontSize":"12px","fontWeight":"600","textTransform":"uppercase","letterSpacing":".04em"}}>
            <span style={{"fontSize":"14px"}}>🔍</span> Filtros
          </div>
          
          <div style={{"display":"flex","alignItems":"center","gap":"6px"}}>
            <label style={{"fontSize":"12px","color":"var(--ink2)"}}>Agência:</label>
            <select id="filtroAgencia" style={{"fontSize":"12.5px","border":"1px solid var(--border2)","borderRadius":"6px","padding":"5px 10px","background":"var(--surface)","color":"var(--ink)","cursor":"pointer"}}>
              <option value="todas">Todas</option>
            </select>
          </div>
          
          <div style={{"display":"flex","alignItems":"center","gap":"6px"}}>
            <label style={{"fontSize":"12px","color":"var(--ink2)"}}>Certificação:</label>
            <select id="filtroCertificacao" style={{"fontSize":"12.5px","border":"1px solid var(--border2)","borderRadius":"6px","padding":"5px 10px","background":"var(--surface)","color":"var(--ink)","cursor":"pointer"}}>
              <option value="todas">Todas</option>
              <option value="sem">Sem certificação</option>
              <option value="CPA">CPA</option>
              <option value="C-PRO R">C-PRO R</option>
              <option value="C-PRO I">C-PRO I</option>
            </select>
          </div>
          
          <div style={{"display":"flex","alignItems":"center","gap":"6px"}}>
            <label style={{"fontSize":"12px","color":"var(--ink2)"}}>Ordenar por:</label>
            <select id="filtroOrdem" style={{"fontSize":"12.5px","border":"1px solid var(--border2)","borderRadius":"6px","padding":"5px 10px","background":"var(--surface)","color":"var(--ink)","cursor":"pointer"}}>
              <option value="nome">Nome (A-Z)</option>
              <option value="maior_nota">Maior nota</option>
              <option value="menor_nota">Menor nota</option>
            </select>
          </div>
          
          <button id="btnLimparFiltros" style={{"fontSize":"12px","padding":"5px 12px","border":"1px solid var(--border2)","borderRadius":"6px","background":"var(--bg)","color":"var(--ink2)","cursor":"pointer","fontWeight":"500"}}>Limpar</button>
          
          <div id="filtroContador" style={{"marginLeft":"auto","fontSize":"12px","color":"var(--ink3)","fontWeight":"500"}}></div>
        </div>
        
        <div id="notionGrid"></div>
      </div>
    </section>

    {/*  CADASTRO  */}
    <section id="page-cadastro" className="page">
      <div className="ph"><h1>Cadastro de <em>estagiários</em></h1><p>Preencha os dados e clique em adicionar. O estagiário aparece automaticamente na lista de acompanhamento.</p></div>

      <div className="cad-single-card">
        <div className="cad-single-header">
          <div className="cad-single-av" id="cadAv">?</div>
          <div>
            <div className="cad-single-title" id="cadPreviewName">Novo estagiário</div>
            <div className="cad-single-sub" id="cadPreviewSub">Preencha o nome para começar</div>
          </div>
        </div>
        <div className="cad-single-fields">
          <div className="field-grp" style={{"gridColumn":"1/-1"}}>
            <div className="field-lbl">Nome completo</div>
            <input className="field-in" type="text" id="cadNome" placeholder="Ex: João Silva" maxLength="60" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Funcional (9 dígitos)</div>
            <input className="field-in" type="text" id="cadFunc" placeholder="000000000" maxLength="9" inputMode="numeric" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Agência</div>
            <input className="field-in" type="text" id="cadAgencia" placeholder="0000" maxLength="6" inputMode="numeric" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Data de início</div>
            <input className="field-in" type="date" id="cadInicio" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Funcional GA</div>
            <input className="field-in" type="text" id="cadGAFunc" placeholder="000000000" maxLength="9" inputMode="numeric" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Funcional GGA</div>
            <input className="field-in" type="text" id="cadGGAFunc" placeholder="000000000" maxLength="9" inputMode="numeric" />
          </div>
          <div className="field-grp">
            <div className="field-lbl">Certificação</div>
            <select className="field-in" id="cadCertificacao" style={{"cursor":"pointer"}}>
              <option value="">Nenhuma</option>
              <option value="CPA">CPA</option>
              <option value="C-PRO R">C-PRO R</option>
              <option value="C-PRO I">C-PRO I</option>
            </select>
          </div>
          <div className="field-grp" style={{"gridColumn":"1/-1"}}>
            <div className="field-lbl">Mês de aniversário</div>
            <div style={{"display":"flex","gap":"8px"}}>
              <select className="field-in" id="cadAnivDia" style={{"cursor":"pointer","flex":"1"}}>
                <option value="">Dia</option>
              </select>
              <select className="field-in" id="cadAnivMes" style={{"cursor":"pointer","flex":"1"}}>
                <option value="">Mês</option>
                <option value="1">Janeiro</option><option value="2">Fevereiro</option><option value="3">Março</option>
                <option value="4">Abril</option><option value="5">Maio</option><option value="6">Junho</option>
                <option value="7">Julho</option><option value="8">Agosto</option><option value="9">Setembro</option>
                <option value="10">Outubro</option><option value="11">Novembro</option><option value="12">Dezembro</option>
              </select>
            </div>
          </div>
        </div>
        <div className="cad-single-footer">
          <button className="btn-cad-add" id="cadAddBtn">+ Adicionar estagiário</button>
          <span className="saved-lbl" id="cadSavedLbl">✓ Adicionado</span>
        </div>
      </div>

      <div id="cadListWrap" style={{"marginTop":"28px"}}>
        <div className="cad-list-title">Estagiários cadastrados <span className="cad-list-count" id="cadListCount">0</span></div>
        <div id="cadList"></div>
      </div>

      <div id="gestoresSection" style={{"display":"none","marginTop":"32px"}}>
        <div className="cad-list-title" style={{"marginBottom":"12px"}}>Gestores <span className="cad-list-count" id="gestoresCount">0</span></div>
        <div className="cad-single-card" style={{"marginBottom":"16px"}}>
          <div className="cad-single-header">
            <div className="cad-form-av" style={{"background":"var(--ink)","color":"#fff","fontSize":"16px"}}>G</div>
            <div>
              <div className="cad-single-title">Novo gestor</div>
              <div className="cad-single-sub">A senha inicial será os 4 primeiros dígitos do funcional</div>
            </div>
          </div>
          <div className="cad-single-fields">
            <div className="field-grp" style={{"gridColumn":"1/-1"}}>
              <div className="field-lbl">Nome do gestor</div>
              <input className="field-in" type="text" id="gestorNome" placeholder="Nome completo" maxLength="60" />
            </div>
            <div className="field-grp" style={{"gridColumn":"1/-1"}}>
              <div className="field-lbl">Funcional (9 dígitos)</div>
              <input className="field-in" type="text" id="gestorFunc" placeholder="000000000" maxLength="9" inputMode="numeric" />
            </div>
          </div>
          <div className="cad-single-footer">
            <button className="btn-cad-add" id="btnAddGestor">+ Adicionar gestor</button>
            <span className="saved-lbl" id="gestorSaved">✓ Adicionado</span>
          </div>
        </div>
        <div id="gestoresList"></div>
      </div>
    </section>

    {/*  TRILHAS  */}
    <section id="page-trilhas" className="page">
      <div className="ph"><h1>Trilhas de <em>desenvolvimento</em></h1><p>Rotinas sugeridas, estudos e atividades por momento da jornada.</p></div>
      <div className="trilha-tabs" id="trilhaTabs"></div>
      <div className="t-header" id="tHeader"></div>
      <div id="trilhaTopicos"></div>
    </section>

    {/*  CONFIGURAÇÕES  */}
    <section id="page-configuracoes" className="page">
      <div className="ph"><h1>Configurações do <em>sistema</em></h1><p>Gerencie o programa, metas do trimestre e os textos do projeto.</p></div>
      
      {/*  Textos do Projeto (Banner)  */}
      <div className="card" style={{"marginBottom":"24px"}}>
        <div className="card-ttl">TEXTOS DO BANNER PRINCIPAL</div>
        <div style={{"fontSize":"12.5px","color":"var(--ink3)","marginBottom":"14px"}}>Personalize os textos exibidos no banner da Página Inicial.</div>
        
        <div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Overline (Tag superior)</label>
            <input className="field-in" type="text" id="cfgBannerOver" placeholder="PLATAFORMA FORMA+" />
          </div>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Título Principal</label>
            <input className="field-in" type="text" id="cfgBannerTitulo" placeholder="Formação que evolui!" />
          </div>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Descrição detalhada</label>
            <textarea className="obs" id="cfgBannerDesc" placeholder="Descrição do programa..." style={{"minHeight":"80px"}}></textarea>
          </div>
          <div>
            <button className="btn-cad-add" id="btnSalvarTextosBanner" style={{"padding":"8px 18px","fontSize":"13px"}}>Salvar Alterações</button>
            <span className="saved-lbl" id="savedTextosBanner">✓ Salvo com sucesso</span>
          </div>
        </div>
      </div>

      {/*  Metas do Trimestre Vigente  */}
      <div className="card" style={{"marginBottom":"24px"}}>
        <div className="card-ttl">METAS DO TRIMESTRE VIGENTE</div>
        <div style={{"fontSize":"12.5px","color":"var(--ink3)","marginBottom":"14px"}}>Defina as metas de produção para o trimestre atual (<span id="cfgTriLabel">—</span>).</div>
        
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(140px, 1fr))","gap":"12px","marginBottom":"14px"}}>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Produção (R$)</label>
            <input className="field-in" type="text" id="cfgMetaProd" placeholder="0" inputMode="numeric" />
          </div>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Seguros (Qtd)</label>
            <input className="field-in" type="text" id="cfgMetaSeguros" placeholder="0" inputMode="numeric" />
          </div>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>PIC (Qtd)</label>
            <input className="field-in" type="text" id="cfgMetaPic" placeholder="0" inputMode="numeric" />
          </div>
          <div>
            <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase","display":"block","marginBottom":"4px"}}>Combinaqui (Qtd)</label>
            <input className="field-in" type="text" id="cfgMetaCombinaqui" placeholder="0" inputMode="numeric" />
          </div>
        </div>
        
        <div>
          <button className="btn-cad-add" id="btnSalvarMetasTri" style={{"padding":"8px 18px","fontSize":"13px"}}>Salvar Metas do Trimestre</button>
          <span className="saved-lbl" id="savedMetasTri">✓ Salvo com sucesso</span>
        </div>
      </div>
    </section>

    {/*  AGENDAMENTOS  */}
    <section id="page-agendamentos" className="page">
      <div className="ph"><h1>Agenda de <em>rituais</em></h1><p>Acompanhe os próximos encontros, alinhamentos e rituais do programa.</p></div>
      <div className="card">
        <div className="card-ttl">PRÓXIMOS ENCONTROS E RITUAIS</div>
        <div id="agendamentosFullList">
          <div style={{"fontSize":"13.5px","color":"var(--ink3)","fontStyle":"italic","padding":"12px 0"}}>Carregando compromissos...</div>
        </div>
      </div>
    </section>
  </main>

  {/*  OVERLAY DO PAINEL DE ACOMPANHAMENTO  */}
  <div className="overlay" id="overlay"></div>

  {/*  PAINEL DO ESTAGIÁRIO  */}
  <div className="panel" id="panel">
    <div className="panel-hd">
      <div className="panel-av" id="pAv">?</div>
      <div><div className="panel-nm" id="pNm">—</div><div className="panel-fn" id="pFn">—</div></div>
      <button className="panel-close" id="panelClose">✕</button>
    </div>
    
    <div className="panel-body">
      {/*  Informações Principais (Agência, Trilha, Início, Aniversário)  */}
      <div className="psec psec-full" style={{"background":"var(--bg)","padding":"14px 18px","borderRadius":"10px","border":"1px solid var(--border)"}}>
        <div className="psec-ttl">DADOS DE CADASTRO</div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(130px, 1fr))","gap":"10px","fontSize":"13px"}}>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>AGÊNCIA</span><strong id="pAgenciaVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>TRILHA</span><strong id="pTrilhaVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>INÍCIO</span><strong id="pInicioVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>ANIVERSÁRIO</span><strong id="pAniversarioVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>GA</span><strong id="pGAVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>GGA</span><strong id="pGGAVal">—</strong></div>
          <div><span style={{"color":"var(--ink3)","fontSize":"11px","display":"block"}}>CERTIFICAÇÃO</span><strong id="pCertificacaoVal">—</strong></div>
        </div>
      </div>

      {/*  Ciclos do Programa  */}
      <div className="psec">
        <div className="psec-ttl">CICLOS DO PROGRAMA</div>
        <div className="pmeses" id="pMeses"></div>
      </div>

      {/*  Ações Rápidas (Excluir, Atenção, Trocar Trilha)  */}
      <div className="psec">
        <div className="psec-ttl">AÇÕES DE GESTÃO</div>
        <div style={{"display":"flex","flexWrap":"wrap","gap":"8px"}}>
          <button id="pBtnAtencao" style={{"padding":"6px 12px","borderRadius":"6px","border":"1px solid #FDE047","background":"#FEF9C3","color":"#713F12","fontSize":"12px","fontWeight":"600","cursor":"pointer"}}>⚠️ Requer Atenção</button>
          <button id="pBtnDelete" style={{"padding":"6px 12px","borderRadius":"6px","border":"1px solid #FECACA","background":"#FEE2E2","color":"#DC2626","fontSize":"12px","fontWeight":"600","cursor":"pointer"}}>🗑️ Excluir Estagiário</button>
        </div>
      </div>

      {/*  Observações do Gestor  */}
      <div className="psec psec-full">
        <div className="psec-ttl">OBSERVAÇÕES DA TUTORA</div>
        <textarea className="obs" id="pObs" placeholder="Adicione anotações sobre o desenvolvimento do estagiário..."></textarea>
        <div style={{"display":"flex","alignItems":"center","marginTop":"8px"}}>
          <button className="btn-obs" id="pSaveObs">Salvar Observação</button>
          <span className="obs-saved" id="pObsSaved">✓ Salvo com sucesso</span>
        </div>
      </div>
    </div>
  </div>

  {/*  MODAIS DO SISTEMA  */}

  {/*  Modal de Login  */}
  <div className="login-ov" id="loginOv">
    <div className="login-box">
      <div className="login-logo">
        <img src="pwa-icons/icon-512x512.png" alt="Nextuber" style={{"width":"48px","borderRadius":"8px"}} />
        <div className="login-brand">Nextuber<span>Acesso Restrito</span></div>
      </div>
      <input className="lin" type="password" id="loginPass" placeholder="Digite a senha" />
      <div className="lerr" id="loginErr">Senha incorreta. Tente novamente.</div>
      <button className="btn-login" id="btnLoginSubmit">Entrar</button>
      <button className="btn-cancel" id="btnLoginCancel">Cancelar</button>
    </div>
  </div>

  {/*  Modal Editar Banner  */}
  <div className="modal-ov" id="editBannerOv">
    <div className="modal-box" style={{"maxWidth":"420px"}}>
      <h3>Editar Banner Principal</h3>
      <div style={{"display":"flex","flexDirection":"column","gap":"10px","marginTop":"12px"}}>
        <div>
          <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase"}}>Overline</label>
          <input className="lin" type="text" id="mBannerOver" style={{"marginBottom":"0"}} />
        </div>
        <div>
          <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase"}}>Título</label>
          <input className="lin" type="text" id="mBannerTitulo" style={{"marginBottom":"0"}} />
        </div>
        <div>
          <label style={{"fontSize":"11px","fontWeight":"600","color":"var(--ink3)","textTransform":"uppercase"}}>Descrição</label>
          <textarea className="obs" id="mBannerDesc" style={{"minHeight":"80px"}}></textarea>
        </div>
      </div>
      <div className="modal-btns">
        <button className="btn-sm" id="mBannerCancel">Cancelar</button>
        <button className="btn-sm pr" id="mBannerSave">Salvar</button>
      </div>
    </div>
  </div>

  {/*  Modal Ver Mais Projeto  */}
  <div className="modal-ov" id="projetoOv">
    <div className="modal-box" style={{"maxWidth":"560px"}}>
      <h3>Sobre a Plataforma Nextuber</h3>
      <div style={{"fontSize":"13.5px","color":"var(--ink2)","lineHeight":"1.65","marginTop":"12px","display":"flex","flexDirection":"column","gap":"10px"}}>
        <p>A plataforma <strong>Nextuber (Forma+)</strong> é um ecossistema de aceleração de talentos desenhado especificamente para acompanhar a evolução técnica, comercial e comportamental dos estagiários comerciais do Itaú Unibanco.</p>
        <p>Com acompanhamento estruturado em ciclos trimestrais, a tutoria regional monitora a produção individual, rituais de desenvolvimento, certificações e nível de prontidão dos participantes.</p>
      </div>
      <div className="modal-btns" style={{"marginTop":"20px"}}>
        <button className="btn-sm pr" id="projetoClose">Fechar</button>
      </div>
    </div>
  </div>

  {/*  Toast de Notificação  */}
  <div className="toast" id="toast"><span className="tdot"></span><span id="toastMsg">Mensagem</span></div>

  {/*  Loading Full Screen  */}
  <div id="loadingScreen" style={{"position":"fixed","inset":"0","background":"var(--surface)","zIndex":"999","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center","gap":"16px"}}>
    <div style={{"width":"40px","height":"40px","border":"3px solid var(--border)","borderTopColor":"var(--or)","borderRadius":"50%","animation":"spin 0.8s linear infinite"}}></div>
    <div style={{"fontSize":"14px","color":"var(--ink2)","fontWeight":"500"}}>Carregando dados...</div>
  </div>
  <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
};

export default App;