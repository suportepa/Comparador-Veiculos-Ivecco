// convertData.js
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// =======================================================
// === CONFIGURAÇÃO: NOME DO ARQUIVO CSV DE ENTRADA ===
// =======================================================
// Certifique-se de que seu arquivo CSV esteja na raiz do projeto
const INPUT_CSV_FILE = 'dados_veiculos.csv'; // MANTENHA ESTE NOME

// Nome do arquivo de saída (substitui o seu veiculos.ts)
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

/**
 * Função para criar um ID limpo e único a partir do nome do veículo.
 * @param {string} text - Nome do veículo.
 * @returns {string} ID formatado.
 */
const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_');
};

const VeiculosData = [];

// Garante que a pasta 'data' exista
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

fs.createReadStream(INPUT_CSV_FILE)
    .pipe(csv())
    .on('data', (row) => {
        // As colunas essenciais para o comparador:
        const potenciaCv = row.cv;
        const torqueNm = row.nm;
        const modeloVeiculo = row.modelo;
        const fabricanteMotor = row.Fabricante;
        
        // Ignora linhas que não têm o modelo ou dados de motor
        if (!modeloVeiculo || !potenciaCv || !torqueNm || !fabricanteMotor) {
            // console.warn("Linha ignorada por falta de dados essenciais:", row); // Descomente para debug
            return; 
        }

        // Mapeamento e transformação dos dados do CSV para a interface Veiculo do TypeScript
        const veiculo = {
            id: slugify(modeloVeiculo), // Ex: 'cf_fac_8x2'
            nome: `${row.marca} ${modeloVeiculo}`, // Ex: 'DAF CF FAC 8x2'
            modelo: modeloVeiculo, // Usando o modelo como nome do veículo
            imagem: row.imagem || "https://via.placeholder.com/300x200?text=Iveco", // Link da imagem
            resumoVantagem: row.resumoVantagem || "Ponto forte do veículo a ser adicionado.", // Sua coluna de resumo
            
            fichaTecnica: {
                motor: fabricanteMotor, // Coluna 'Fabricante'
                potencia: `${potenciaCv} cv`, // Coluna 'cv'
                torque: `${torqueNm} Nm`, // Coluna 'nm'
                
                // Combinação das colunas 'acionamento' e 'nMarchas'
                transmissao: `${row.acionamento} (${row.nMarchas} marchas)`, 
                
                // Coluna 'Peso Em Ordem De Marcha' não estava clara, deixando N/A.
                pesoEmOrdemDeMarcha: "N/A - Conferir Coluna", 
                
                pbtTecnico: row.pbtTecnico || "N/A", // Coluna 'pbtTecnico'
                cmt: row.cmt || "N/A", // Coluna 'cmt'
            }
        };

        VeiculosData.push(veiculo);
    })
    .on('end', () => {
        // Estrutura do arquivo TypeScript de saída
        const tsContent = `
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

export const VeiculosData: Veiculo[] = ${JSON.stringify(VeiculosData, null, 2)};
`;

        // Escreve o novo conteúdo no veiculos.ts
        fs.writeFileSync(OUTPUT_TS_FILE, tsContent);
        
        console.log('----------------------------------------------------');
        console.log(`✅ Sucesso! ${VeiculosData.length} veículos foram processados.`);
        console.log(`Arquivo ${OUTPUT_TS_FILE} gerado com sucesso!`);
        console.log('----------------------------------------------------');
    })
    .on('error', (err) => {
        console.error("ERRO ao processar o CSV:", err.message);
    });