import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Status from '@/components/nav';
import AgendarSala from './AgendarSala';
import Link from '@react-navigation/native';

interface Sala {
  id: number;
  nome: string;
  descricao: string;
}

type AgendamentoScreenProp = NativeStackNavigationProp<any, any>;

const Agendamento = () => {
  const navigation = useNavigation<AgendamentoScreenProp>();

  const salas: Sala[] = [
    { id: 1, nome: 'Sala 101', descricao: 'Descrição da Sala 101' },
    { id: 2, nome: 'Sala 102', descricao: 'Descrição da Sala 102' },
    { id: 3, nome: 'Sala 103', descricao: 'Descrição da Sala 103' },
  ];

  const handleAgendamento = (sala: Sala) => {
    navigation.navigate('DescricaoSala', { sala });
  };

  return (
    <View style={styles.container}>
      <Status title="Agendamento de Salas" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {salas.map((sala) => (
          <View key={sala.id} style={styles.salaContainer}>
            <Text style={styles.salaNome}>{sala.nome}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleAgendamento(sala)}>
              <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  salaContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  salaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#e61919',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Agendamento;