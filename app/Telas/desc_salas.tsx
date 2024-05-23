import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DescricaoSala = ({ route }) => {
  const { sala } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nomeSala}>{sala.nome}</Text>
      <Text style={styles.descricaoSala}>{sala.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  nomeSala: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricaoSala: {
    fontSize: 16,
    color: '#333',
  },
});

export default DescricaoSala;
