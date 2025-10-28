// data/veiculos.ts

// 1. Definição da interface (tipagem) para um veículo
export interface FichaTecnica {
  motor: string;
  potencia: string;
  torque: string;
  capacidadeCarga: string;
  pbt: string;
  // Adicione mais especificações conforme necessário
}

export interface Veiculo {
  id: string;
  nome: string;
  modelo: string;
  imagem: string; // URL da imagem ou require para um arquivo local
  fichaTecnica: FichaTecnica;
  resumoVantagem: string; // O ponto forte que será usado na comparação
}

// 2. Mock Data (dados de exemplo)
export const VeiculosData: Veiculo[] = [
  {
    id: 'daily_35s14',
    nome: 'Daily 35S14',
    modelo: 'Chassi-cabine',
    imagem: 'https://via.placeholder.com/300x200?text=Daily+35S14', 
    fichaTecnica: {
      motor: 'F1C Turbo Diesel',
      potencia: '146 cv',
      torque: '350 Nm',
      capacidadeCarga: '1.500 kg',
      pbt: '3.500 kg (VUC)',
    },
    resumoVantagem: 'Melhor para **entregas urbanas e agilidade**. Seu tamanho compacto e categoria VUC garantem fácil acesso a áreas restritas e maior economia de combustível.',
  },
  {
    id: 'tector_170e28',
    nome: 'Tector 170E28',
    modelo: 'Semipesado',
    imagem: 'https://via.placeholder.com/300x200?text=Tector+170E28', 
    fichaTecnica: {
      motor: 'NEF 6 (6.7 litros)',
      potencia: '280 cv',
      torque: '950 Nm',
      capacidadeCarga: '10.500 kg',
      pbt: '17.000 kg',
    },
    resumoVantagem: 'Melhor para **transporte rodoviário de médias e longas distâncias**. Oferece quase o dobro de potência e torque, sendo superior para cargas maiores e subidas íngremes.',
  },
  {
    id: 'hiway_480',
    nome: 'Hi-Way 480',
    modelo: 'Pesado Rodoviário',
    imagem: 'https://via.placeholder.com/300x200?text=Hi-Way+480', 
    fichaTecnica: {
      motor: 'Cursor 13 (12.9 litros)',
      potencia: '480 cv',
      torque: '2250 Nm',
      capacidadeCarga: '25.000 kg',
      pbt: '48.000 kg (CMT)',
    },
    resumoVantagem: 'A melhor escolha para **altíssima performance e transporte de cargas volumosas/pesadas**. O motor mais potente da Iveco para enfrentar qualquer estrada.',
  },
];