import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

// --- CAMINHO CORRIGIDO: Voltamos duas pastas (app e (tabs)) para acessar 'data' ---
import { VeiculosData, Veiculo, FichaTecnica } from '../../data/veiculos';

// Largura da tela para ajudar na responsividade
const { width } = Dimensions.get('window');

// --- 1. Componente para Exibir a Ficha Técnica ---
interface ComparacaoProps {
  veiculo1: Veiculo;
  veiculo2: Veiculo;
}

// 1.1. Componente VencedorText (Corrigido para aceitar 'children')
interface VencedorTextProps {
  vencedor: 'vencedor1' | 'vencedor2' | 'neutral';
  isVeiculo1: boolean;
  children: React.ReactNode; // Adicionando a tipagem de children
}

const VencedorText: React.FC<VencedorTextProps> = ({ vencedor, isVeiculo1, children }) => {
  let style = {};
  if (vencedor === 'vencedor1' && isVeiculo1) {
    style = styles.vencedorText;
  } else if (vencedor === 'vencedor2' && !isVeiculo1) {
    style = styles.vencedorText;
  } else if (vencedor !== 'neutral') {
    style = styles.perdedorText;
  }
  return <Text style={[styles.specValue, style]}>{children}</Text>;
};

// 1.2. Lógica de Comparação e Container

const ComparacaoContainer: React.FC<ComparacaoProps> = ({ veiculo1, veiculo2 }) => {
  // Garantimos que as chaves da ficha técnica são strings para usar em Object.keys
  const specsKeys = Object.keys(veiculo1.fichaTecnica) as (keyof FichaTecnica)[];

  const getVencedor = (key: keyof FichaTecnica) => {
    const val1 = veiculo1.fichaTecnica[key];
    const val2 = veiculo2.fichaTecnica[key];

    // O TS não consegue inferir que val1/val2 são strings em tempo de execução
    if (typeof val1 !== 'string' || typeof val2 !== 'string') return 'neutral';
    
    // Tenta extrair apenas números para uma comparação numérica (CORRIGIDO: garante que val1 e val2 são strings)
    const num1 = parseFloat(val1.replace(/[^\d.]/g, ''));
    const num2 = parseFloat(val2.replace(/[^\d.]/g, ''));

    if (isNaN(num1) || isNaN(num2) || num1 === num2) {
      return 'neutral';
    }

    return num1 > num2 ? 'vencedor1' : 'vencedor2';
  };

  // 1.3. Componente de Resumo
  const ResumeComponent: React.FC<{ veiculo: Veiculo }> = ({ veiculo }) => (
    <View style={styles.resumeBox}>
      <Text style={styles.resumeTitle}>Resumo da Vantagem</Text>
      <Text style={styles.resumeText}>
        {/* CORRIGIDO: Tipagem da função de replace para evitar 'any' */}
        {veiculo.resumoVantagem.replace(/\*\*(.*?)\*\*/g, (match: string, p1: string) => p1.toUpperCase())}
      </Text>
    </View>
  );

  return (
    <View style={styles.comparisonContainer}>
      <Text style={styles.sectionTitle}>Ficha Técnica Comparada</Text>

      {/* Tabela de Comparação */}
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>{veiculo1.nome}</Text>
          <Text style={styles.headerText}>Especificação</Text>
          <Text style={styles.headerText}>{veiculo2.nome}</Text>
        </View>

        {specsKeys.map((key) => {
          const vencedor = getVencedor(key);
          const keyLabel = key.replace(/([A-Z])/g, ' $1').toUpperCase();

          return (
            // CORRIGIDO: Key agora é uma string, resolvendo o erro 2769
            <View key={key} style={styles.dataRow}> 
              <VencedorText vencedor={vencedor} isVeiculo1={true}>
                {veiculo1.fichaTecnica[key]}
              </VencedorText>

              <Text style={styles.specLabel}>{keyLabel}</Text>

              <VencedorText vencedor={vencedor} isVeiculo1={false}>
                {veiculo2.fichaTecnica[key]}
              </VencedorText>
            </View>
          );
        })}
      </View>

      {/* Resumos */}
      <View style={styles.resumoRow}>
        <View style={styles.resumoCol}>
          <ResumeComponent veiculo={veiculo1} />
        </View>
        <View style={styles.resumoCol}>
          <ResumeComponent veiculo={veiculo2} />
        </View>
      </View>
    </View>
  );
};


// --- 2. Componente de Seleção (Picker Simples) ---
interface SelectorProps {
  veiculo: Veiculo;
  onSelect: (veiculo: Veiculo) => void;
  title: string;
}

const VehicleSelector: React.FC<SelectorProps> = ({ veiculo, onSelect, title }) => (
  <View style={styles.selectorWrapper}>
    <Text style={styles.selectorTitle}>{title}</Text>
    <View style={styles.pickerContainer}>
      {/* CORRIGIDO: Tipagem do parâmetro 'item' no map */}
      {VeiculosData.map((item: Veiculo) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.pickerItem, item.id === veiculo.id && styles.selectedItem]}
          onPress={() => onSelect(item)}
        >
          <Text style={styles.pickerText}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);


// --- 3. Componente Principal App ---
export default function Index() { // Mudado para 'Index' para seguir a convenção do Expo Router
  const [veiculoA, setVeiculoA] = useState<Veiculo>(VeiculosData[0]);
  const [veiculoB, setVeiculoB] = useState<Veiculo>(VeiculosData[1]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.mainTitle}>IVECO Comparador de Veículos</Text>

        {/* Seleção */}
        <View style={styles.selectionArea}>
          <VehicleSelector
            veiculo={veiculoA}
            onSelect={setVeiculoA}
            title="VEÍCULO A"
          />
          <VehicleSelector
            veiculo={veiculoB}
            onSelect={setVeiculoB}
            title="VEÍCULO B"
          />
        </View>

        {/* Fotos */}
        <View style={styles.imageRow}>
          <Image
            source={{ uri: veiculoA.imagem }}
            style={styles.vehicleImage}
            resizeMode="cover"
          />
          <Text style={styles.vsText}>VS</Text>
          <Image
            source={{ uri: veiculoB.imagem }}
            style={styles.vehicleImage}
            resizeMode="cover"
          />
        </View>

        {/* Comparação e Resumo */}
        <ComparacaoContainer veiculo1={veiculoA} veiculo2={veiculoB} />

      </ScrollView>
    </SafeAreaView>
  );
}

// --- 4. Estilos (mantidos, mas com ajustes na ordem para clareza) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004A99', // Azul Iveco
  },

  // Seleção
  selectionArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  selectorWrapper: {
    alignItems: 'center',
    width: '45%',
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  pickerContainer: {
    flexDirection: 'column',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pickerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  selectedItem: {
    backgroundColor: '#E0F7FA', // Azul claro para seleção
    borderLeftWidth: 4,
    borderLeftColor: '#004A99',
  },
  pickerText: {
    fontSize: 14,
  },

  // Fotos
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  vehicleImage: {
    width: width * 0.40, // 40% da largura da tela
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  vsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004A99',
  },

  // Comparação (Tabela)
  comparisonContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004A99',
    textAlign: 'center',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 20,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#004A99',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  specLabel: {
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  specValue: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
  },
  // Feedback Visual da Comparação
  vencedorText: {
    fontWeight: 'bold',
    color: '#28A745', // Verde para o vencedor
  },
  perdedorText: {
    fontWeight: '400',
    color: '#DC3545', // Vermelho claro para o perdedor
    opacity: 0.7,
  },

  // Resumo de Vantagens
  resumoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  resumoCol: {
    width: '48%',
  },
  resumeBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#004A99', // Borda Azul Iveco
    minHeight: 120, // Garante que as caixas tenham altura similar
  },
  resumeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004A99',
    marginBottom: 5,
    textAlign: 'center',
  },
  resumeText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#333',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});