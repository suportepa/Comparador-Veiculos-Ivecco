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

// --- Componente VencedorText ---
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

// --- Componente de Comparação ---
interface ComparacaoProps {
  veiculo1: Veiculo;
  veiculo2: Veiculo;
}

const ComparacaoContainer: React.FC<ComparacaoProps> = ({ veiculo1, veiculo2 }) => {
  // Define ordem, rótulos e pesos dos campos
  const specsConfig: { key: keyof FichaTecnica; label: string; peso: number }[] = [
    { key: 'motor', label: 'MOTOR', peso: 2 },
    { key: 'potencia', label: 'POTÊNCIA', peso: 3 },
    { key: 'torque', label: 'TORQUE', peso: 3 },
    { key: 'transmissao', label: 'TRANSMISSÃO', peso: 1 },
    { key: 'pesoEmOrdemDeMarcha', label: 'PESO EM ORDEM DE MARCHA', peso: 2 },
    { key: 'pbtTecnico', label: 'PBT TÉCNICO', peso: 2 },
    { key: 'cmt', label: 'CMT', peso: 2 },
  ];

  const getVencedor = (key: keyof FichaTecnica) => {
    const val1 = veiculo1.fichaTecnica[key];
    const val2 = veiculo2.fichaTecnica[key];

    if (typeof val1 !== 'string' || typeof val2 !== 'string') return 'neutral';
    if (val1.includes('N/A') || val2.includes('N/A')) return 'neutral';
    
    const num1 = parseFloat(val1.replace(/[^\d.]/g, ''));
    const num2 = parseFloat(val2.replace(/[^\d.]/g, ''));

    if (isNaN(num1) || isNaN(num2) || num1 === num2) return 'neutral';
    return num1 > num2 ? 'vencedor1' : 'vencedor2';
  };

  // Calcula pontuação ponderada
  const calcularPontuacao = () => {
    let pontosVeiculo1 = 0;
    let pontosVeiculo2 = 0;
    const vitoriasPorCategoria = {
      veiculo1: [] as string[],
      veiculo2: [] as string[],
    };

    specsConfig.forEach(({ key, label, peso }) => {
      const vencedor = getVencedor(key);
      if (vencedor === 'vencedor1') {
        pontosVeiculo1 += peso;
        vitoriasPorCategoria.veiculo1.push(label);
      } else if (vencedor === 'vencedor2') {
        pontosVeiculo2 += peso;
        vitoriasPorCategoria.veiculo2.push(label);
      }
    });

    return { pontosVeiculo1, pontosVeiculo2, vitoriasPorCategoria };
  };

  const { pontosVeiculo1, pontosVeiculo2, vitoriasPorCategoria } = calcularPontuacao();
  const totalPontos = pontosVeiculo1 + pontosVeiculo2;
  const porcentagemV1 = totalPontos > 0 ? (pontosVeiculo1 / totalPontos) * 100 : 50;
  const porcentagemV2 = totalPontos > 0 ? (pontosVeiculo2 / totalPontos) * 100 : 50;

  let vencedorGeral: 'empate' | 1 | 2 = 'empate';
  if (pontosVeiculo1 > pontosVeiculo2) vencedorGeral = 1;
  else if (pontosVeiculo2 > pontosVeiculo1) vencedorGeral = 2;

  // Componente de Conclusão
  const ConclusaoComponent = () => {
    if (vencedorGeral === 'empate') {
      return (
        <View style={styles.conclusaoBox}>
          <Text style={styles.conclusaoTitulo}>⚖️ EMPATE TÉCNICO</Text>
          <Text style={styles.conclusaoTexto}>
            Ambos os veículos apresentam desempenho equivalente nas categorias analisadas.
          </Text>
        </View>
      );
    }

    const veiculoVencedor = vencedorGeral === 1 ? veiculo1 : veiculo2;
    const pontosVencedor = vencedorGeral === 1 ? pontosVeiculo1 : pontosVeiculo2;
    const vitoriasVencedor = vencedorGeral === 1 ? vitoriasPorCategoria.veiculo1 : vitoriasPorCategoria.veiculo2;

    return (
      <View style={styles.conclusaoBox}>
        <Text style={styles.conclusaoTitulo}>🏆 VENCEDOR</Text>
        <Text style={styles.conclusaoVencedor}>{veiculoVencedor.nome}</Text>
        <Text style={styles.conclusaoPontos}>{pontosVencedor} pontos</Text>
        <Text style={styles.conclusaoSubtitulo}>Vantagens principais:</Text>
        <View style={styles.vitoriasContainer}>
          {vitoriasVencedor.map((categoria, index) => (
            <Text key={index} style={styles.vitoriaItem}>✓ {categoria}</Text>
          ))}
        </View>
      </View>
    );
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

      {/* Placar Visual */}
      <View style={styles.placarContainer}>
        <View style={styles.placarItem}>
          <Text style={styles.placarNome}>{veiculo1.nome}</Text>
          <Text style={styles.placarPontos}>{pontosVeiculo1} pts</Text>
        </View>
        <View style={styles.barraContainer}>
          <View style={[styles.barraVeiculo1, { width: `${porcentagemV1}%` }]} />
          <View style={[styles.barraVeiculo2, { width: `${porcentagemV2}%` }]} />
        </View>
        <View style={styles.placarItem}>
          <Text style={styles.placarNome}>{veiculo2.nome}</Text>
          <Text style={styles.placarPontos}>{pontosVeiculo2} pts</Text>
        </View>
      </View>

      {/* Tabela */}
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>{veiculo1.nome}</Text>
          <Text style={styles.headerText}>Especificação</Text>
          <Text style={styles.headerText}>{veiculo2.nome}</Text>
        </View>

        {specsConfig.map(({ key, label, peso }) => {
          const vencedor = getVencedor(key);
          return (
            <View key={key} style={styles.dataRow}>
              <VencedorText vencedor={vencedor} isVeiculo1={true}>
                {veiculo1.fichaTecnica[key]}
              </VencedorText>
              <View style={styles.specLabelContainer}>
                <Text style={styles.specLabel}>{label}</Text>
                <Text style={styles.pesoLabel}>peso: {peso}</Text>
              </View>
              <VencedorText vencedor={vencedor} isVeiculo1={false}>
                {veiculo2.fichaTecnica[key]}
              </VencedorText>
            </View>
          );
        })}
      </View>

      {/* Conclusão */}
      <ConclusaoComponent />

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

// --- Componente de Barra de Pesquisa ---
interface SearchBarProps {
  veiculo: Veiculo;
  onSelect: (veiculo: Veiculo) => void;
  title: string;
}

const VehicleSearchBar: React.FC<SearchBarProps> = ({ veiculo, onSelect, title }) => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);

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
      <View style={styles.selectedVehicleBox}>
        <Text style={styles.selectedVehicleName}>{veiculo.nome}</Text>
      </View>
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
      {showResults && (
        <ScrollView style={styles.searchResults} nestedScrollEnabled={true}>
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
        </ScrollView>
      )}
    </View>
  );
};

// --- Componente Principal ---
export default function Index() {
  const [veiculoA, setVeiculoA] = useState<Veiculo>(VeiculosData[0]);
  const [veiculoB, setVeiculoB] = useState<Veiculo>(VeiculosData[1]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>IVECO Comparador de Veículos</Text>

        <View style={styles.selectionArea}>
          <VehicleSearchBar veiculo={veiculoA} onSelect={setVeiculoA} title="VEÍCULO A" />
          <VehicleSearchBar veiculo={veiculoB} onSelect={setVeiculoB} title="VEÍCULO B" />
        </View>

        <View style={styles.imageRow}>
          <Image source={{ uri: veiculoA.imagem }} style={styles.vehicleImage} resizeMode="cover" />
          <Text style={styles.vsText}>VS</Text>
          <Image source={{ uri: veiculoB.imagem }} style={styles.vehicleImage} resizeMode="cover" />
        </View>

        <ComparacaoContainer veiculo1={veiculoA} veiculo2={veiculoB} />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f8f8' },
  scrollContent: { padding: 16, alignItems: 'center' },
  mainTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#004A99' },
  selectionArea: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20, paddingHorizontal: 5 },
  selectorTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8, color: '#333', textAlign: 'center' },
  searchWrapper: { width: '45%', position: 'relative' },
  selectedVehicleBox: { backgroundColor: '#004A99', padding: 12, borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  selectedVehicleName: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  searchInput: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, fontSize: 14 },
  searchResults: { position: 'absolute', top: 110, left: 0, right: 0, backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, maxHeight: 200, zIndex: 1000, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  resultItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  resultText: { fontSize: 14, color: '#333' },
  noResultsText: { padding: 12, textAlign: 'center', color: '#999', fontStyle: 'italic' },
  imageRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 25 },
  vehicleImage: { width: width * 0.40, height: 120, borderRadius: 8, borderWidth: 1, borderColor: '#ccc' },
  vsText: { fontSize: 20, fontWeight: 'bold', color: '#004A99' },
  comparisonContainer: { width: '100%', padding: 10, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#004A99', textAlign: 'center', marginBottom: 15, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#eee' },
  placarContainer: { marginBottom: 20, backgroundColor: '#f0f0f0', padding: 15, borderRadius: 8 },
  placarItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  placarNome: { fontSize: 14, fontWeight: '600', color: '#333' },
  placarPontos: { fontSize: 14, fontWeight: 'bold', color: '#004A99' },
  barraContainer: { flexDirection: 'row', height: 20, backgroundColor: '#ddd', borderRadius: 10, overflow: 'hidden', marginVertical: 10 },
  barraVeiculo1: { backgroundColor: '#28A745', height: '100%' },
  barraVeiculo2: { backgroundColor: '#007BFF', height: '100%' },
  table: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, marginBottom: 20, overflow: 'hidden' },
  headerRow: { flexDirection: 'row', backgroundColor: '#004A99', paddingVertical: 10 },
  headerText: { flex: 1, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  dataRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee', backgroundColor: '#f9f9f9' },
  specLabelContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  specLabel: { flex: 1, fontWeight: '600', textAlign: 'center', color: '#333' },
  pesoLabel: { fontSize: 10, color: '#666', fontStyle: 'italic', marginTop: 2 },
  specValue: { flex: 1, textAlign: 'center', fontSize: 14, fontWeight: '400' },
  vencedorText: { fontWeight: 'bold', color: '#28A745' },
  perdedorText: { fontWeight: '400', color: '#DC3545', opacity: 0.7 },
  conclusaoBox: { backgroundColor: '#FFF9E6', padding: 20, borderRadius: 10, borderWidth: 2, borderColor: '#FFD700', marginBottom: 20, alignItems: 'center' },
  conclusaoTitulo: { fontSize: 20, fontWeight: 'bold', color: '#004A99', marginBottom: 10 },
  conclusaoVencedor: { fontSize: 18, fontWeight: 'bold', color: '#28A745', marginBottom: 5 },
  conclusaoPontos: { fontSize: 16, color: '#666', marginBottom: 15 },
  conclusaoTexto: { fontSize: 14, color: '#333', textAlign: 'center', lineHeight: 20 },
  conclusaoSubtitulo: { fontSize: 14, fontWeight: '600', color: '#004A99', marginBottom: 10 },
  vitoriasContainer: { width: '100%' },
  vitoriaItem: { fontSize: 13, color: '#333', marginBottom: 5, paddingLeft: 10 },
  resumoRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  resumoCol: { width: '48%' },
  resumeBox: { backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#004A99', minHeight: 120 },
  resumeTitle: { fontSize: 16, fontWeight: 'bold', color: '#004A99', marginBottom: 5, textAlign: 'center' },
  resumeText: { fontSize: 13, lineHeight: 18, color: '#333', fontStyle: 'italic', textAlign: 'center' },
});