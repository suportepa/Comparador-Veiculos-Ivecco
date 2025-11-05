// convertData.js - VERSÃO COM LEITURA MAIS ROBUSTA E SEM FILTRO
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
    if (!text) return 'id-vazio'; // Garante um ID de fallback
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '_');
};

/**
 * Função para limpar caracteres estranhos que persistem após a conversão UTF-8.
 * @param {string} text - Texto do CSV.
 * @returns {string} Texto com substituições forçadas.
 */
const cleanStrangeChars = (text) => {
    if (!text) return '';
    return text
        .replace(/ï¿½/g, '')  
        .replace(/ï¿½ï¿½/g, '')
        .replace(/\r?\n|\r/g, ' ') 
        .replace('½', ' 1/2') 
        .replace('mï¿½ï¿½', 'm')
        .replace(/\s\s+/g, ' ')
        .trim();
};

/**
 * Função para limpar e retornar o primeiro valor numérico de uma string.
 */
const cleanNumericValue = (value) => {
    if (!value) return '';
    const firstValue = value.toString().split(/[\s|]/)[0]; 
    return firstValue.trim().replace(/\./g, ''); 
};


const VeiculosData = [];

// Garante que a pasta 'data' exista
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

// ATENÇÃO: Mudança na codificação (Tentativa de latin1/ISO-8859-1)
fs.createReadStream(INPUT_CSV_FILE, { encoding: 'latin1' }) 
    .pipe(csv({ separator: ';' })) 
    .on('data', (row) => {
        
        // Aplica a limpeza de caracteres estranhos nas colunas relevantes
        const modeloVeiculo = cleanStrangeChars(row.modelo);
        const acionamento = cleanStrangeChars(row.acionamento);
        const nMarchas = cleanStrangeChars(row.nMarchas);
        const cilindradaLimpa = cleanStrangeChars(row.cilindrada);
        const injecaoLimpa = cleanStrangeChars(row.injecao);
        const faixaTorqueLimpa = cleanStrangeChars(row.faixaTorque);
        
        // Limpeza dos dados de potência e torque (numérico)
        // Se a limpeza falhar, teremos N/A, mas a linha não será descartada
        const potenciaCv = cleanNumericValue(row.cv);
        const torqueNm = cleanNumericValue(row.nm);
        
        const fabricanteMotor = row.fabricante; 
        
        // Limpeza da Transmissão (Texto)
        const acionamentoLimpo = (acionamento || 'N/A').split('|')[0].trim();
        const nMarchasLimpo = (nMarchas || '?').split(' ')[0].trim();
        
        // 🛑 REMOÇÃO DO FILTRO: Não descarta linhas vazias, apenas usa N/A
        // if (!modeloVeiculo || !potenciaCv || !torqueNm || !fabricanteMotor) {
        //     return; 
        // }

        // Mapeamento e transformação dos dados
        const veiculo = {
            // Garante que o ID não falhe se o modelo/CV estiver vazio
            id: slugify(`${row.marca}_${modeloVeiculo}_${potenciaCv}`), 
            nome: `${row.marca || 'N/A'} ${modeloVeiculo || 'N/A'}`, 
            modelo: modeloVeiculo || 'N/A', 
            imagem: row.imagem || "https://via.placeholder.com/300x200?text=Veiculo", 
            resumoVantagem: cleanStrangeChars(row.resumoVantagem) || "Ponto forte do veículo a ser adicionado.", 
            
            fichaTecnica: {
                // Características do Motor
                motor: fabricanteMotor || "N/A", 
                injecao: injecaoLimpa || "N/A", 
                cilindrada: cilindradaLimpa || "N/A", 
                potencia: potenciaCv ? `${potenciaCv} cv` : "N/A", // Se o valor numérico falhar, usa N/A
                torque: torqueNm ? `${torqueNm} Nm` : "N/A", // Se o valor numérico falhar, usa N/A
                faixaTorque: faixaTorqueLimpa || "N/A", 
                padraoEmissao: cleanStrangeChars(row.padraoEmissao) || "N/A", 
                
                // Transmissão
                transmissao: `${acionamentoLimpo} (${nMarchasLimpo} marchas)`, 
                
                // Pesos
                pesoEmOrdemDeMarcha: row.total || "N/A", 
                pbtTecnico: row.pbtTecnico || "N/A", 
                pbtCombinado: row.cmt || "N/A", 
                cmt: row.cmt || "N/A", 
                
                // Fluidos
                tanqueCombustivel: cleanStrangeChars(row.tanqueCombustivel) || "N/A", 
                tanqueArla: row.tanqueArla || "N/A", 
                carter: row.carter || "N/A", 
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
    injecao: string;
    cilindrada: string;
    potencia: string;
    torque: string;
    faixaTorque: string;
    padraoEmissao: string;
    transmissao: string;
    pesoEmOrdemDeMarcha: string;
    pbtTecnico: string;
    pbtCombinado: string;
    cmt: string; 
    tanqueCombustivel: string;
    tanqueArla: string;
    carter: string;
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