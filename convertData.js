// convertData.js - VERSÃO FINAL CORRIGIDA COM LIMPEZA DE CARACTERES
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// =======================================================
// === CONFIGURAÇÃO: NOME DO ARQUIVO CSV DE ENTRADA ===
// =======================================================
const INPUT_CSV_FILE = 'dados_veiculos.csv'; 
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

/**
 * Função para criar um ID limpo e único a partir do nome do veículo.
 */
const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_');
};

/**
 * Função para limpar caracteres estranhos que persistem após a conversão UTF-8.
 * Ela substitui códigos de erro comuns (como os que representam frações ou acentos) por caracteres legíveis.
 * @param {string} text - Texto do CSV.
 * @returns {string} Texto com substituições forçadas.
 */
const cleanStrangeChars = (text) => {
    if (!text) return '';
    // Substituições comuns para códigos de erro (ajuste conforme necessário)
    return text
        // Tenta substituir o código feio (que pode ser um acento ou símbolo) por um espaço ou vazio
        .replace(/ï¿½/g, '')  
        .replace(/ï¿½ï¿½/g, '')
        .replace(/\r?\n|\r/g, ' ') // Remove quebras de linha
        // Frações (ex: 1/2) - pode ser que o código esteja representando um desses
        .replace('½', ' 1/2') 
        // Se a letra 'm' no seu print estava estranha, pode ser um 'm' com acento ou símbolo:
        .replace('mï¿½ï¿½', 'm')
        // Limpa múltiplos espaços após as substituições
        .replace(/\s\s+/g, ' ')
        .trim();
};

/**
 * Função para limpar e retornar o primeiro valor numérico de uma string.
 */
const cleanNumericValue = (value) => {
    if (!value) return '';
    // Pega o que estiver antes do primeiro espaço ou caractere especial (como "|")
    const firstValue = value.toString().split(/[\s|]/)[0]; 
    return firstValue.trim().replace(/\./g, ''); // Remove todos os pontos (milhar)
};


const VeiculosData = [];

// Garante que a pasta 'data' exista
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

// Usando encoding: 'utf8'. O CSV DEVE estar salvo como UTF-8.
fs.createReadStream(INPUT_CSV_FILE, { encoding: 'utf8' })
    .pipe(csv({ separator: ';' })) 
    .on('data', (row) => {
        
        // Aplica a limpeza de caracteres estranhos nas colunas relevantes
        const modeloVeiculo = cleanStrangeChars(row.modelo);
        const acionamento = cleanStrangeChars(row.acionamento);
        const nMarchas = cleanStrangeChars(row.nMarchas);

        // Limpeza dos dados de potência e torque (numérico)
        const potenciaCv = cleanNumericValue(row.cv);
        const torqueNm = cleanNumericValue(row.nm);
        
        // Corrigido para 'fabricante' (minúsculo)
        const fabricanteMotor = row.fabricante; 
        
        // Limpeza da Transmissão (Texto)
        const acionamentoLimpo = (acionamento || 'N/A').split('|')[0].trim();
        const nMarchasLimpo = (nMarchas || '?').split(' ')[0].trim();
        
        // Filtro de linha: só processa se tiver o modelo, CV, NM e Fabricante.
        if (!modeloVeiculo || !potenciaCv || !torqueNm || !fabricanteMotor) {
            return; 
        }

        // Mapeamento e transformação dos dados
        const veiculo = {
            id: slugify(`${row.marca}_${modeloVeiculo}_${potenciaCv}`), 
            nome: `${row.marca} ${modeloVeiculo}`, 
            modelo: modeloVeiculo, 
            imagem: row.imagem || "https://via.placeholder.com/300x200?text=Iveco", 
            resumoVantagem: cleanStrangeChars(row.resumoVantagem) || "Ponto forte do veículo a ser adicionado.", 
            
            fichaTecnica: {
                motor: fabricanteMotor, 
                potencia: `${potenciaCv} cv`, 
                torque: `${torqueNm} Nm`, 
                
                // Combinação das colunas 'acionamento' e 'nMarchas' após limpeza
                transmissao: `${acionamentoLimpo} (${nMarchasLimpo} marchas)`, 
                
                // Os campos abaixo usam os dados brutos (se precisar, aplique cleanStrangeChars aqui também)
                pesoEmOrdemDeMarcha: "N/A - Conferir Coluna", 
                pbtTecnico: row.pbtTecnico || "N/A", 
                cmt: row.cmt || "N/A", 
            }
        };

        VeiculosData.push(veiculo);
    })
    .on('end', () => {
        // Estrutura do arquivo TypeScript de saída
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