// convertData.js - VERSÃO OTIMIZADA E MELHORADA
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// =======================================================
// === CONFIGURAÇÃO ===
// =======================================================
const INPUT_CSV_FILE = 'dados_veiculos.csv'; 
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

/**
 * Cria um ID único e limpo a partir do nome do veículo
 */
const slugify = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')                    // Normaliza caracteres Unicode
        .replace(/[\u0300-\u036f]/g, '')     // Remove acentos
        .trim()
        .replace(/[^\w\s-]/g, '')            // Remove caracteres especiais
        .replace(/[\s_-]+/g, '_')            // Substitui espaços por _
        .replace(/^_+|_+$/g, '');            // Remove _ do início/fim
};

/**
 * Limpa caracteres estranhos e problemas de encoding
 */
const cleanText = (text) => {
    if (!text || text === '') return '';
    
    return text
        .replace(/ï¿½/g, '')                 // Remove caracteres de encoding quebrado
        .replace(/\r?\n|\r/g, ' ')           // Remove quebras de linha
        .replace(/\s\s+/g, ' ')              // Remove espaços múltiplos
        .replace(/[^\x20-\x7E\u00C0-\u00FF]/g, '') // Mantém apenas ASCII estendido
        .trim();
};

/**
 * Extrai o primeiro valor numérico de uma string
 */
const extractFirstNumber = (value) => {
    if (!value || value === '') return '';
    
    // Remove espaços e pega o primeiro valor antes de | ou /
    const firstValue = value.toString().split(/[\s|/]/)[0].trim();
    
    // Remove pontos de milhar mas mantém vírgulas decimais
    return firstValue.replace(/\./g, '');
};

/**
 * Limpa e formata a transmissão
 */
const formatTransmission = (acionamento, nMarchas) => {
    const tipo = cleanText(acionamento || 'Manual').split('|')[0].trim();
    const marchas = extractFirstNumber(nMarchas || '0');
    
    if (marchas && marchas !== '0') {
        return `${tipo} (${marchas} marchas)`;
    }
    return tipo;
};

/**
 * Valida se o veículo tem dados mínimos necessários
 */
const isValidVehicle = (row) => {
    return row.modelo && 
           row.fabricante && 
           row.cv && 
           row.nm;
};

// =======================================================
// === PROCESSAMENTO PRINCIPAL ===
// =======================================================

const VeiculosData = [];
let skippedCount = 0;
let imageCounter = 1; // Contador para as imagens

// Garante que a pasta 'data' existe
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

console.log('🚀 Iniciando conversão do CSV...\n');

fs.createReadStream(INPUT_CSV_FILE, { encoding: 'utf8' })
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
        
        // Valida se tem dados mínimos
        if (!isValidVehicle(row)) {
            skippedCount++;
            return;
        }

        // Limpeza dos dados
        const marca = cleanText(row.marca);
        const modelo = cleanText(row.modelo);
        const potenciaCv = extractFirstNumber(row.cv);
        const torqueNm = extractFirstNumber(row.nm);
        const fabricanteMotor = cleanText(row.fabricante);
        const pbtTecnico = extractFirstNumber(row.pbtTecnico);
        const cmt = extractFirstNumber(row.cmt);

        // Monta o objeto do veículo
        const veiculo = {
            id: slugify(`${marca}_${modelo}_${potenciaCv}`),
            nome: `${marca} ${modelo}`,
            modelo: modelo,
            imagem: `v${imageCounter}.png`, // Nome sequencial da imagem
            
            fichaTecnica: {
                motor: fabricanteMotor,
                potencia: `${potenciaCv} cv`,
                torque: `${torqueNm} Nm`,
                transmissao: formatTransmission(row.acionamento, row.nMarchas),
                pesoEmOrdemDeMarcha: row.pesoEmOrdemDeMarcha 
                    ? extractFirstNumber(row.pesoEmOrdemDeMarcha) 
                    : 'N/A',
                pbtTecnico: pbtTecnico || 'N/A',
                cmt: cmt || 'N/A',
            }
        };

        VeiculosData.push(veiculo);
        imageCounter++; // Incrementa o contador
    })
    .on('end', () => {
        // Gera o arquivo TypeScript
        const tsContent = `// data/veiculos.ts - ARQUIVO GERADO AUTOMATICAMENTE
// Total de veículos: ${VeiculosData.length}
// Gerado em: ${new Date().toLocaleString('pt-BR')}

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
  fichaTecnica: FichaTecnica;
}

export const VeiculosData: Veiculo[] = ${JSON.stringify(VeiculosData, null, 2)};
`;

        // Salva o arquivo
        fs.writeFileSync(OUTPUT_TS_FILE, tsContent, 'utf8');
        
        // Resumo final
        console.log('═══════════════════════════════════════════════════');
        console.log('✅ CONVERSÃO CONCLUÍDA COM SUCESSO!');
        console.log('═══════════════════════════════════════════════════');
        console.log(`📊 Veículos processados: ${VeiculosData.length}`);
        console.log(`⚠️  Linhas ignoradas: ${skippedCount}`);
        console.log(`📁 Arquivo gerado: ${OUTPUT_TS_FILE}`);
        console.log('═══════════════════════════════════════════════════\n');
        
        // Mostra amostra dos primeiros 3 veículos
        console.log('🔍 Amostra dos veículos processados:');
        VeiculosData.slice(0, 3).forEach((v, i) => {
            console.log(`\n${i + 1}. ${v.nome}`);
            console.log(`   ID: ${v.id}`);
            console.log(`   Motor: ${v.fichaTecnica.motor}`);
            console.log(`   Potência: ${v.fichaTecnica.potencia}`);
        });
        console.log('\n');
    })
    .on('error', (err) => {
        console.error('❌ ERRO ao processar o CSV:', err.message);
        process.exit(1);
    });