import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Status from "@/components/nav";
import { Link } from 'expo-router';
import { Input } from '@/components/Input';
import Button from '@/components/Button';

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <Status title='Login'/>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <Input placeholder="Insira seu email:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha:</Text>
                <Input placeholder="Insira sua senha:" style={styles.input} />
            </View>
            <View style={buttonStyles.buttonContainer}>
                <Button label='Enviar' style={buttonStyles.button} />
            </View>
            <View style={cadastroStyles.linkContainer}>
                <Link href="/Telas/cadastro">
                    <Text style={cadastroStyles.linkText}>Cadastre-se</Text>
                </Link>
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
        padding: 5
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
});

const cadastroStyles = StyleSheet.create({
    linkContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    linkText: {
        fontSize: 16,
        color: '#e61919',
        textDecorationLine: 'underline',
    },
});

const buttonStyles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#e61919',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});

export default Login;
