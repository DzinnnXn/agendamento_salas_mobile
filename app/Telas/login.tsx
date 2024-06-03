import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from '@/components/Input';

interface Props {
  onNavigate: (screen: string) => void;
}

const LoginScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />
      <Button title="Entrar" color="red" onPress={() => {}} />
      <Text style={styles.link} onPress={() => onNavigate('Register')}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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

export default LoginScreen;
