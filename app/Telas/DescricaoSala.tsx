import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";

const Descricao = ({ route }) => {
    const { inventario } = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.corpo}>
                <Text style={styles.titulo}>N° do Inventario:</Text>
                <Text style={styles.item}>{inventario.numero}</Text>
                <Text style={styles.titulo}>Descrição:</Text>
                <Text style={styles.item}>{inventario.descricao}</Text>
                <Text style={styles.titulo}>Local:</Text>
                <Text style={styles.item}>{inventario.local}</Text>
                <Text style={styles.titulo}>Responsável:</Text>
                <Text style={styles.item}>{inventario.responsavel}</Text>
                <Text style={styles.titulo}>Data de Registro:</Text>
                <Text style={styles.item}>{inventario.dataRegistro}</Text>
            </View>

            <View style={styles.addButton}>
                <Link to="/Editar">
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
                </Link>
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