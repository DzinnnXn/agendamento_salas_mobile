import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Telas/Login';
import RegisterScreen from './Telas/Cadastro';
import SalasScreen from './Telas/Salas'; 
import Navbar from '@/components/NavBar';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'Register':
        return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'Salas': // Add new case for Salas screen
        return <SalasScreen />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onNavigate={setCurrentScreen} />
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;