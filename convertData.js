// convertData.js - VERSÃO FINAL E CORRIGIDA
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const INPUT_CSV_FILE = 'dados_veiculos.csv';
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

const slugify = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '_');
const cleanValue = (value) => {
    if (!value) return '';
    // Pega o que estiver antes do primeiro pipe (|) ou espaço.
    return String(value).split(/[\s|]/)[0].trim().replace(/\./g, ''); // Remove pontos de milhar
};

const VeiculosData = [];

if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

fs.createReadStream(INPUT_CSV_FILE)
    // USANDO PONTO E VÍRGULA COMO SEPARADOR
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
        // --- EXTRAÇÃO E LIMPEZA DOS DADOS ESSENCIAIS ---
        
        // Usamos row.modelo, row.cv, row.nm, e row.fabricante que parecem ter dados corretos
        const potenciaCv = cleanValue(row.cv);
        const torqueNm = cleanValue(row.nm);
        const modeloVeiculo = row.modelo;
        const nomeMotor = row.fabricante; // A coluna 'fabricante' tem o nome do motor (Ex: PACCAR PX-7)
        
        // VALIDAÇÃO: Se algum dos campos cruciais estiver vazio, a linha é ignorada.
        if (!modeloVeiculo || !potenciaCv || !torqueNm || !nomeMotor) {
            return; 
        }
        
        // A MARCA (DAF/IVECO) ESTAVA NA COLUNA 'marca', que parece estar vazia ou com valor errado no primeiro item.
        // Vamos usar a primeira palavra do nome do veículo, se necessário, mas primeiro tentamos a coluna 'marca'.
        const marca = row.marca && row.marca.length > 0 ? row.marca : 'IVECO/DAF'; 
        
        // --- MAPEAR PARA O FORMATO FINAL ---
        const veiculo = {
            id: slugify(`${marca}_${modeloVeiculo}_${potenciaCv}`), 
            nome: `${marca} ${modeloVeiculo}`, 
            modelo: modeloVeiculo, 
            imagem: row.imagem || "https://via.placeholder.com/300x200?text=Iveco", 
            resumoVantagem: row.resumoVantagem || "Ponto forte do veículo a ser adicionado.", 
            
            fichaTecnica: {
                motor: nomeMotor, 
                potencia: `${potenciaCv} cv`, 
                torque: `${torqueNm} Nm`, 
                
                // Combinação das colunas de transmissão
                transmissao: `${row.acionamento || 'N/A'} (${row.nMarchas || '?'} marchas)`, 
                
                // Mapeamento das colunas de peso
                pesoEmOrdemDeMarcha: row.pesoEmOrdemDeMarcha || "N/A - Conferir", // Ajuste se seu cabeçalho tem outro nome
                pbtTecnico: row.pbtTecnico || "N/A", 
                cmt: row.cmt || "N/A", 
            }
        };

        VeiculosData.push(veiculo);
    })
    .on('end', () => {
        const tsContent = `
// data/veiculos.ts - ARQUIVO GERADO AUTOMATICAMENTE (Total: ${VeiculosData.length} veículos)

// ... (Resto do código de interface e export)
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