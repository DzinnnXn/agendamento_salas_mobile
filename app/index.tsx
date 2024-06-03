import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Telas/Login';
import RegisterScreen from './Telas/Cadastro';
import SalasScreen from './Telas/Salas';
import AgendamentoScreen from './Telas/Agendamento'; 
import Navbar from '@/components/NavBar';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [selectedRoom, setSelectedRoom] = useState(null); 

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case 'Register':
        return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'Salas':
        return <SalasScreen onNavigate={setCurrentScreen} onRoomSelect={setSelectedRoom} />;
      case 'Agendamento':
        return <AgendamentoScreen room={selectedRoom} onNavigate={setCurrentScreen} />;
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
