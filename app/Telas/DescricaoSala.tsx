import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";

const Descricao = ({ route }) => {
    const { agendamento } = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.corpo}>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    corpo: {
        flex: 1,
        marginTop: 50,
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        marginLeft: 25,
        marginTop: 20,
    },
    item: {
        fontSize: 15,
        fontWeight: '500',
        color: 'lightgray',
        marginLeft: 25,
        marginBottom: 20,
    },
});

export default Descricao;