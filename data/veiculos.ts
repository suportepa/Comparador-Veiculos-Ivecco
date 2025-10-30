// veiculos.ts (Localizado em COMP.../data/)

// 1. Definição de Interfaces (EXPORTADAS para uso nos componentes)
export interface FichaTecnica {
  motor: string;
  potencia: string;
  torque: string;
  transmissao: string;
  pesoEmOrdemDeMarcha: string;
  pbtTecnico: string;
  cmt: string;
}

// CORRIGIDO: O tipo 'imagem' deve ser 'number' (para require) 
// ou 'string' (para URI). Usaremos 'number' ou 'string' (para compatibilidade).
// Para compatibilidade com a implementação de require(), usaremos 'any' ou 'number'
// por segurança, mas 'string' funciona para o placeholder inicial.
// Vamos usar 'any' para cobrir require (number) e strings iniciais (URI).
export interface Veiculo {
  id: string;
  nome: string;
  modelo: string;
  imagem: any; // Ajustado para 'any' para aceitar o número retornado por require() e strings
  resumoVantagem: string;
  fichaTecnica: FichaTecnica;
}

// 2. Importe TODAS as suas imagens usando require() com o caminho corrigido
// O CAMINHO CORRETO É: '../assets/imagens/v1.png'
const imagem_v1 = require('../assets/imagens/v1.png');
const imagem_v2 = require('../assets/imagens/v2.png');
// ... continue importando as outras 300 imagens ...

// 3. Array de Dados Corrigida: Usando as variáveis de importação da imagem

export const VeiculosData: Veiculo[] = [
  {
    "id": "zf_traxon_cf_fac_8x2_px_7_308",
    "nome": "ZF TRAXON CF FAC 8x2 PX-7",
    "modelo": "CF FAC 8x2 PX-7",
    // CORRIGIDO: Usando a variável de require()
    "imagem": imagem_v1,
    "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
    "fichaTecnica": {
      "motor": "PACCAR PX-7",
      "potencia": "308 cv",
      "torque": "1200 Nm",
      "transmissao": "Manual (9 marchas)",
      "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
      "pbtTecnico": "33.000",
      "cmt": "35.000"
    }
  },
  {
    "id": "zf_traxon_cf_fad_8x4_mx_13_480",
    "nome": "ZF TRAXON CF FAD 8X4 MX-13",
    "modelo": "CF FAD 8X4 MX-13",
    // CORRIGIDO: Usando a variável de require() (assumindo que você criou a v2)
    "imagem": imagem_v2,
    "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
    "fichaTecnica": {
      "motor": "PACCAR MX 13",
      "potencia": "480 cv",
      "torque": "2350 Nm",
      "transmissao": "Automatizada (12 marchas)",
      "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
      "pbtTecnico": "58.000",
      "cmt": "150.000"
    }
  },
  {
    "id": "zf_traxon_cf_fas_px_7_192_261",
    "nome": "ZF TRAXON CF FAS PX-7 192",
    "modelo": "CF FAS PX-7 192",
    // CORRIGIDO: Usando a variável de require() (se houver, ou usando v1/v2 para teste)
    // Usarei 'imagem_v1' como placeholder até você adicionar mais imports.
    "imagem": imagem_v1,
    "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
    "fichaTecnica": {
      "motor": "PACCAR PX-7",
      "potencia": "261 cv",
      "torque": "1000 Nm",
      "transmissao": "Manual (9 marchas)",
      "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
      "pbtTecnico": "26.500",
      "cmt": "35.000"
    }
  },
{
  "id": "zf_traxon_cf_fas_px_7_213_290",
    "nome": "ZF TRAXON CF FAS PX-7 213",
      "modelo": "CF FAS PX-7 213",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR PX-7",
      "potencia": "290 cv",
        "torque": "1100 Nm",
          "transmissao": "Manual (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.500",
                "cmt": "35.000"
  }
},
{
  "id": "zf_traxon_cf_fas_px_7_227_308",
    "nome": "ZF TRAXON CF FAS PX-7 227",
      "modelo": "CF FAS PX-7 227",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR PX-7",
      "potencia": "308 cv",
        "torque": "1200 Nm",
          "transmissao": "Manual (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.500",
                "cmt": "35.000"
  }
},
{
  "id": "zf_traxon_cf_ft_4x2_px_9_380",
    "nome": "ZF TRAXON CF FT 4X2 PX-9",
      "modelo": "CF FT 4X2 PX-9",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR PX-9",
      "potencia": "380 cv",
        "torque": "1700 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_ft_mx_11_270_4x2_370",
    "nome": "ZF TRAXON CF FT MX-11 270 - 4X2",
      "modelo": "CF FT MX-11 270 - 4X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX-11",
      "potencia": "370 cv",
        "torque": "1800 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_ft_mx_11_300_4x2_410",
    "nome": "ZF TRAXON CF FT MX-11 300 - 4X2",
      "modelo": "CF FT MX-11 300 - 4X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX-11",
      "potencia": "410 cv",
        "torque": "2000 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_ft_mx_11_330_4x2_450",
    "nome": "ZF TRAXON CF FT MX-11 330 - 4X2",
      "modelo": "CF FT MX-11 330 - 4X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX-11",
      "potencia": "450 cv",
        "torque": "2200 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_fts_mx_11_300_6x2_410",
    "nome": "ZF TRAXON CF FTS MX-11 300 - 6x2",
      "modelo": "CF FTS MX-11 300 - 6x2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX-11",
      "potencia": "410 cv",
        "torque": "2000 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_fts_mx_11_330_6x2_450",
    "nome": "ZF TRAXON CF FTS MX-11 330 - 6x2",
      "modelo": "CF FTS MX-11 330 - 6x2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX-11",
      "potencia": "450 cv",
        "torque": "2200 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_cf_ftt_off_road_mx_13_6x2_480",
    "nome": "ZF TRAXON CF FTT OFF ROAD MX-13 - 6x2",
      "modelo": "CF FTT OFF ROAD MX-13 - 6x2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "480 cv",
        "torque": "2350 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "125.000"
  }
},
{
  "id": "zf_traxon_xf_ft_480_4x2_480",
    "nome": "ZF TRAXON XF FT - 480 - 4X2",
      "modelo": "XF FT - 480 - 4X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "480 cv",
        "torque": "2350 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_xf_ft_530_4x2_530",
    "nome": "ZF TRAXON XF FT - 530 - 4X2",
      "modelo": "XF FT - 530 - 4X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "530 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_xf_fts_480_6x2_480",
    "nome": "ZF TRAXON XF FTS - 480 - 6X2",
      "modelo": "XF FTS - 480 - 6X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "480 cv",
        "torque": "2350 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_xf_fts_530_6x2_530",
    "nome": "ZF TRAXON XF FTS - 530 - 6X2",
      "modelo": "XF FTS - 530 - 6X2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "530 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_xf_ftt_480_6x4_480",
    "nome": "ZF TRAXON XF FTT - 480 - 6X4",
      "modelo": "XF FTT - 480 - 6X4",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "480 cv",
        "torque": "2350 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "74.000"
  }
},
{
  "id": "zf_traxon_xf_ftt_530_6x4_530",
    "nome": "ZF TRAXON XF FTT - 530 - 6X4",
      "modelo": "XF FTT - 530 - 6X4",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "530 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "74.000"
  }
},
{
  "id": "zf_traxon_xf_ftt_off_road_480_mx_13_480",
    "nome": "ZF TRAXON XF FTT OFF-ROAD - 480 - MX-13",
      "modelo": "XF FTT OFF-ROAD - 480 - MX-13",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "480 cv",
        "torque": "2350 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "125.000 | 150.000"
  }
},
{
  "id": "zf_traxon_xf_ftt_off_road_530_mx_13_530",
    "nome": "ZF TRAXON XF FTT OFF-ROAD - 530 - MX-13",
      "modelo": "XF FTT OFF-ROAD - 530 - MX-13",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "PACCAR MX 13",
      "potencia": "530 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "125.000 | 150.000"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_daily_30_160_160",
    "nome": "ZF 6S 480 VO (ZF EL55) DAILY 30-160",
      "modelo": "DAILY 30-160",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_daily_35_160_hi_matic_160",
    "nome": "ZF 6S 480 VO (ZF EL55) DAILY 35-160 HI-MATIC",
      "modelo": "DAILY 35-160 HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_daily_35_180_hi_matic_180",
    "nome": "ZF 6S 480 VO (ZF EL55) DAILY 35-180 HI-MATIC",
      "modelo": "DAILY 35-180 HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_55_180_manual_hi_matic_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY 55-180 MANUAL | HI-MATIC",
      "modelo": "DAILY 55-180 MANUAL | HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "5.300",
                "cmt": "8.000"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_60_180_manual_hi_matic_prep_motorhome_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY 60-180 MANUAL | HI-MATIC PREP. MOTORHOME",
      "modelo": "DAILY 60-180 MANUAL | HI-MATIC PREP. MOTORHOME",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "5.950",
                "cmt": "8.800"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_65_180_manual_hi_matic_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY 65-180 MANUAL | HI-MATIC",
      "modelo": "DAILY 65-180 MANUAL | HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "6.500",
                "cmt": "8.800"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_daily_furgo_30_160_160",
    "nome": "ZF 6S 480 VO (ZF EL55) DAILY FURG�O 30-160",
      "modelo": "DAILY FURGÃO 30-160",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C VGT",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_daily_furgo_30_160_predisp_ambulncia_160",
    "nome": "ZF 6S 480 VO (ZF EL55) DAILY FURG�O 30-160 PREDISP. AMBULÂNCIA",
      "modelo": "DAILY FURGÃO 30-160 PREDISP. AMBULÂNCIA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C VGT",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.900",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_furgo_45_160_hi_matic_predisp_ambulncia_160",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY FURGÃO 45-160 HI-MATIC PREDISP. AMBULÂNCIA",
      "modelo": "DAILY FURGÃO 45-160 HI-MATIC PREDISP. AMBULÂNCIA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.300",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_furgo_45_160_manual_hi_matic_160",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY FURGÃO 45-160 MANUAL | HI-MATIC",
      "modelo": "DAILY FURGÃO 45-160 MANUAL | HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "160 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.400",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_furgo_45_180_hi_matic_predisp_ambulncia_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY FURGÃO 45-180 HI-MATIC PREDISP. AMBULÂNCIA",
      "modelo": "DAILY FURGÃO 45-180 HI-MATIC PREDISP. AMBULÂNCIA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.300",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_furgo_45_180_manual_hi_matic_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY FURGÃO 45-180 MANUAL | HI-MATIC",
      "modelo": "DAILY FURGÃO 45-180 MANUAL | HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "380 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.400",
                "cmt": "6.500"
  }
},
{
  "id": "zf_6s_480_vo_zf_el55_zf_8hp_daily_furgo_55_180_manual_hi_matic_180",
    "nome": "ZF 6S 480 VO (ZF EL55) ZF 8HP DAILY FURGÂO 55-180 MANUAL | HI-MATIC",
      "modelo": "DAILY FURGÃO 55-180 MANUAL | HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / F1C Max",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "5.300",
                "cmt": "8.000"
  }
},
{
  "id": "_e_daily_42_136",
    "nome": " E-DAILY 4.2",
      "modelo": "E-DAILY 4.2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT EPWT 550002E / AP MOTOR",
      "potencia": "136 cv",
        "torque": "300 Nm",
          "transmissao": "N/A (? marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.250",
                "cmt": "N/A"
  }
},
{
  "id": "_e_daily_42_furgo_136",
    "nome": " E-DAILY 4.2 FURGÃO",
      "modelo": "E-DAILY 4.2 FURGÃO",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT EPWT 550002 / AP MOTOR",
      "potencia": "136 cv",
        "torque": "300 Nm",
          "transmissao": "N/A (? marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.250",
                "cmt": "N/A"
  }
},
{
  "id": "_e_daily_72_193",
    "nome": " E-DAILY 7.2",
      "modelo": "E-DAILY 7.2",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT EPWT 550002E / AP MOTOR",
      "potencia": "193 cv",
        "torque": "400 Nm",
          "transmissao": "N/A (? marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "7.200 | 7.200",
                "cmt": "N/A"
  }
},
{
  "id": "zf_traxon_12tx2621_td_s_way_460_6x2_gnv_biometano_460",
    "nome": "ZF TraXon 12TX2621 TD S-WAY 460 (6x2) - GNV / BIOMETANO",
      "modelo": "S-WAY 460 (6x2) - GNV / BIOMETANO",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13, ciclo Otto, à gás natural, biometano ou qualquer mistura de ambos",
      "potencia": "460 cv",
        "torque": "2000 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.200",
                "cmt": "53.000"
  }
},
{
  "id": "zf_traxon_12tx2620_td_s_way_480_4x2_480",
    "nome": "ZF TraXon 12TX2620 TD S-WAY 480 (4X2)",
      "modelo": "S-WAY 480 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13",
      "potencia": "480 cv",
        "torque": "2450 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.200",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_12tx2620_td_s_way_480_4x2_suspenso_pneumtica_480",
    "nome": "ZF TraXon 12TX2620 TD S-WAY 480 (4X2) SUSPENSÃO PNEUMÁTICA",
      "modelo": "S-WAY 480 (4X2) SUSPENSÃO PNEUMÁTICA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13",
      "potencia": "480 cv",
        "torque": "2450 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.200",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_12tx2620_td_s_way_480_6x2_480",
    "nome": "ZF TraXon 12TX2620 TD S-WAY 480 (6X2)",
      "modelo": "S-WAY 480 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13",
      "potencia": "480 cv",
        "torque": "2450 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_12tx2620_td_s_way_480_6x2_suspenso_pneumtica_480",
    "nome": "ZF TraXon 12TX2620 TD S-WAY 480 (6X2) SUSPENSÃO PNEUMÁTICA",
      "modelo": "S-WAY 480 (6X2) SUSPENSÃO PNEUMÁTICA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13",
      "potencia": "480 cv",
        "torque": "2450 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.200",
                "cmt": "60.000"
  }
},
{
  "id": "zf_traxon_12tx2620_td_s_way_540_6x4_540",
    "nome": "ZF TraXon 12TX2620 TD S-WAY 540 (6X4)",
      "modelo": "S-WAY 540 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / Cursor 13",
      "potencia": "540 cv",
        "torque": "2550 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "29.100",
                "cmt": "80.000"
  }
},
{
  "id": "eaton_eso_6206_b_tector_11_190_my24_4x2_190",
    "nome": "Eaton ESO 6206 B TECTOR 11-190 MY24 (4X2)",
      "modelo": "TECTOR 11-190 MY24 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 4",
      "potencia": "190 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "10.600",
                "cmt": "13.000"
  }
},
{
  "id": "eaton_5406_a_tector_15_210_4x2_my24_207",
    "nome": "Eaton 5406 A TECTOR 15-210 (4X2) MY24",
      "modelo": "TECTOR 15-210 (4X2) MY24",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 4",
      "potencia": "207 cv",
        "torque": "720 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "15.400",
                "cmt": "27.000"
  }
},
{
  "id": "eaton_fs_5406_a_tector_17_210_4x2_210",
    "nome": "Eaton FS 5406 A TECTOR 17-210 (4X2)",
      "modelo": "TECTOR 17-210 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 4",
      "potencia": "210 cv",
        "torque": "720 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "33.000"
  }
},
{
  "id": "eaton_5406_a_tector_17_210_cng_4x2_204",
    "nome": "Eaton 5406 A TECTOR 17-210 CNG (4X2)",
      "modelo": "TECTOR 17-210 CNG (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "204 cv",
        "torque": "750 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "N/A"
  }
},
{
  "id": "eaton_fs_6406_b_tector_17_280_4x2_280",
    "nome": "Eaton FS 6406 B TECTOR 17-280 (4X2)",
      "modelo": "TECTOR 17-280 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "280 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "33.000"
  }
},
{
  "id": "eaton_mhd_evo_tector_17_320_autoshift_4x2_320",
    "nome": "Eaton MHD EVO TECTOR 17-320 AUTOSHIFT (4X2)",
      "modelo": "TECTOR 17-320 AUTOSHIFT (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Autoshift (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "33.000"
  }
},
{
  "id": "eaton_mhd_evo_tector_17_320_autoshift_4x2_coleta_320",
    "nome": "Eaton MHD EVO TECTOR 17-320 AUTOSHIFT (4X2) - COLETA",
      "modelo": "TECTOR 17-320 AUTOSHIFT (4X2) - COLETA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Autoshift (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "33.000"
  }
},
{
  "id": "eaton_mhd_evo_ea_13110_tector_17_320t_4x2_320",
    "nome": "Eaton MHD EVO EA-13110 TECTOR 17-320T (4X2)",
      "modelo": "TECTOR 17-320T (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Autoshift (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "36.000"
  }
},
{
  "id": "eaton_6406_b_tector_24_280_6x2_280",
    "nome": "Eaton 6406 B TECTOR 24-280 (6X2)",
      "modelo": "TECTOR 24-280 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "280 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.000",
                "cmt": "33.000"
  }
},
{
  "id": "eaton_6406_b_tector_24_280_8x2_280",
    "nome": "Eaton 6406 B TECTOR 24-280 (8X2)",
      "modelo": "TECTOR 24-280 (8X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "280 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "29.000",
                "cmt": "35.000"
  }
},
{
  "id": "eaton_mhd_evo_tector_24_320_autoshift_6x2_my24_320",
    "nome": "Eaton MHD EVO TECTOR 24-320 AUTOSHIFT (6X2) MY24",
      "modelo": "TECTOR 24-320 AUTOSHIFT (6X2) MY24",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Autoshift (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.390",
                "cmt": "36.000"
  }
},
{
  "id": "eaton_fts_16108_ll_tector_27_320_6x4_320",
    "nome": "Eaton FTS 16108 LL TECTOR 27-320 (6X4)",
      "modelo": "TECTOR 27-320 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Manual (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.690",
                "cmt": "44.000"
  }
},
{
  "id": "eaton_mhd_evo_tector_31_320_autoshift_8x2_320",
    "nome": "Eaton MHD EVO TECTOR 31-320 AUTOSHIFT (8X2)",
      "modelo": "TECTOR 31-320 AUTOSHIFT (8X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 6",
      "potencia": "320 cv",
        "torque": "1100 Nm",
          "transmissao": "Autoshift (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "31.200",
                "cmt": "35.000"
  }
},
{
  "id": "eaton_eso_6106_b_tector_9_190_my24_4x2_190",
    "nome": "Eaton ESO 6106 B TECTOR 9-190 MY24 (4X2)",
      "modelo": "TECTOR 9-190 MY24 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT / NEF 4",
      "potencia": "190 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "8.600",
                "cmt": "11.000"
  }
},
{
  "id": "mb_g_70_6_mb_g_70_6_powershift_3_accelo_1017_4x2_163",
    "nome": "MB G 70-6 MB G 70-6 PowerShift 3 ACCELO 1017 (4x2)",
      "modelo": "ACCELO 1017 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.000",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_70_6_mb_g_70_6_powershift_3_accelo_1317_6x2_163",
    "nome": "MB G 70-6 MB G 70-6 PowerShift 3 ACCELO 1317 (6x2)",
      "modelo": "ACCELO 1317 (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "23.000",
                "cmt": "N/A"
  }
},
{
  "id": "eaton_eso_6205_mb_g_70_6_mb_g_70_6_powershift_3_accelo_817_4x2_163",
    "nome": "Eaton ESO 6205 MB G 70-6 MB G 70-6 PowerShift 3 ACCELO 817 (4x2)",
      "modelo": "ACCELO 817 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.000",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2045_ls_4x2_449",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2045 LS (4x2)",
      "modelo": "ACTROS 2045 LS (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "449 cv",
        "torque": "2200 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.100",
                "cmt": "62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2045_s_4x2_449",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2045 S (4x2)",
      "modelo": "ACTROS 2045 S (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "449 cv",
        "torque": "2200 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.100",
                "cmt": "62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2548_ls_6x2_476",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2548 LS (6x2)",
      "modelo": "ACTROS 2548 LS (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "476 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_mb_g_340_12_powershift_3_advanced_actros_2548_s_6x2_476",
    "nome": "MB G 291-12  PowerShift 3 Advanced MB G 340-12  PowerShift 3 Advanced ACTROS 2548 S (6x2)",
      "modelo": "ACTROS 2548 S (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "476 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "30.100",
                "cmt": "68.000 / 62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2553_ls_6x2_530",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2553 LS (6x2)",
      "modelo": "ACTROS 2553 LS (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 471 LA",
      "potencia": "530 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_mb_g_340_12_powershift_3_advanced_actros_2553_s_6x2_530",
    "nome": "MB G 291-12  PowerShift 3 Advanced MB G 340-12  PowerShift 3 Advanced ACTROS 2553 S (6x2)",
      "modelo": "ACTROS 2553 S (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 471 LA",
      "potencia": "530 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "30.100",
                "cmt": "68.000 / 62.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2651_ls_6x4_495",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2651 LS (6x4)",
      "modelo": "ACTROS 2651 LS (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "80.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_mb_g_340_12_powershift_3_advanced_actros_2651_s_6x4_495",
    "nome": "MB G 291-12  PowerShift 3 Advanced MB G 340-12  PowerShift 3 Advanced ACTROS 2651 S (6x4)",
      "modelo": "ACTROS 2651 S (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "120.000 / 80.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_actros_2653_ls_6x4_530",
    "nome": "MB G 291-12  PowerShift 3 Advanced ACTROS 2653 LS (6x4)",
      "modelo": "ACTROS 2653 LS (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 471 LA",
      "potencia": "530 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "80.000"
  }
},
{
  "id": "mb_g_291_12_powershift_3_advanced_mb_g_340_12_powershift_3_advanced_actros_2653_s_6x4_530",
    "nome": "MB G 291-12  PowerShift 3 Advanced MB G 340-12  PowerShift 3 Advanced * ACTROS 2653 S (6x4)",
      "modelo": "ACTROS 2653 S (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 471 LA",
      "potencia": "530 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "120.000 / 80.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_3351_6x4_495",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 3351 (6x4)",
      "modelo": "AROCS 3351 (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_3351_k_6x4_495",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 3351 K (6x4)",
      "modelo": "AROCS 3351 K (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_3351_s_6x4_495",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 3351 S (6x4)",
      "modelo": "AROCS 3351 S (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_3353_s_6x4_530",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 3353 S (6x4)",
      "modelo": "AROCS 3353 S (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 471 LA",
      "potencia": "530 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.500",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_4151_k_6x4_495",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 4151 K (6x4)",
      "modelo": "AROCS 4151 K (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "41.000",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_340_12_powershift_3_advanced_arocs_58_ton_k_8x4_495",
    "nome": "MB G 340-12  PowerShift 3 Advanced AROCS 58 TON K (8x4)",
      "modelo": "AROCS 58 TON K (8x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 460 LA",
      "potencia": "495 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "58.000",
                "cmt": "150.000"
  }
},
{
  "id": "mb_g_90_6_mb_g_140_8_powershift_3_advance_atego_1419_4x2_185",
    "nome": "MB G 90-6 MB G 140-8* PowerShift 3 Advance ATEGO 1419 (4x2)",
      "modelo": "ATEGO 1419 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "185 cv",
        "torque": "700 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.000 | 23.000",
                "cmt": "23.000"
  }
},
{
  "id": "mb_g_90_6_mb_g_140_8_powershift_3_advance_atego_1719_4x2_185",
    "nome": "MB G 90-6 MB G 140-8* PowerShift 3 Advance ATEGO 1719 (4x2)",
      "modelo": "ATEGO 1719 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "185 cv",
        "torque": "700 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100 | 24.100",
                "cmt": "27.000"
  }
},
{
  "id": "mb_g_140_8_powershift_3_advance_g_90_6_atego_1719_beb_4x2_185",
    "nome": "MB G 140-8* PowerShift 3 Advance G 90-6 ATEGO 1719 BEB (4x2)",
      "modelo": "ATEGO 1719 BEB (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "185 cv",
        "torque": "700 Nm",
          "transmissao": "Automatizado (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.000",
                "cmt": "27.000"
  }
},
{
  "id": "mb_g_90_6_mb_g_140_8_powershift_3_advance_atego_1719_k_4x2_185",
    "nome": "MB G 90-6 MB G 140-8* PowerShift 3 Advance ATEGO 1719 K (4x2)",
      "modelo": "ATEGO 1719 K (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "185 cv",
        "torque": "700 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "27.000"
  }
},
{
  "id": "mb_g_90_6_mb_g_140_8_powershift_3_advance_atego_1726_4x2_260",
    "nome": "MB G 90-6 MB G 140-8* PowerShift 3 Advance ATEGO 1726 (4x2)",
      "modelo": "ATEGO 1726 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "260 cv",
        "torque": "900 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "27.000"
  }
},
{
  "id": "mb_g_90_6_mb_g_140_8_powershift_3_advance_atego_1726_k_4x2_260",
    "nome": "MB G 90-6 MB G 140-8* PowerShift 3 Advance ATEGO 1726 K (4x2)",
      "modelo": "ATEGO 1726 K (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "260 cv",
        "torque": "900 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "N/A"
  }
},
{
  "id": "allison_3000_6_atego_1729_ko_4x2_286",
    "nome": "Allison 3000- 6 ATEGO 1729 KO (4x2)",
      "modelo": "ATEGO 1729 KO (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automática (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_1733_4x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 1733 (4x2)",
      "modelo": "ATEGO 1733 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "N/A"
  }
},
{
  "id": "allison_3000_6_atego_1733_bomb_4x2_321",
    "nome": "Allison 3000- 6 ATEGO 1733 BOMB (4x2)",
      "modelo": "ATEGO 1733 BOMB (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automática (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_1733_k_4x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 1733 k (4x2)",
      "modelo": "ATEGO 1733 k (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_1933_ls_4x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 1933 LS (4x2)",
      "modelo": "ATEGO 1933 LS (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "18.000",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_140_8_powershift_3_advanced_atego_2429_6x2_286",
    "nome": "MB G 140-8 PowerShift 3 Advanced ATEGO 2429 (6x2)",
      "modelo": "ATEGO 2429 (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_140_8_powershift_3_advanced_atego_2429_k_6x2_286",
    "nome": "MB G 140-8 PowerShift 3 Advanced ATEGO 2429 K (6x2)",
      "modelo": "ATEGO 2429 K (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_2433_6x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 2433 (6x2)",
      "modelo": "ATEGO 2433 (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_2433_k_6x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 2433 K (6x2)",
      "modelo": "ATEGO 2433 K (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.100",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_2730_6x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 2730 (6x4)",
      "modelo": "ATEGO 2730 (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.600",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_2730_b_6x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 2730 B (6x4)",
      "modelo": "ATEGO 2730 B (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.600",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_2730_k_6x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 2730 K (6x4)",
      "modelo": "ATEGO 2730 K (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.600",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_3033_8x2_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 3033 (8x2)",
      "modelo": "ATEGO 3033 (8x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "30.200",
                "cmt": "N/A"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_3133_6x4_321",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 3133 (6x4)",
      "modelo": "ATEGO 3133 (6x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "321 cv",
        "torque": "1250 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "30.500",
                "cmt": "63.000"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_3330_8x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 3330 (8x4)",
      "modelo": "ATEGO 3330 (8x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "32.700",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_3330_b_8x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 3330 B (8x4)",
      "modelo": "ATEGO 3330 B (8x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "32.700",
                "cmt": "45.100"
  }
},
{
  "id": "mb_g_211_12_powershift_3_advanced_atego_3330_k_8x4_286",
    "nome": "MB G 211-12 PowerShift 3 Advanced ATEGO 3330 K (8x4)",
      "modelo": "ATEGO 3330 K (8x4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 926 LA",
      "potencia": "286 cv",
        "torque": "1100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "32.700",
                "cmt": "45.100"
  }
},
{
  "id": "eaton_eso_6206_a_mb_g_90_6_amt_novo_accelo_1117_4x2_163",
    "nome": "Eaton ESO 6206 A | MB G 90-6 AMT NOVO ACCELO 1117 (4x2)",
      "modelo": "NOVO ACCELO 1117 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.000",
                "cmt": "N/A"
  }
},
{
  "id": "eaton_eso_6206_mb_g_90_6_amt_novo_accelo_1417_6x2_163",
    "nome": "Eaton ESO 6206 | MB G 90-6 AMT NOVO ACCELO 1417 (6x2)",
      "modelo": "NOVO ACCELO 1417 (6x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "23.000",
                "cmt": "13.000"
  }
},
{
  "id": "eaton_eso_6205_novo_accelo_917_4x2_163",
    "nome": "Eaton ESO 6205 NOVO ACCELO 917 (4x2)",
      "modelo": "NOVO ACCELO 917 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MB OM 924 LA",
      "potencia": "163 cv",
        "torque": "610 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.000",
                "cmt": "N/A"
  }
},
{
  "id": "grs905_g_370_a6x2na_carga_geral_375",
    "nome": "GRS905 G 370 A6x2NA | Carga Geral",
      "modelo": "G 370 A6x2NA | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 162",
      "potencia": "375 cv",
        "torque": "1900 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "g25cm_g_460_a6x2na_gs_cng_carga_geral_466",
    "nome": "G25CM G 460 A6x2NA (GÁS À CNG) | Carga Geral",
      "modelo": "G 460 A6x2NA (GÀS À CNG) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OC13 104",
      "potencia": "466 cv",
        "torque": "2300 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "g25cm_g_460_a6x4nz_gs_cng_carga_geral_466",
    "nome": "G25CM G 460 A6x4NZ (GÀS À CNG) | Carga Geral",
      "modelo": "G 460 A6x4NZ (GÁS À CNG) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OC13 104",
      "potencia": "466 cv",
        "torque": "2300 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "90.000"
  }
},
{
  "id": "g25cm_r_420_a4x2_hz_super_carga_geral_426",
    "nome": "G25CM R 420 A4x2 HZ (SUPER) | Carga Geral",
      "modelo": "R 420 A4x2 HZ (SUPER) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 176",
      "potencia": "426 cv",
        "torque": "2300 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.100",
                "cmt": "66.000"
  }
},
{
  "id": "g25cm_r_420_a6x2na_super_carga_geral_426",
    "nome": "G25CM R 420 A6x2NA (SUPER) | Carga Geral",
      "modelo": "R 420 A6x2NA (SUPER) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 176",
      "potencia": "426 cv",
        "torque": "2300 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "grs905r_r_450_a6x2na_plus_456",
    "nome": "GRS905R R 450 A6x2NA (PLUS)",
      "modelo": "R 450 A6x2NA (PLUS)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 164",
      "potencia": "456 cv",
        "torque": "2350 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "g25cm_r_460_a4x2_hz_super_carga_geral_466",
    "nome": "G25CM R 460 A4x2 HZ (SUPER) | Carga Geral",
      "modelo": "R 460 A4x2 HZ (SUPER) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 175",
      "potencia": "466 cv",
        "torque": "2500 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.100",
                "cmt": "66.000"
  }
},
{
  "id": "g25cm_r_460_a6x2na_super_carga_geral_466",
    "nome": "G25CM R 460 A6x2NA (SUPER) | Carga Geral",
      "modelo": "R 460 A6x2NA (SUPER) | Carga Geral",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 175",
      "potencia": "466 cv",
        "torque": "2500 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "g33cm_r_500_a6x4nz_biodiesel_b100_graneleiro_507",
    "nome": "G33CM R 500 A6x4NZ (BIODIESEL - B100)| Graneleiro",
      "modelo": "R 500 A6x4NZ (BIODIESEL - B100)| Graneleiro",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 174",
      "potencia": "507 cv",
        "torque": "2650 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "90.000"
  }
},
{
  "id": "g33cm_r_500_a6x4nz_super_basculante_507",
    "nome": "G33CM R 500 A6x4NZ (SUPER) | Basculante",
      "modelo": "R 500 A6x4NZ (SUPER) | Basculante",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 174",
      "potencia": "507 cv",
        "torque": "2650 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "90.000"
  }
},
{
  "id": "grs905r_r_540_a6x4nz_plus_graneleiro_547",
    "nome": "GRS905R R 540 A6x4NZ (PLUS)| Graneleiro",
      "modelo": "R 540 A6x4NZ (PLUS)| Graneleiro",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 166",
      "potencia": "547 cv",
        "torque": "2700 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "90.000"
  }
},
{
  "id": "g33cm_r_560_a6x4nz_super_basculante_568",
    "nome": "G33CM R 560 A6x4NZ (SUPER) | Basculante",
      "modelo": "R 560 A6x4NZ (SUPER) | Basculante",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC13 173",
      "potencia": "568 cv",
        "torque": "2800 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.100",
                "cmt": "90.000"
  }
},
{
  "id": "grso926_s_770_a6x2na_781",
    "nome": "GRSO926 S 770 A6x2NA",
      "modelo": "S 770 A6x2NA",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "DC16 123",
      "potencia": "781 cv",
        "torque": "3700 Nm",
          "transmissao": "Automática (14 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.100",
                "cmt": "78.000"
  }
},
{
  "id": "eaton_fs_5406a_constellation_14210_4x2_205",
    "nome": "Eaton FS 5406A CONSTELLATION 14.210 (4X2)",
      "modelo": "CONSTELLATION 14.210 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0834LF08",
      "potencia": "205 cv",
        "torque": "750 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "14.500",
                "cmt": "23.000"
  }
},
{
  "id": "eaton_fs_5406a_constellation_17210_4x2_205",
    "nome": "Eaton FS 5406A CONSTELLATION 17.210 (4X2)",
      "modelo": "CONSTELLATION 17.210 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0834LF08",
      "potencia": "205 cv",
        "torque": "750 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "16.800",
                "cmt": "27.000"
  }
},
{
  "id": "eaton_fs_5406a_zf_8ap_900t_constellation_18210_4x2_205",
    "nome": "Eaton FS 5406A | ZF 8AP 900T CONSTELLATION 18.210 (4X2)",
      "modelo": "CONSTELLATION 18.210 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0834LF08",
      "potencia": "205 cv",
        "torque": "750 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.600",
                "cmt": "27.000"
  }
},
{
  "id": "eaton_fso_6406a_zf_9s_1310_td_constellation_18260_4x2_255",
    "nome": "Eaton FSO 6406A | ZF 9S 1310 TD CONSTELLATION 18.260 (4X2)",
      "modelo": "CONSTELLATION 18.260 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF18",
      "potencia": "255 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.600",
                "cmt": "27.000"
  }
},
{
  "id": "zf_9s_1310_td_zf_12tx_2420_td_constellation_18320_4x2_315",
    "nome": "ZF 9S 1310 TD | ZF 12TX 2420 TD CONSTELLATION 18.320 (4x2)",
      "modelo": "CONSTELLATION 18.320 (4x2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF17",
      "potencia": "315 cv",
        "torque": "1200 Nm",
          "transmissao": "Manual (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.600",
                "cmt": "35.000"
  }
},
{
  "id": "zf_12tx_2624_td_constellation_19380_4x2_375",
    "nome": "ZF 12TX 2624 TD CONSTELLATION 19.380 (4X2)",
      "modelo": "CONSTELLATION 19.380 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins L9",
      "potencia": "375 cv",
        "torque": "1700 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.600",
                "cmt": "45.000"
  }
},
{
  "id": "zf_12tx_2624_td_constellation_20480_4x2_475",
    "nome": "ZF 12TX 2624 TD CONSTELLATION 20.480 (4X2)",
      "modelo": "CONSTELLATION 20.480 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D2676LFAG",
      "potencia": "475 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500",
                "cmt": "60.000"
  }
},
{
  "id": "zf_12tx_2624_td_constellation_25380_6x2_375",
    "nome": "ZF 12TX 2624 TD CONSTELLATION 25.380 (6X2)",
      "modelo": "CONSTELLATION 25.380 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins L9",
      "potencia": "375 cv",
        "torque": "1700 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.600",
                "cmt": "56.000"
  }
},
{
  "id": "zf_12tx_2624_td_constellation_25480hd_6x2_475",
    "nome": "ZF 12TX 2624 TD CONSTELLATION 25.480HD (6X2)",
      "modelo": "CONSTELLATION 25.480HD (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D2676LFAG",
      "potencia": "475 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "70.000"
  }
},
{
  "id": "eaton_fso_6406_a_zf_9s_1310_td_constellation_26260_6x2_260",
    "nome": "Eaton FSO 6406-A | ZF 9S 1310 TD CONSTELLATION 26.260 (6X2)",
      "modelo": "CONSTELLATION 26.260 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF18",
      "potencia": "260 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "25.600",
                "cmt": "35.000"
  }
},
{
  "id": "zf_9s_1310_td_zf_12tx_2420_td_constellation_26320_6x2_315",
    "nome": "ZF 9S 1310 TD | ZF 12TX 2420 TD CONSTELLATION 26.320 (6X2)",
      "modelo": "CONSTELLATION 26.320 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF17",
      "potencia": "315 cv",
        "torque": "1200 Nm",
          "transmissao": "Manual (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "25.600",
                "cmt": "35.000"
  }
},
{
  "id": "zf_9s_1310_td_constellation_27260_6x4_260",
    "nome": "ZF 9S 1310 TD CONSTELLATION 27.260 (6X4)",
      "modelo": "CONSTELLATION 27.260 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF18",
      "potencia": "260 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.100",
                "cmt": "36.000"
  }
},
{
  "id": "zf_9s_1310_td_zf_12tx_2420_td_constellation_30320_8x2_315",
    "nome": "ZF 9S 1310 TD | ZF 12TX 2420 TD CONSTELLATION 30.320 (8X2)",
      "modelo": "CONSTELLATION 30.320 (8X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF17",
      "potencia": "315 cv",
        "torque": "1200 Nm",
          "transmissao": "Manual (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "31.200",
                "cmt": "36.000"
  }
},
{
  "id": "zf_12tx_2424_td_zf_9s_1310_td_constellation_31320_6x4_315",
    "nome": "ZF 12TX 2424 TD | ZF 9S 1310 TD CONSTELLATION 31.320 (6X4)",
      "modelo": "CONSTELLATION 31.320 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF17",
      "potencia": "315 cv",
        "torque": "1200 Nm",
          "transmissao": "Manual (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "30.600",
                "cmt": "42.000"
  }
},
{
  "id": "zf_12tx_2424_td_constellation_32380_6x4_375",
    "nome": "ZF 12TX 2424 TD CONSTELLATION 32.380 (6X4)",
      "modelo": "CONSTELLATION 32.380 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "L9",
      "potencia": "375 cv",
        "torque": "1700 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "32.700",
                "cmt": "70.000"
  }
},
{
  "id": "zf_9s_1310_td_constellation_33260_8x4_255",
    "nome": "ZF 9S 1310 TD CONSTELLATION 33.260 (8X4)",
      "modelo": "CONSTELLATION 33.260 (8X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D0836LF18",
      "potencia": "255 cv",
        "torque": "950 Nm",
          "transmissao": "Manual (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "32.400",
                "cmt": "36.000"
  }
},
{
  "id": "zf_12tx_2824_to_constellation_33480_6x4_475",
    "nome": "ZF 12TX 2824 TO CONSTELLATION 33.480 (6X4)",
      "modelo": "CONSTELLATION 33.480 (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D2676LFAG",
      "potencia": "475 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.700",
                "cmt": "125.000"
  }
},
{
  "id": "zf_eso_6106a_delivery_11180_4x2_175",
    "nome": "ZF ESO 6106A DELIVERY 11.180 (4X2)",
      "modelo": "DELIVERY 11.180 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins | ISF 3.8l",
      "potencia": "175 cv",
        "torque": "600 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "10.800",
                "cmt": "13.200"
  }
},
{
  "id": "zf_eso_6106a_delivery_11180_4x4_175",
    "nome": "ZF ESO 6106A DELIVERY 11.180 (4X4)",
      "modelo": "DELIVERY 11.180 (4X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins | ISF 3.8l",
      "potencia": "175 cv",
        "torque": "600 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "10.800",
                "cmt": "13.200"
  }
},
{
  "id": "zf_eso_6106a_delivery_13180_6x2_175",
    "nome": "ZF ESO 6106A DELIVERY 13.180 (6X2)",
      "modelo": "DELIVERY 13.180 (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins | ISF 3.8l",
      "potencia": "175 cv",
        "torque": "600 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "13.700",
                "cmt": "13.200"
  }
},
{
  "id": "zf_eso_4206a_delivery_6170_4x2_166",
    "nome": "ZF ESO 4206A DELIVERY 6.170 (4X2)",
      "modelo": "DELIVERY 6.170 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT | F1C 3.0l",
      "potencia": "166 cv",
        "torque": "430 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "6.350",
                "cmt": "6.900"
  }
},
{
  "id": "zf_eso_6106a_delivery_9180_4x2_175",
    "nome": "ZF ESO 6106A DELIVERY 9.180 (4X2)",
      "modelo": "DELIVERY 9.180 (4X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Cummins | ISF 3.8l",
      "potencia": "175 cv",
        "torque": "600 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "9.200",
                "cmt": "11.500"
  }
},
{
  "id": "zf_eso_4106a_delivery_express_156",
    "nome": "ZF ESO 4106A DELIVERY EXPRESS",
      "modelo": "DELIVERY EXPRESS",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "FPT | F1C 3.0l",
      "potencia": "156 cv",
        "torque": "360 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.600",
                "cmt": "5.000"
  }
},
{
  "id": "_e_delivery_11_381",
    "nome": " e-DELIVERY 11",
      "modelo": "e-DELIVERY 11",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "JJE SD460",
      "potencia": "381 cv",
        "torque": "2300 Nm",
          "transmissao": "N/A (? marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "10.700",
                "cmt": "15.000"
  }
},
{
  "id": "_e_delivery_14_408",
    "nome": " e-DELIVERY 14",
      "modelo": "e-DELIVERY 14",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VW 280",
      "potencia": "408 cv",
        "torque": "2150 Nm",
          "transmissao": "N/A (? marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "14.300",
                "cmt": "15.000"
  }
},
{
  "id": "zf_12tx_2624_td_meteor_28480hd_6x2_475",
    "nome": "ZF 12TX 2624 TD METEOR 28.480HD (6X2)",
      "modelo": "METEOR 28.480HD (6X2)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D2676LFAG",
      "potencia": "475 cv",
        "torque": "2400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "70.000"
  }
},
{
  "id": "zf_12tx_2624_td_meteor_29530hd_6x4_525",
    "nome": "ZF 12TX 2624 TD METEOR 29.530HD (6X4)",
      "modelo": "METEOR 29.530HD (6X4)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "MAN | D2676LFAD",
      "potencia": "525 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "29.000",
                "cmt": "80.000"
  }
},
{
  "id": "at2612_g_fh_420_4x2r_420",
    "nome": "AT2612 G FH 420 4x2R",
      "modelo": "FH 420 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_460_4x2r_460",
    "nome": "AT2612 G FH 460 4x2R",
      "modelo": "FH 460 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_500_4x2r_500",
    "nome": "AT2612 G FH 500 4x2R",
      "modelo": "FH 500 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_540_4x2r_540",
    "nome": "AT2612 G FH 540 4x2R",
      "modelo": "FH 540 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_420_6x2t_balancim_420",
    "nome": "AT2612 G FH 420 6x2T (Balancim)",
      "modelo": "FH 420 6x2T (Balancim)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 | 27.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_460_6x2t_balancim_460",
    "nome": "AT2612 G FH 460 6x2T (Balancim)",
      "modelo": "FH 460 6x2T (Balancim)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 | 27.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_500_6x2t_balancim_500",
    "nome": "AT2612 G FH 500 6x2T (Balancim)",
      "modelo": "FH 500 6x2T (Balancim)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 | 27.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_540_6x2t_balancim_540",
    "nome": "AT2612 G FH 540 6x2T (Balancim)",
      "modelo": "FH 540 6x2T (Balancim)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 | 27.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_420_6x2t_susp_a_ar_com_freio_a_disco_420",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 420 6x2T (Susp. a ar com freio a disco)",
      "modelo": "FH 420 6x2T (Susp. a ar com freio a disco)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000 | 28.000",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_460_6x2t_susp_a_ar_com_freio_a_disco_460",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 460 6x2T (Susp. a ar com freio a disco)",
      "modelo": "FH 460 6x2T (Susp. a ar com freio a disco)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000 | 28.000",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_500_6x2t_susp_a_ar_com_freio_a_disco_500",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 500 6x2T (Susp. a ar com freio a disco)",
      "modelo": "FH 500 6x2T (Susp. a ar com freio a disco)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000 | 28.000",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_540_6x2t_susp_a_ar_com_freio_a_disco_540",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 540 6x2T (Susp. a ar com freio a disco)",
      "modelo": "FH 540 6x2T (Susp. a ar com freio a disco)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000 | 28.000",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_420_6x2t_susp_a_ar_com_freio_a_tambor_420",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 420 6x2T (Susp. a ar com freio a tambor)",
      "modelo": "FH 420 6x2T (Susp. a ar com freio a tambor)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_460_6x2t_susp_a_ar_com_freio_a_tambor_460",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 460 6x2T (Susp. a ar com freio a tambor)",
      "modelo": "FH 460 6x2T (Susp. a ar com freio a tambor)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_500_6x2t_susp_a_ar_com_freio_a_tambor_500",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 500 6x2T (Susp. a ar com freio a tambor)",
      "modelo": "FH 500 6x2T (Susp. a ar com freio a tambor)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_aso_ulc_super_reduzida_fh_540_6x2t_susp_a_ar_com_freio_a_tambor_540",
    "nome": "AT2612 G + ASO-ULC (Super reduzida) FH 540 6x2T (Susp. a ar com freio a tambor)",
      "modelo": "FH 540 6x2T (Susp. a ar com freio a tambor)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.000",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fh_420_6x4r_420",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FH 420 6x4R",
      "modelo": "FH 420 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 |  33.500 | 35.000 | 36.000",
                "cmt": "80.000 | 100.000 / 130.000 | 100.000 / 130.000 | 100.000 / 130.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fh_460_6x4r_460",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FH 460 6x4R",
      "modelo": "FH 460 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 |  33.500 | 35.000 | 36.000",
                "cmt": "80.000 | 100.000 / 130.000 | 100.000 / 130.000 | 100.000 / 130.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fh_500_6x4r_500",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FH 500 6x4R",
      "modelo": "FH 500 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 |  33.500 | 35.000 | 36.000",
                "cmt": "80.000 | 100.000 / 130.000 | 100.000 / 130.000 | 100.000 / 130.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fh_540_6x4r_540",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FH 540 6x4R",
      "modelo": "FH 540 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 |  33.500 | 35.000 | 36.000",
                "cmt": "80.000 | 100.000 / 130.000 | 100.000 / 130.000 | 100.000 / 130.000"
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_420_6x4t_s_reduo_nos_cubos_420",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 420 6x4T (s/ redução nos cubos)",
      "modelo": "FH 420 6x4T (s/ redução nos cubos)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.500 | 33.500 / 42.000 | 41.000 / 42.000 | 48.000",
                "cmt": "100.000 | 100.000 / 130.000 | 100.000  / 150.000 | 150.000  / 225.000 "
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_460_6x4t_s_reduo_nos_cubos_460",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 460 6x4T (s/ redução nos cubos)",
      "modelo": "FH 460 6x4T (s/ redução nos cubos)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.500 | 33.500 / 42.000 | 41.000 / 42.000 | 48.000",
                "cmt": "100.000 | 100.000 / 130.000 | 100.000  / 150.000 | 150.000  / 225.000 "
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_500_6x4t_s_reduo_nos_cubos_500",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 500 6x4T (s/ redução nos cubos)",
      "modelo": "FH 500 6x4T (s/ redução nos cubos)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.500 | 33.500 / 42.000 | 41.000 / 42.000 | 48.000",
                "cmt": "100.000 | 100.000 / 130.000 | 100.000  / 150.000 | 150.000  / 225.000 "
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_540_6x4t_s_reduo_nos_cubos_500",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 540 6x4T (s/ redução nos cubos)",
      "modelo": "FH 540 6x4T (s/ redução nos cubos)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "28.500 | 33.500 / 42.000 | 41.000 / 42.000 | 48.000",
                "cmt": "100.000 | 100.000 / 130.000 | 100.000  / 150.000 | 150.000  / 225.000 "
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_fh_420_8x2r_420",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) FH 420 8x2R",
      "modelo": "FH 420 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "36.500",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_fh_460_8x2r_460",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) FH 460 8x2R",
      "modelo": "FH 460 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "36.500",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_fh_500_8x2r_500",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) FH 500 8x2R",
      "modelo": "FH 500 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "36.500",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_fh_540_8x2r_500",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) FH 540 8x2R",
      "modelo": "FH 540 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "36.500",
                "cmt": "60.000"
  }
},
{
  "id": "at2612_g_fh_420_8x2t_420",
    "nome": "AT2612 G FH 420 8x2T",
      "modelo": "FH 420 8x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.500 | 35.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_460_8x2t_460",
    "nome": "AT2612 G FH 460 8x2T",
      "modelo": "FH 460 8x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.500 | 35.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_500_8x2t_500",
    "nome": "AT2612 G FH 500 8x2T",
      "modelo": "FH 500 8x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.500 | 35.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fh_540_8x2t_500",
    "nome": "AT2612 G FH 540 8x2T",
      "modelo": "FH 540 8x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.500 | 35.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_420_8x4t_420",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 420 8x4T",
      "modelo": "FH 420 8x4T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "44.000",
                "cmt": "100.000"
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_460_8x4t_460",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 460 8x4T",
      "modelo": "FH 460 8x4T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "44.000",
                "cmt": "100.000"
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_500_8x4t_500",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 500 8x4T",
      "modelo": "FH 500 8x4T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "44.000",
                "cmt": "100.000"
  }
},
{
  "id": "at2612f_at2612f_aso_ulc_super_reduzida_ato2612f_aso_c_super_reduzida_fh_540_8x4t_540",
    "nome": "AT2612F | AT2612F + ASO-ULC (Super reduzida) | ATO2612F + ASO-C (Super reduzida) FH 540 8x4T",
      "modelo": "FH 540 8x4T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "44.000",
                "cmt": "100.000"
  }
},
{
  "id": "at2612_g_fm_380_4x2r_380",
    "nome": "AT2612 G FM 380 4x2R",
      "modelo": "FM 380 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D13K - 380",
      "potencia": "380 cv",
        "torque": "1815 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fm_380_4x2t_380",
    "nome": "AT2612 G FM 380 4x2T",
      "modelo": "FM 380 4x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D13K - 380",
      "potencia": "380 cv",
        "torque": "1815 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "20.500 | 20.500",
                "cmt": "60.000 | 70.000"
  }
},
{
  "id": "at2612_g_fm_380_6x2t_380",
    "nome": "AT2612 G FM 380 6x2T",
      "modelo": "FM 380 6x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D13K - 380",
      "potencia": "380 cv",
        "torque": "1815 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "27.500 | 27.500 | 27.500",
                "cmt": "60.000 | 70.000 | 70.000"
  }
},
{
  "id": "at2612_g_g_at2612_g_g_aso_ulc_super_reduzida_ato2612_g_aso_c_super_reduzida_fmx_380_4x4r_380",
    "nome": "AT2612 G G | AT2612 G G + ASO-ULC (Super reduzida) | ATO2612 G + ASO-C (Super reduzida) FMX 380 4x4R",
      "modelo": "FMX 380 4x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K380",
      "potencia": "380 cv",
        "torque": "1815 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "22.000 | 23.000",
                "cmt": "65.000 | 65.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fmx_380_6x4r_380",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FMX 380 6X4R",
      "modelo": "FMX 380 6X4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K380",
      "potencia": "380 cv",
        "torque": "1815 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.000 | 36.000 | 41.000 | 42.000",
                "cmt": "100.000 | 130.000 | 150.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fmx_420_6x4r_420",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FMX 420 6X4R",
      "modelo": "FMX 420 6X4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K420",
      "potencia": "420 cv",
        "torque": "2100 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.000 | 36.000 | 41.000 | 42.000",
                "cmt": "100.000 | 130.000 | 150.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fmx_460_6x4r_460",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FMX 460 6X4R",
      "modelo": "FMX 460 6X4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K460",
      "potencia": "460 cv",
        "torque": "2300 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.000 | 36.000 | 41.000 | 42.000",
                "cmt": "100.000 | 130.000 | 150.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fmx_500_6x4r_500",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FMX 500 6X4R",
      "modelo": "FMX 500 6X4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K500",
      "potencia": "500 cv",
        "torque": "2500 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.000 | 36.000 | 41.000 | 42.000",
                "cmt": "100.000 | 130.000 | 150.000"
  }
},
{
  "id": "at2612_g_at2612_g_aso_ulc_super_reduzida_ato2612_aso_c_super_reduzida_fmx_540_6x4r_540",
    "nome": "AT2612 G | AT2612 G + ASO-ULC (Super reduzida) | ATO2612 + ASO-C (Super reduzida) FMX 540 6X4R",
      "modelo": "FMX 540 6X4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "D13K540",
      "potencia": "540 cv",
        "torque": "2600 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "35.000 | 36.000 | 41.000 | 42.000",
                "cmt": "100.000 | 130.000 | 150.000"
  }
},
{
  "id": "caixa_manual_zt1309_i_shift_at2612_g_vm_290_4x2r_290",
    "nome": "Caixa Manual ZT1309 | I-Shift AT2612 G VM 290 4x2R",
      "modelo": "VM 290 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.500",
                "cmt": "36.000"
  }
},
{
  "id": "i_shift_at2612_g_vm_360_4x2r_360",
    "nome": " I-Shift AT2612 G VM 360 4x2R",
      "modelo": "VM 360 4x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.500",
                "cmt": "45.000"
  }
},
{
  "id": "zt1309_vm_290_4x2r_city_290",
    "nome": "ZT1309 VM 290 4x2R City",
      "modelo": "VM 290 4x2R City",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO ZT1309",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.500",
                "cmt": "35.000"
  }
},
{
  "id": "i_shift_at2612_g_vm_360_4x2t_360",
    "nome": "I-Shift  AT2612 G VM 360 4x2T",
      "modelo": "VM 360 4x2T",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "17.500",
                "cmt": "45.100"
  }
},
{
  "id": "caixa_manual_zt1309_i_shift_at2612_g_vm_290_6x2r_290",
    "nome": "Caixa Manual ZT1309 | I-Shift AT2612 G VM 290 6x2R",
      "modelo": "VM 290 6x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.700",
                "cmt": "35.000"
  }
},
{
  "id": "i_shift_at2612_g_vm_360_6x2r_360",
    "nome": " I-Shift AT2612 G VM 360 6x2R",
      "modelo": "VM 360 6x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.700",
                "cmt": "45.000"
  }
},
{
  "id": "caixa_manual_zt1309_vm_290_6x2r_city_290",
    "nome": "Caixa Manual ZT1309 VM 290 6x2R City",
      "modelo": "VM 290 6x2R City",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "24.700",
                "cmt": "35.000"
  }
},
{
  "id": "caixa_manual_zt1309_i_shift_at2612_g_vm_290_8x2r_290",
    "nome": "Caixa Manual ZT1309 | I-Shift AT2612 G VM 290 8x2R",
      "modelo": "VM 290 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "31.400",
                "cmt": "35.000"
  }
},
{
  "id": "i_shift_at2612_g_vm_360_8x2r_360",
    "nome": " I-Shift AT2612 G VM 360 8x2R",
      "modelo": "VM 360 8x2R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "31.400",
                "cmt": "45.100"
  }
},
{
  "id": "caixa_manual_zt1309_i_shift_at2612_g_vmx_290_6x4r_290",
    "nome": "Caixa Manual ZT1309 | I-Shift AT2612 G VMX 290 6x4R",
      "modelo": "VMX 290 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.700",
                "cmt": "35.000 | 40.000"
  }
},
{
  "id": "i_shift_at2612_g_vmx_360_6x4r_360",
    "nome": " I-Shift AT2612 G VMX 360 6x4R",
      "modelo": "VMX 360 6x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "26.700",
                "cmt": "57.000 | 63.000"
  }
},
{
  "id": "i_shift_at2612_g_vmx_360_6x4r_max_360",
    "nome": "I-Shift AT2612 G VMX 360 6x4R MAX",
      "modelo": "VMX 360 6x4R MAX",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "34.000",
                "cmt": "57.000 | 63.000"
  }
},
{
  "id": "caixa_manual_zt1309_i_shift_at2612_g_vmx_290_8x4r_290",
    "nome": "Caixa Manual ZT1309 | I-Shift AT2612 G VMX 290 8x4R",
      "modelo": "VMX 290 8x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.400",
                "cmt": "35.000 | 40.000"
  }
},
{
  "id": "i_shift_at2612_g_vmx_360_8x4r_360",
    "nome": " I-Shift AT2612 G VMX 360 8x4R",
      "modelo": "VMX 360 8x4R",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 360",
      "potencia": "360 cv",
        "torque": "1400 Nm",
          "transmissao": "Automatizada (12 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.400",
                "cmt": "57.000 | 63.000"
  }
},
{
  "id": "manual_zt1309_vmx_290_8x4r_light_mixer_290",
    "nome": "Manual ZT1309 VMX 290 8x4R Light Mixer",
      "modelo": "VMX 290 8x4R Light Mixer",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "VOLVO D8K - 290",
      "potencia": "290 cv",
        "torque": "1050 Nm",
          "transmissao": "Sincronizada (9 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "33.400",
                "cmt": "35.000"
  }
},
{
  "id": "_e_transit_chassi_extra_longo_425_269",
    "nome": " E-Transit Chassi - Extra Longo 425",
      "modelo": "E-Transit Chassi - Extra Longo 425",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Motor 198kW BorgWarner",
      "potencia": "269 cv",
        "torque": "430 Nm",
          "transmissao": "Automática (1 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.250",
                "cmt": "N/A"
  }
},
{
  "id": "_transit_l3h3_longo_teto_alto_165_165",
    "nome": " Transit - L3H3 Longo Teto Alto - 165",
      "modelo": "Transit - L3H3 Longo Teto Alto - 165",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Diesel 2.0 EcoBlue",
      "potencia": "165 cv",
        "torque": "390 Nm",
          "transmissao": "Automática (10 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "N/A"
  }
},
{
  "id": "_transit_l3h3_longo_teto_alto_170_170",
    "nome": " Transit - L3H3 Longo Teto Alto - 170",
      "modelo": "Transit - L3H3 Longo Teto Alto - 170",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Diesel 2.0 EcoBlue",
      "potencia": "170 cv",
        "torque": "390 Nm",
          "transmissao": "Automática (Manual marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "N/A"
  }
},
{
  "id": "_transit_l4h1_extra_longa_teto_baixo_rodado_duplo_165",
    "nome": " Transit - L4H1 - Extra Longa - Teto Baixo - Rodado Duplo",
      "modelo": "Transit - L4H1 - Extra Longa - Teto Baixo - Rodado Duplo",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "Motor Diesel 2.0 EcoBlue",
      "potencia": "165 cv",
        "torque": "390 Nm",
          "transmissao": "Manual (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.700",
                "cmt": "N/A"
  }
},
{
  "id": "zf_8hp_daily_45_180_hi_matic_180",
    "nome": "ZF 8HP DAILY 45-180 HI-MATIC",
      "modelo": "DAILY 45-180 HI-MATIC",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": " FPT / F1C Max ",
      "potencia": "180 cv",
        "torque": "430 Nm",
          "transmissao": "Manual - Cabo (8 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "6.500"
  }
},
{
  "id": "_e_sprinter_truck_420_150",
    "nome": " E-Sprinter Truck 420",
      "modelo": "E-Sprinter Truck 420",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "420",
      "potencia": "150 cv",
        "torque": "400 Nm",
          "transmissao": "Automática (Relação marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.250",
                "cmt": "5.000"
  }
},
{
  "id": "zf_6s_480_sprinter_315_cdi_street_9m105m_150",
    "nome": "ZF- 6S 480 Sprinter - 315 CDI Street (9m/10,5m)",
      "modelo": "Sprinter - 315 CDI Street (9m/10,5m)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OM 654 CDI | Turbo | Diesel ",
      "potencia": "150 cv",
        "torque": "340 Nm",
          "transmissao": "Mecânica (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "N/A"
  }
},
{
  "id": "zf_6s_480_sprinter_417_cdi_9m105m_170",
    "nome": "ZF- 6S 480 Sprinter - 417 CDI (9m/10,5m)",
      "modelo": "Sprinter - 417 CDI (9m/10,5m)",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OM 654 CDI | Turbo |",
      "potencia": "170 cv",
        "torque": "400 Nm",
          "transmissao": "Mecânica (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.430",
                "cmt": "N/A"
  }
},
{
  "id": "zf_6s_480_sprinter_truck_315_cdi_street_150",
    "nome": "ZF- 6S 480 Sprinter Truck - 315 CDI Street",
      "modelo": "Sprinter Truck - 315 CDI Street",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OM 654 CDI ",
      "potencia": "150 cv",
        "torque": "340 Nm",
          "transmissao": "Mecânica (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "N/A"
  }
},
{
  "id": "zf_6s_480_sprinter_truck_417_cdi_e_517_cdi_170",
    "nome": "ZF- 6S 480 Sprinter Truck - 417 CDI e 517 CDI",
      "modelo": "Sprinter Truck - 417 CDI e 517 CDI",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "OM 654 CDI ",
      "potencia": "170 cv",
        "torque": "400 Nm",
          "transmissao": "Mecânica (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "4.100 | 5.000 | 5.000",
                "cmt": "N/A"
  }
},
{
  "id": "_master_chassi_150",
    "nome": " Master Chassi",
      "modelo": "Master Chassi",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "M9T GEN6 AdBlue",
      "potencia": "150 cv",
        "torque": "385 Nm",
          "transmissao": "Mecânico (PF6) (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500",
                "cmt": "2.000"
  }
},
{
  "id": "_master_furgo_150",
    "nome": " Master Furgão",
      "modelo": "Master Furgão",
        "imagem": "Imagem",
          "resumoVantagem": "Ponto forte do veículo a ser adicionado.",
            "fichaTecnica": {
    "motor": "M9T GEN6 AdBlue",
      "potencia": "150 cv",
        "torque": "385 Nm",
          "transmissao": "Mecânico (PF6) (6 marchas)",
            "pesoEmOrdemDeMarcha": "N/A - Conferir Coluna",
              "pbtTecnico": "3.500 | 3.500 | 3.500",
                "cmt": "2.000 | 2.000 | 2.000"
  }
}
];
