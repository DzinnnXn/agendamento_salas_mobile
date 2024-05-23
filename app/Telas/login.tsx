import React from 'react';
import { View, Text } from 'react-native';
import Status from "@/components/nav";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Status title='Login'/>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <Input placeholder="Insira seu email:" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha:</Text>
                <Input placeholder="Insira sua senha:" style={styles.input} />
            </View>
            <View>
                <Button label='Enviar' style={styles.button}>
                </Button>
    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    inputContainer: {
        marginBottom: 15,
        marginTop: 15
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
        paddingHorizontal: 10
    }
});

export default Login;