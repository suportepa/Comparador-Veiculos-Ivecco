// data/veiculos.ts

export interface FichaTecnica {
  motor: string;
  potencia: string;
  torque: string;
  transmissao: string;
  pesoEmOrdemDeMarcha: string;
  pbtTecnico: string;
  cmt: string; // Capacidade Máxima de Tração
}

export interface Veiculo {
  id: string;
  nome: string;
  modelo: string;
  imagem: string;
  resumoVantagem: string;
  fichaTecnica: FichaTecnica;
}

// Função utilitária para gerar IDs de forma consistente
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '_');
};

export const VeiculosData: Veiculo[] = [
  // --- INÍCIO DOS DADOS DAF FORMATADOS ---

  {
    id: slugify("CF FAC 8x2 PX-7"),
    nome: "CF FAC 8x2 PX-7",
    modelo: "Caminhão Rígido",
    imagem: "https://via.placeholder.com/300x200?text=DAF+CF+FAC+8x2", // Placeholder
    // ATENÇÃO: É VITAL QUE VOCÊ ADICIONE UM RESUMO AQUI para cada veículo.
    resumoVantagem: "**Vantagem (A SER PREENCHIDA)**: Excelente capacidade de carga e manobrabilidade para serviços de distribuição e vocacionais.",
    fichaTecnica: {
      motor: "PACCAR PX-7 (6 cil / 6,7L)",
      potencia: "308 cv @ 2.200 rpm",
      torque: "1.200 Nm @ 1.200 - 1.500 rpm",
      transmissao: "ZF TRAXON (Manual / Automatizada) - 9 marchas",
      pesoEmOrdemDeMarcha: "8.270 kg", // Total
      pbtTecnico: "33.000 kg",
      cmt: "35.000 kg",
    },
  },
  {
    id: slugify("CF FAD 8X4 MX-13"),
    nome: "CF FAD 8X4 MX-13",
    modelo: "Caminhão Rígido Pesado",
    imagem: "https://via.placeholder.com/300x200?text=DAF+CF+FAD+8X4", // Placeholder
    resumoVantagem: "**Vantagem (A SER PREENCHIDA)**: Alta potência e tração 8x4, ideal para aplicações fora-de-estrada e severas como mineração.",
    fichaTecnica: {
      motor: "PACCAR MX 13 (6 cil / 10,8L)",
      potencia: "480 cv @ 1.600 rpm",
      torque: "2.350 / 2.500 Nm @ 900 - 1.365 rpm",
      transmissao: "ZF TRAXON (Automatizada) - 12 marchas",
      pesoEmOrdemDeMarcha: "12.170 kg", // Total
      pbtTecnico: "58.000 kg",
      cmt: "150.000 kg",
    },
  },
  {
    id: slugify("CF FAS PX-7 192"),
    nome: "CF FAS PX-7 192",
    modelo: "Caminhão Semipesado",
    imagem: "https://via.placeholder.com/300x200?text=DAF+CF+FAS+PX-7+192", // Placeholder
    resumoVantagem: "**Vantagem (A SER PREENCHIDA)**: Eficiência e leveza para o transporte rodoviário de médias distâncias.",
    fichaTecnica: {
      motor: "PACCAR PX-7 (6 cil / 6,7L)",
      potencia: "261 cv @ 2.300 rpm",
      torque: "1.000 Nm @ 1.000 - 1.700 rpm",
      transmissao: "ZF TRAXON (Manual / Automatizada) - 9 marchas",
      pesoEmOrdemDeMarcha: "7.095 kg", // Total
      pbtTecnico: "26.500 kg",
      cmt: "35.000 kg",
    },
  },
  {
    id: slugify("DAILY 30-160"),
    nome: "DAILY 30-160",
    modelo: "Furgão/Chassi-Cabine Leve",
    imagem: "https://via.placeholder.com/300x200?text=IVECO+DAILY+30-160", // Placeholder
    // ATENÇÃO: Este é um Iveco. Você precisa preencher o resumo.
    resumoVantagem: "**Vantagem IVECO (A SER PREENCHIDA)**: Ideal para entregas urbanas rápidas, combinando agilidade de van com robustez de caminhão.",
    fichaTecnica: {
      motor: "FPT / F1C Max (4 cil / 3.0L)",
      potencia: "160 cv @ 3.500 rpm",
      torque: "380 Nm @ 1.600 - 2.900 rpm",
      transmissao: "ZF 6S 480 VO (Manual) - 6 marchas",
      pesoEmOrdemDeMarcha: "2.100 kg (estimado)", // Baseado em modelos Iveco 3.5-160
      pbtTecnico: "3.500 kg",
      cmt: "N/A", // Não fornecido na tabela, preencha se tiver
    },
  },

  // ... adicione mais veículos aqui.
];