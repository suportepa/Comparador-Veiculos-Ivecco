import React, { useState, useMemo } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    FlatList, 
    Pressable, 
    StyleSheet, 
    ScrollView, 
    Image 
} from 'react-native';

// --- CORREÇÃO AQUI: Importação corrigida para 'VeiculosData' ---
import { VeiculosData, Veiculo } from '../../data/veiculos'; 

// --- Componente de Item Simples (para o FlatList) ---
interface SearchResultItemProps {
    item: Veiculo;
    onSelect: (veiculo: Veiculo) => void;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item, onSelect }) => (
    <Pressable style={styles.resultItem} onPress={() => onSelect(item)}>
        <Text>{item.nome}</Text>
        <Text style={styles.modelText}>{item.modelo}</Text>
    </Pressable>
);

// --- Componente para Exibir o Detalhe da Comparação ---
interface ComparisonDetailProps {
    vehicle: Veiculo;
}

const ComparisonDetail: React.FC<ComparisonDetailProps> = ({ vehicle }) => {
    if (!vehicle) return null;

    // Garantindo que a ficha técnica e a imagem existam
    const { nome, imagem, fichaTecnica, resumoVantagem } = vehicle;
    
    // CORREÇÃO E PADRONIZAÇÃO: Usando a sintaxe de URI para exibir a imagem, 
    // consistente com o index.tsx e esperando um URI (string) válido no futuro.
    const imageSource = typeof imagem === 'number' ? imagem : { uri: imagem };

    return (
        <View style={styles.detailCard}>
            <Text style={styles.detailHeader}>{nome}</Text>
            
            {/* Exibição da Imagem (React Native) */}
            <Image 
                source={imageSource} 
                style={styles.vehicleImage} 
                resizeMode="contain" 
            />

            {/* Resumo da Vantagem */}
            <Text style={styles.resumoTitle}>Resumo da Vantagem:</Text>
            <Text style={styles.resumoText}>{resumoVantagem}</Text>

            {/* Ficha Técnica */}
            <Text style={styles.fichaTitle}>Ficha Técnica:</Text>
            {/* Mapeamento manual dos itens para clareza */}
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>Motor:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.motor}</Text>
            </View>
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>Potência:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.potencia}</Text>
            </View>
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>Torque:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.torque}</Text>
            </View>
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>Transmissão:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.transmissao}</Text>
            </View>
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>PBT Técnico:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.pbtTecnico}</Text>
            </View>
            <View style={styles.fichaRow}>
                <Text style={styles.fichaLabel}>CMT:</Text>
                <Text style={styles.fichaValue}>{fichaTecnica.cmt}</Text>
            </View>
        </View>
    );
};


// --- Componente Principal da Tela ---
const ComparisonSearchScreen = () => {
    // Estado para o Veículo 1
    const [query1, setQuery1] = useState('');
    const [selectedVehicle1, setSelectedVehicle1] = useState<Veiculo | null>(null);

    // Estado para o Veículo 2
    const [query2, setQuery2] = useState('');
    const [selectedVehicle2, setSelectedVehicle2] = useState<Veiculo | null>(null);

    // Lógica de Filtragem (agora usando VeiculosData)
    const filteredResults1 = useMemo(() => {
        if (query1.length < 2) return [];
        const lowerCaseQuery = query1.toLowerCase();
        // CORREÇÃO: Usando VeiculosData
        return VeiculosData.filter(v => 
            v.nome.toLowerCase().includes(lowerCaseQuery) || v.modelo.toLowerCase().includes(lowerCaseQuery)
        );
    }, [query1]);

    const filteredResults2 = useMemo(() => {
        if (query2.length < 2) return [];
        const lowerCaseQuery = query2.toLowerCase();
        // CORREÇÃO: Usando VeiculosData
        return VeiculosData.filter(v => 
            v.nome.toLowerCase().includes(lowerCaseQuery) || v.modelo.toLowerCase().includes(lowerCaseQuery)
        );
    }, [query2]);

    // Funções de Seleção
    const handleSelect1 = (vehicle: Veiculo) => {
        setSelectedVehicle1(vehicle);
        setQuery1(vehicle.nome); 
    };
    const handleSelect2 = (vehicle: Veiculo) => {
        setSelectedVehicle2(vehicle);
        setQuery2(vehicle.nome);
    };
        
    return (
        <ScrollView style={styles.container}>
            
            {/* -------------------- PESQUISA -------------------- */}
            <View style={styles.searchContainer}>
                <View style={styles.searchColumn}>
                    <Text style={styles.header}>Veículo 1:</Text>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Pesquisar Veículo 1"
                        value={query1}
                        onChangeText={text => {
                            setQuery1(text);
                            setSelectedVehicle1(null); 
                        }}
                    />
                    {query1.length >= 2 && !selectedVehicle1 && (
                        <FlatList
                            data={filteredResults1}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <SearchResultItem item={item} onSelect={handleSelect1} />}
                            style={styles.resultsList}
                            keyboardShouldPersistTaps="always"
                        />
                    )}
                </View>
                
                <View style={styles.searchColumn}>
                    <Text style={styles.header}>Veículo 2:</Text>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Pesquisar Veículo 2"
                        value={query2}
                        onChangeText={text => {
                            setQuery2(text);
                            setSelectedVehicle2(null);
                        }}
                    />
                    {query2.length >= 2 && !selectedVehicle2 && (
                        <FlatList
                            data={filteredResults2}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <SearchResultItem item={item} onSelect={handleSelect2} />}
                            style={styles.resultsList}
                            keyboardShouldPersistTaps="always"
                        />
                    )}
                </View>
            </View>

            <View style={styles.separator} />

            {/* -------------------- ÁREA DE COMPARAÇÃO -------------------- */}
            {selectedVehicle1 && selectedVehicle2 ? (
                <View style={styles.comparisonArea}>
                    <ComparisonDetail vehicle={selectedVehicle1} />
                    <View style={styles.verticalSeparator} /> 
                    <ComparisonDetail vehicle={selectedVehicle2} />
                </View>
            ) : (
                <Text style={styles.instructionText}>Selecione dois veículos para comparar.</Text>
            )}

        </ScrollView>
    );
};

// --- Estilos de Exemplo (Mantidos) ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    searchColumn: {
        width: '48%', 
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
    },
    resultsList: {
        maxHeight: 120, 
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginTop: 2,
        zIndex: 10, 
        position: 'absolute', 
        width: '100%',
        backgroundColor: 'white',
        top: 68, // Ajuste para posicionar abaixo da searchBar
    },
    resultItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    modelText: {
        fontSize: 11,
        color: '#666',
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    comparisonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    detailCard: {
        width: '48%',
        padding: 5,
    },
    vehicleImage: {
        width: '100%',
        height: 100,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    detailHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'darkgreen',
    },
    fichaTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    fichaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    fichaLabel: {
        fontWeight: '500',
        flex: 1,
    },
    fichaValue: {
        flex: 1,
        textAlign: 'right',
    },
    resumoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    resumoText: {
        fontStyle: 'italic',
        marginBottom: 10,
        color: '#333',
    },
    verticalSeparator: {
        width: 1,
        backgroundColor: '#ddd',
    },
    instructionText: {
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        color: '#888',
    }
});

export default ComparisonSearchScreen;