// convertData.js - CÓDIGO DE DEBUG
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const INPUT_CSV_FILE = 'dados_veiculos.csv';
const OUTPUT_TS_FILE = path.join('data', 'veiculos.ts');

const VeiculosData = [];
let headerPrinted = false;
let ignoredLinesCount = 0;

if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
}

fs.createReadStream(INPUT_CSV_FILE)
    .pipe(csv({ separator: ';' }))
    .on('data', (row) => {
        // --- INÍCIO DO DEBUG ---
        if (!headerPrinted) {
            console.log("----------------------------------------------------");
            console.log("PRIMEIRA LINHA DE DADOS LIDA (CAMPOS LIDOS PELO SCRIPT):");
            console.log(row);
            console.log("----------------------------------------------------");
            headerPrinted = true;
        }
        // --- FIM DO DEBUG ---
        
        // Colunas essenciais para o comparador (usando a função cleanValue que definimos antes)
        const potenciaCv = (row.cv || '').split(/[\s|]/)[0].trim().replace('.', '');
        const torqueNm = (row.nm || '').split(/[\s|]/)[0].trim().replace('.', '');
        const modeloVeiculo = row.modelo;
        const fabricanteMotor = row.Fabricante;
        
        if (!modeloVeiculo || !potenciaCv || !torqueNm || !fabricanteMotor) {
            ignoredLinesCount++;
            return; 
        }

        // Se passar pelo filtro (NÃO VAI RODAR A PARTE DE VEICULOSDATA AGORA, SÓ ESTAMOS DEBUGANDO)
        VeiculosData.push({}); // Apenas adiciona um objeto vazio para contar
    })
    .on('end', () => {
        console.log('----------------------------------------------------');
        console.log(`Linhas Ignoradas: ${ignoredLinesCount}`);
        console.log(`Total de Linhas (Apenas Contagem): ${VeiculosData.length}`);
        console.log('----------------------------------------------------');
        
        // Para evitar erros, vamos garantir que um arquivo de saída seja gerado
        fs.writeFileSync(OUTPUT_TS_FILE, `export const VeiculosData = [];`);
    })
    .on('error', (err) => {
        console.error("ERRO ao processar o CSV:", err.message);
    });