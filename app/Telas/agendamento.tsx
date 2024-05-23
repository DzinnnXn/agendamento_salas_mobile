import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Status from "@/components/nav";

const Agendamento = () => {
    // Dados de exemplo das salas
    const salas = [
        { id: 1, nome: 'Sala C09' },
        { id: 2, nome: 'Sala C10' },
        { id: 3, nome: 'Sala C11' },
    ];

    return (
        <View style={styles.container}>
            <Status title="Agendamento de Salas"/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {salas.map((sala) => (
                    <View key={sala.id} style={styles.salaContainer}>
                        <Text style={styles.salaNome}>{sala.nome}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleAgendamento(sala.id)}>
                            <Text style={styles.buttonText}>Agendar</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const handleAgendamento = (salaId) => {
    // Lógica para agendar a sala
    console.log(`Sala ${salaId} agendada`);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollViewContent: {
        paddingBottom: 20,
        margin: 20
    },
    salaContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 5,
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
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Agendamento;
