import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";



const Item = ({ imagem, title, description, ideal_time, photo }) => (




    <View>
        <View >
            <TouchableOpacity
                style={styles.item}
                onPress={() => {

                }
                }>
                <View style={styles.viewOne}>
                    <Image source={{ uri: `http://68.183.143.117:3333/uploads/${photo}` }} style={styles.imgLixo}></Image>
                    <View>
                        <Text style={styles.txtName}>{title}</Text>
                        <Text style={styles.txtComent}>{description}</Text>
                        <Text style={styles.txtComent}>{ideal_time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

export default function ItemRender({ imagem, title, description, ideal_time, photo }) {
    return Item({ imagem, title, description, ideal_time, photo })
}

const styles = StyleSheet.create({
    viewOne: {
        flexDirection: 'row',
        marginLeft: 16
    },
    imgLixo: {
        width: 95,
        height: 60,
        borderRadius: 16
    },
    title: {
        fontSize: 32
    },
    item: {
        padding: 8
    },
    txtName: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18
    },
    txtComent: {
        marginLeft: 8,
        fontSize: 14
    }
});

