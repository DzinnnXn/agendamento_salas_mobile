import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Status from "@/components/nav";
import { Input } from '@/components/Input';
import Button from '@/components/Button';

const Cadastro = () => {
    const handlePress = () => {
        // Função a ser executada quando o botão for pressionado
        console.log('Botão Enviar pressionado');
    };

    return (
        <ScrollView style={styles.container}>
            <Status title='Cadastro'/>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome:</Text>
                <Input placeholder="Insira seu nome:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Sobrenome:</Text>
                <Input placeholder="Insira seu sobrenome:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <Input placeholder="Insira seu email:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Telefone:</Text>
                <Input placeholder="Insira seu telefone:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha:</Text>
                <Input placeholder="Insira sua senha:" style={styles.input} />
            </View>
            <View>
                <Button 
                    label='Enviar' 
                    onPress={handlePress}
                    style={styles.button} 
                    labelClasses={styles.buttonText} 
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    inputContainer: {
        marginBottom: 15,
        marginTop: 15,
        padding: 8
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#b81414',
        borderColor: '#b81414',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16
    }
});

export default Cadastro;