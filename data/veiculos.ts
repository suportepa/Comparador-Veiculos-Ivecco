
// data/veiculos.ts - ARQUIVO GERADO AUTOMATICAMENTE

export interface FichaTecnica {
  motor: string;
  potencia: string;
  torque: string;
  transmissao: string;
  pesoEmOrdemDeMarcha: string;
  pbtTecnico: string;
  cmt: string; 
}

export interface Veiculo {
  id: string;
  nome: string;
  modelo: string;
  imagem: string;
  resumoVantagem: string;
  fichaTecnica: FichaTecnica;
}

export const VeiculosData: Veiculo[] = [];
