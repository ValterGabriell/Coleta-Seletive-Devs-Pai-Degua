import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Button } from "react-native-paper";
import { View } from "react-native";
import * as Location from 'expo-location';
import { TextInput, Image } from "react-native";
import { postDenuncia } from "../../services/requisicoes/apiDevs/denuncias";


export default function FormularioDenuncia(props) {

    //recebe a foto
    const uri = props.route.params.uri

    const [latitude, setLatitude] = useState("Carregando localização...");
    const [longitude, setLongitude] = useState(null);
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para localização foi negada');
                alert(errorMsg)
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
        })();
    }, []);


    function sendToDatabase() {
        if (title != "" && description != "" && uri != "") {
            var location = latitude + ',' + longitude
            postDenuncia(
                title,
                description,
                "'",
                "15",
                false,
                location,
                props
            )  
        } else {
            alert("Preencha tudo corretamente")
        }

      

    }

    return <>
        <SafeAreaView>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome style={styles.iconPerson} name="user-o" size={20} color="#000" />
                    <Text style={styles.txtMain}>Olá, user!</Text>
                </View>

                <TextInput
                    placeholder="Digite aqui seu título!"
                    style={styles.input}
                    onChangeText={settitle}
                    value={title}
                />
                <Image style={styles.imgModal} source={{ uri }} />

                <View style={{ flexDirection: "row" }}>
                    <FontAwesome style={styles.iconPerson} name="map-marker" size={20} color="#000" />
                    <Text style={styles.txtCoordenadas}>{latitude}</Text>
                    <Text style={styles.txtCoordenadas}>{longitude}</Text>
                </View>

                <TextInput
                    placeholder="Descreva sua denúncia"
                    style={styles.input}
                    onChangeText={setdescription}
                    value={description}
                />




                <Button onPress={sendToDatabase}>Enviar</Button>
                <Button onPress={() => {
                    props.navigation.navigate("MyTabsScreen")
                }}>Cancelar</Button>


            </ScrollView>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    txtMain: {
        fontSize: 24,
        marginLeft: 8,
        marginTop: 16
    },
    txtCoordenadas: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 20,
        alignSelf: "center"
    },
    imgModal: {
        width: '95%', height: 350, borderRadius: 20, marginLeft: 8, marginRight: 8
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    iconPerson: {
        marginTop: 24,
        marginLeft: 16
    },
})