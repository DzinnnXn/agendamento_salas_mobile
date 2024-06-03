import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '@/components/Input';

interface Props {
  room: any;
  onNavigate: (screen: string) => void; // Add navigation prop
}

const AgendamentoScreen: React.FC<Props> = ({ room, onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento para {room.nome}</Text>
      <Input placeholder="Nome" />
      <Input placeholder="Turma" />
      <Input placeholder="Data do agendamento" />
      <Button title="Agendar" color="red" onPress={() => {}} />
      <Text style={styles.link} onPress={() => onNavigate('Salas')}>
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
  link: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default AgendamentoScreen;
