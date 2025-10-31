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
  TextInput,
} from 'react-native';

import { VeiculosData, Veiculo, FichaTecnica } from '../../data/veiculos';

const { width } = Dimensions.get('window');

// --- 1. Componente VencedorText ---
interface VencedorTextProps {
  vencedor: 'vencedor1' | 'vencedor2' | 'neutral';
  isVeiculo1: boolean;
  children: React.ReactNode;
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

// --- 2. Componente de Comparação ---
interface ComparacaoProps {
  veiculo1: Veiculo;
  veiculo2: Veiculo;
}

const ComparacaoContainer: React.FC<ComparacaoProps> = ({ veiculo1, veiculo2 }) => {
  // Define a ordem e os rótulos dos campos da ficha técnica
  const specsConfig: { key: keyof FichaTecnica; label: string }[] = [
    { key: 'motor', label: 'MOTOR' },
    { key: 'potencia', label: 'POTÊNCIA' },
    { key: 'torque', label: 'TORQUE' },
    { key: 'transmissao', label: 'TRANSMISSÃO' },
    { key: 'pesoEmOrdemDeMarcha', label: 'PESO EM ORDEM DE MARCHA' },
    { key: 'pbtTecnico', label: 'PBT TÉCNICO' },
    { key: 'cmt', label: 'CMT' },
  ];

  const getVencedor = (key: keyof FichaTecnica) => {
    const val1 = veiculo1.fichaTecnica[key];
    const val2 = veiculo2.fichaTecnica[key];

    if (typeof val1 !== 'string' || typeof val2 !== 'string') return 'neutral';
    
    // Ignora comparação para campos N/A ou vazios
    if (val1.includes('N/A') || val2.includes('N/A')) return 'neutral';
    
    const num1 = parseFloat(val1.replace(/[^\d.]/g, ''));
    const num2 = parseFloat(val2.replace(/[^\d.]/g, ''));

    if (isNaN(num1) || isNaN(num2) || num1 === num2) {
      return 'neutral';
    }

    return num1 > num2 ? 'vencedor1' : 'vencedor2';
  };

  const ResumeComponent: React.FC<{ veiculo: Veiculo }> = ({ veiculo }) => (
    <View style={styles.resumeBox}>
      <Text style={styles.resumeTitle}>Resumo da Vantagem</Text>
      <Text style={styles.resumeText}>
        {veiculo.resumoVantagem.replace(/\*\*(.*?)\*\*/g, (match: string, p1: string) => p1.toUpperCase())}
      </Text>
    </View>
  );

  return (
    <View style={styles.comparisonContainer}>
      <Text style={styles.sectionTitle}>Ficha Técnica Comparada</Text>

      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>{veiculo1.nome}</Text>
          <Text style={styles.headerText}>Especificação</Text>
          <Text style={styles.headerText}>{veiculo2.nome}</Text>
        </View>

        {specsConfig.map(({ key, label }) => {
          const vencedor = getVencedor(key);

          return (
            <View key={key} style={styles.dataRow}>
              <VencedorText vencedor={vencedor} isVeiculo1={true}>
                {veiculo1.fichaTecnica[key]}
              </VencedorText>

              <Text style={styles.specLabel}>{label}</Text>

              <VencedorText vencedor={vencedor} isVeiculo1={false}>
                {veiculo2.fichaTecnica[key]}
              </VencedorText>
            </View>
          );
        })}
      </View>

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

// --- 3. Componente de Barra de Pesquisa ---
interface SearchBarProps {
  veiculo: Veiculo;
  onSelect: (veiculo: Veiculo) => void;
  title: string;
}

const VehicleSearchBar: React.FC<SearchBarProps> = ({ veiculo, onSelect, title }) => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Filtra veículos baseado no texto digitado
  const filteredVeiculos = VeiculosData.filter((v: Veiculo) =>
    v.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelect = (selectedVeiculo: Veiculo) => {
    onSelect(selectedVeiculo);
    setSearchText('');
    setShowResults(false);
  };

  return (
    <View style={styles.searchWrapper}>
      <Text style={styles.selectorTitle}>{title}</Text>
      
      {/* Veículo Selecionado */}
      <View style={styles.selectedVehicleBox}>
        <Text style={styles.selectedVehicleName}>{veiculo.nome}</Text>
      </View>

      {/* Barra de Pesquisa */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar outro veículo..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          setShowResults(text.length > 0);
        }}
        onFocus={() => setShowResults(searchText.length > 0)}
      />

      {/* Resultados da Pesquisa */}
      {showResults && (
        <View style={styles.searchResults}>
          {filteredVeiculos.length > 0 ? (
            filteredVeiculos.map((item: Veiculo) => (
              <TouchableOpacity
                key={item.id}
                style={styles.resultItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.resultText}>{item.nome}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>Nenhum veículo encontrado</Text>
          )}
        </View>
      )}
    </View>
  );
};

// --- 4. Componente Principal ---
export default function Index() {
  const [veiculoA, setVeiculoA] = useState<Veiculo>(VeiculosData[0]);
  const [veiculoB, setVeiculoB] = useState<Veiculo>(VeiculosData[1]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.mainTitle}>IVECO Comparador de Veículos</Text>

        {/* Seleção com Barra de Pesquisa */}
        <View style={styles.selectionArea}>
          <VehicleSearchBar
            veiculo={veiculoA}
            onSelect={setVeiculoA}
            title="VEÍCULO A"
          />
          <VehicleSearchBar
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

// --- 5. Estilos ---
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
    color: '#004A99',
  },

  // Área de Seleção
  selectionArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },

  // Estilos da Barra de Pesquisa
  searchWrapper: {
    width: '45%',
    position: 'relative',
  },
  selectedVehicleBox: {
    backgroundColor: '#004A99',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedVehicleName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  searchResults: {
    position: 'absolute',
    top: 110,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    maxHeight: 200,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 14,
    color: '#333',
  },
  noResultsText: {
    padding: 12,
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
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
    width: width * 0.40,
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

  // Comparação
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
  vencedorText: {
    fontWeight: 'bold',
    color: '#28A745',
  },
  perdedorText: {
    fontWeight: '400',
    color: '#DC3545',
    opacity: 0.7,
  },

  // Resumo
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
    borderColor: '#004A99',
    minHeight: 120,
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