// convertData.js - VERSÃO CORRIGIDA PARA SEPARADOR DE PONTO E VÍRGULA (;)
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// =======================================================
// === CONFIGURAÇÃO: NOME DO ARQUIVO CSV DE ENTRADA ===
// =======================================================
const INPUT_CSV_FILE = 'dados_veiculos.csv'; // MANTENHA ESTE NOME

// Nome do arquivo de saída (substitui o seu veiculos.ts)
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

/**
 * Função para criar um ID limpo e único a partir do nome do veículo.
 * @param {string} text - Nome do nome do veículo.
 * @returns {string} ID formatado.
 */
const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_');
};

/**
 * Função para limpar e retornar o primeiro valor de uma string com múltiplos valores (ex: "1.200 | 1.500")
 * @param {string} value - Valor da célula.
 * @returns {string} O primeiro valor limpo.
 */
const cleanValue = (value) => {
    if (!value) return '';
    // Pega o que estiver antes do primeiro espaço ou caractere especial
    const firstValue = value.split(/[\s|]/)[0]; 
    return firstValue.trim().replace('.', ''); // Remove o ponto (milhar)
};

const VeiculosData = [];

// Garante que a pasta 'data' exista
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

fs.createReadStream(INPUT_CSV_FILE)
    // ATENÇÃO: MUDANÇA AQUI! USANDO PONTO E VÍRGULA COMO SEPARADOR
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
        // Limpeza dos dados de potência e torque que podem ter múltiplos valores ou caracteres especiais
        const potenciaCv = cleanValue(row.cv);
        const torqueNm = cleanValue(row.nm);
        const modeloVeiculo = row.modelo;
        const fabricanteMotor = row.Fabricante;
        
        // Ignora linhas que não têm o modelo ou dados de motor limpos
        if (!modeloVeiculo || !potenciaCv || !torqueNm || !fabricanteMotor) {
            // Se quiser ver as linhas que estão sendo ignoradas, descomente a linha abaixo:
            // console.warn("Linha ignorada por falta de dados essenciais:", row); 
            return; 
        }

        // Mapeamento e transformação dos dados
        const veiculo = {
            id: slugify(`${row.marca}_${modeloVeiculo}_${potenciaCv}`), 
            nome: `${row.marca} ${modeloVeiculo}`, 
            modelo: modeloVeiculo, 
            imagem: row.imagem || "https://via.placeholder.com/300x200?text=Iveco", 
            resumoVantagem: row.resumoVantagem || "Ponto forte do veículo a ser adicionado.", 
            
            fichaTecnica: {
                motor: fabricanteMotor, 
                potencia: `${potenciaCv} cv`, 
                torque: `${torqueNm} Nm`, 
                
                // Mapeamento das colunas de transmissão
                // Nota: A coluna 'acionamento' tem valores longos como 'Manual | Automatizada | Direct Drive'
                transmissao: `${row.acionamento || 'N/A'} (${row.nMarchas || '?'} marchas)`, 
                
                // Os dados de peso/PBT/CMT ainda precisam ser ajustados manualmente no seu CSV se necessário, 
                // mas estamos usando as colunas nomeadas que você indicou:
                pesoEmOrdemDeMarcha: "N/A - Conferir Coluna", // Coluna "peso" não está clara nas colunas que mapeamos.
                pbtTecnico: row.pbtTecnico || "N/A", 
                cmt: row.cmt || "N/A", 
            }
        };

        VeiculosData.push(veiculo);
    })
    .on('end', () => {
        const tsContent = `
// data/veiculos.ts - ARQUIVO GERADO AUTOMATICAMENTE (Total: ${VeiculosData.length} veículos)

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

        fs.writeFileSync(OUTPUT_TS_FILE, tsContent);
        
        console.log('----------------------------------------------------');
        console.log(`✅ Sucesso! ${VeiculosData.length} veículos foram processados.`);
        console.log(`Arquivo ${OUTPUT_TS_FILE} gerado com sucesso!`);
        console.log('----------------------------------------------------');
    })
    .on('error', (err) => {
        console.error("ERRO ao processar o CSV:", err.message);
    });