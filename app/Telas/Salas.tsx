// /Telas/Salas.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const salas = [
  { id: '1', nome: 'Sala 101', descricao: 'Sala com projetor e 30 lugares' },
  { id: '2', nome: 'Sala 102', descricao: 'Sala com quadro branco e 25 lugares' },
];

interface Props {
  onNavigate: (screen: string) => void;
  onRoomSelect: (room: any) => void; // Funcão pra setar a sala selecionada
}

const SalasScreen: React.FC<Props> = ({ onNavigate, onRoomSelect }) => {
  const handleRoomPress = (room: any) => {
    onRoomSelect(room);
    onNavigate('Agendamento');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salas Disponíveis</Text>
      <FlatList
        data={salas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRoomPress(item)}>
            <View style={styles.roomContainer}>
              <Text style={styles.roomName}>{item.nome}</Text>
              <Text style={styles.roomDescription}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
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

export default SalasScreen;
