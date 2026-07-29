import * as XLSX from 'xlsx';

export const exportEstagiariosToExcel = (estagiarios) => {
  const data = estagiarios.map(e => ({
    ID: e.id,
    Nome: e.name,
    Função: e.func,
    Trilha: e.track,
    'Progresso (%)': e.cicloProgress + '%',
    'Requer Atenção': e.requerAtencao ? 'SIM' : 'NÃO',
    Status: e.status
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Estagiários');
  XLSX.writeFile(workbook, `Nextuber_Relatorio_Estagiarios_${new Date().toISOString().slice(0,10)}.xlsx`);
};