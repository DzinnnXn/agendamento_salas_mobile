import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const salasReservadas = [
  { id: '1', nome: 'C01', descricao: 'Sala com projetor e 30 lugares' },
  { id: '2', nome: 'C02', descricao: 'Sala com quadro branco e 25 lugares' },

];

interface Props {
  onNavigate: (screen: string) => void; 
}

const SalasReservadasScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salas Reservadas</Text>
      <FlatList
        data={salasReservadas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.roomContainer}>
            <Text style={styles.roomName}>{item.nome}</Text>
            <Text style={styles.roomDescription}>{item.descricao}</Text>
          </View>
        )}
      />
      <Text style={styles.link} onPress={() => onNavigate('Home')}>
        Voltar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  roomContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  roomName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 16,
    color: '#555',
  },
  link: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default SalasReservadasScreen;
