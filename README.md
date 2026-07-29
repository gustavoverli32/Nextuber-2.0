# Nextuber 2.0 · A Próxima Geração de Itubers 🚀

Plataforma de acompanhamento, aceleração e desenvolvimento contínuo de estagiários (Itubers), refatorada para uma **arquitetura moderna, modular e reativa em React 19 + Vite**.

## 🌟 O que há de novo na versão 2.0?

- **Arquitetura Componentizada**: Fim dos monólitos em arquivo único. O projeto agora é dividido em páginas, componentes reusáveis, serviços isolados e estados reativos.
- **Vite + React 19**: Inicialização e compilação ultra-rápidas com *Hot Module Replacement* (HMR).
- **Gestão Global de Estado**: Context API para gerenciar perfis, modo gestor/estagiário, filtros e notificações (Toasts).
- **Integração com Supabase**: Camada de serviço desacoplada em `src/services/supabase.js`.
- **Exportação de Relatórios (.xlsx)**: Geração nativa de planilhas Excel via biblioteca SheetJS (`xlsx`).
- **Editor de Texto Rico**: Editor customizado com suporte a marcação Markdown, formatação e emojis para gestores de trilha.
- **Design System Fixo**: Preservação exata da paleta de cores (Laranja Itaú #EC7000, creme, ardósia), tipografias `DM Serif Display` + `DM Sans` e animações fluidas.

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   ├── common/       # Toast, RichEditor, MetricCard, EstagiarioPanel
│   ├── layout/       # Sidebar, MobileTopbar, Drawer
│   └── modals/       # LoginModal, EditBannerModal, VerMaisModal
├── context/          # AppContext.jsx (Estado Global)
├── pages/            # VisaoGeralPage, EstagiariosPage, CadastroPage, TrilhasPage
├── services/         # supabase.js, exportExcel.js
├── styles/           # index.css (Design tokens e CSS)
├── App.jsx
└── main.jsx
```

---

## 🛠️ Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:3000` no seu navegador!

---

## 🚀 Build de Produção

Para gerar a build otimizada de produção:
```bash
npm run build
```

---
*Desenvolvido com foco em excelência de código e experiência do usuário.*