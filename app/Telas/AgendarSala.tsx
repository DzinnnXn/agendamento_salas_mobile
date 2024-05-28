import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useNavigation, Route } from '@react-navigation/native';
import Status from '@/components/nav';

interface Sala {
  id: number;
  nome: string;
  descricao: string;
}

type AgendamentoStackParamList = {
  DescricaoSala: { sala: Sala };
  AgendarSala: { sala: Sala };
};

type AgendarSalaScreenProp = NativeStackNavigationProp<AgendamentoStackParamList, 'AgendarSala'>;
type DescricaoSalaRouteProp = RouteProp<AgendamentoStackParamList, 'DescricaoSala'>;

const AgendarSala: React.FC<{
  navigation: AgendarSalaScreenProp;
  route: RouteProp<AgendamentoStackParamList, 'AgendarSala'>;
}> = ({ navigation, route }) => {
  const { sala } = route.params;
  const [agendador, setAgendador] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleConfirmarAgendamento = () => {
    // Aqui você pode implementar a lógica para confirmar o agendamento
    // Por exemplo, enviar os dados para o servidor ou armazená-los localmente
    // Depois, você pode redirecionar para outra tela se necessário
  };

  return (
    <View style={styles.container}>
      <Status title="Agendar Sala" />
      <View style={styles.infoContainer}>
        <Text style={styles.salaNome}>{sala.nome}</Text>
        <Text style={styles.descricaoSala}>{sala.descricao}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Agendador"
          value={agendador}
          onChangeText={setAgendador}
        />
        <TextInput
          style={styles.input}
          placeholder="Data"
          value={data}
          onChangeText={setData}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora"
          value={hora}
          onChangeText={setHora}
        />
        <TouchableOpacity style={styles.button} onPress={handleConfirmarAgendamento}>
          <Text style={styles.buttonText}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
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
  descricaoSala: {
    fontSize: 16,
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#e61919',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AgendarSala;