import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function Descricao({ user}) {
    return (
        <View style={styles.contanier}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Descrição</Text>
                <AntDesign name="edit" size={18} color="#777778" onPress={() => { }} style={styles.editar}/>
            </View>

            <Text style={{ marginHorizontal: 16, marginTop: 10 }}>
                {
                    user.description
                }
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    contanier: {
        marginTop: 26,
    },
    titulo: {
        color: '#FF5353',
        fontWeight: '600',
        fontSize: 16,
        marginStart: 16,
    },
    editar: {
        position: 'absolute',
        marginStart: 370,
        marginTop:5,
        
    },
})