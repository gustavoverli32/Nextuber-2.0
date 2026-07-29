import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'public-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const initialEstagiarios = [
  { id: 1, name: 'Ana Silva', func: 'Front-end Dev', track: 'Técnico', cicloProgress: 85, requerAtencao: false, avatar: 'A', status: 'Ativo', startMonth: 'Jan' },
  { id: 2, name: 'Bruno Costa', func: 'Data Analytics', track: 'Dados', cicloProgress: 60, requerAtencao: true, avatar: 'B', status: 'Ativo', startMonth: 'Fev' },
  { id: 3, name: 'Carla Dias', func: 'UX/UI Design', track: 'Produto', cicloProgress: 95, requerAtencao: false, avatar: 'C', status: 'Ativo', startMonth: 'Jan' },
  { id: 4, name: 'Diego Rocha', func: 'Back-end Dev', track: 'Técnico', cicloProgress: 40, requerAtencao: true, avatar: 'D', status: 'Ativo', startMonth: 'Mar' },
  { id: 5, name: 'Elena Martins', func: 'Product Management', track: 'Liderança', cicloProgress: 75, requerAtencao: false, avatar: 'E', status: 'Ativo', startMonth: 'Fev' }
];

export const initialTrilhas = [
  {
    id: 'tecnico',
    name: 'Técnico',
    color: '#EC7000',
    title: 'Trilha de Desenvolvimento Técnico',
    desc: 'Capacitação prática em arquitetura de software, boas práticas e novas linguagens.',
    slogan: '"Código limpo e escalabilidade em primeiro lugar."',
    topicos: [
      {
        num: 1,
        tema: 'Boas Práticas de Código e Git Flow',
        obj: 'Dominar versionamento de código e revisão de PRs.',
        acoes: ['Criar repositório modular', 'Fazer code review semanal com a tutora'],
        tutora: 'Tutora Mariana: "Atenção ao padronizar commits!"',
        checks: ['Configurar Git local', 'Primeiro PR aprovado']
      },
      {
        num: 2,
        tema: 'Arquitetura Reativa com React & Vite',
        obj: 'Construir interfaces de alta performance e componentizadas.',
        acoes: ['Migrar monólitos para componentes', 'Gerenciar estado reativo'],
        tutora: 'Tutora Mariana: "Mantenha componentes pequenos e focados."',
        checks: ['Criar estado global com Context', 'Refatorar modais antigos']
      }
    ]
  },
  {
    id: 'lideranca',
    name: 'Liderança',
    color: '#7B61FF',
    title: 'Trilha de Liderança e Soft Skills',
    desc: 'Desenvolvimento de inteligência emocional, comunicação assertiva e gestão de projetos.',
    slogan: '"Liderar é inspirar pessoas e gerar impacto."',
    topicos: [
      {
        num: 1,
        tema: 'Comunicação Eficiente e Feedback',
        obj: 'Aprender técnicas de feedback 1-on-1 e apresentações.',
        acoes: ['Realizar 1-on-1 quinzenal', 'Apresentar demo do projeto no alinhamento'],
        tutora: 'Tutor Carlos: "Ouça ativamente antes de responder."',
        checks: ['Agendar primeira 1-on-1', 'Enviar relatório mensal']
      }
    ]
  }
];