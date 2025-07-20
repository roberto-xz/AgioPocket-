import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircleIcon from "../components/CircleIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ClientService from "../../services/ClientService";


export default function ClientDetails() {
    const navigation = useNavigation();
    const [client, setClient] = useState({
        name: "Nome",
        last: "Sobre-Nome",
        email: "nome.sobrenome@email.com",
        phoneNumber: '(87) 9.1234-5678',
        sendEmails: false
    })

    const route = useRoute()
    const service = new ClientService()

    const { clientId } = route.params;

    useEffect(()=>{
        const data = service.selectById(clientId);
        if (data) {
            setClient({
                name: data.getName,
                last: data.getLast,
                email: data.getEmail,
                phoneNumber: data.getPhoneNumber,
                sendEmails: (data.getSendEmail == "Y") ? true : false
            })
        }

    },[])

    return (
        <SafeAreaView style={style.page}>
            <TouchableOpacity style={style.backButton} onPress={()=> navigation.goBack()}>
                <FontAwesome name="long-arrow-left" size={20} color={"#f4f4f4"}/>
                <Text style={{color: "#f4f4f4", fontSize: 19, marginLeft: 10, fontWeight: 800}}>Perfil do Cliente</Text>
            </TouchableOpacity>

            <View style={style.userDetails}>
                <View style={style.userNameBox}>
                    <CircleIcon charSize={13} chars={"UR"} size={55}/>
                    <Text style={style.userName}> {client.name} {client.last} </Text>
                </View>
                <View style={style.inf}>
                    <FontAwesome name="envelope" size={20} color={"#616161"}/>
                    <Text style={style.text}>{client.email}</Text>
                </View>
                <View style={style.inf}>
                    <FontAwesome name="phone" size={20} color={"#616161"}/>
                    <Text style={style.text}>{client.phoneNumber}</Text>
                </View>
                <View style={style.inf}>
                    {
                        client.sendEmails ? <FontAwesome name="check" size={20} color={"#616161"}/> :
                        <FontAwesome name="remove" size={20} color={"#616161"}/>
                    }
                    <Text style={style.text}>Aceita receber Email?</Text>
                </View>
                <View style={style.buttons}>
                    <TouchableOpacity style={style.button}>
                        <Text style={{color: "#f4f4f4"}}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.button}>
                        <Text style={{color: "#f4f4f4"}}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={style.label}>Emprestimos</Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    page: {
        backgroundColor: "#ae60fcff",
        flex: 1,
        alignItems: "center"
    },

      backButton: {
        width: "90%",
        flexDirection: "row",
        marginTop: "10%",
        marginBottom: 20,
    },

    userDetails: {
        backgroundColor: "#f4f4f4",
        width: "95%",
        borderRadius: 20,
        padding: 10,
    },
    userNameBox:{
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: "4%"
    },
    userName: {
        fontSize: 19,
        fontWeight: 800,
        marginBottom: "2%",
        marginLeft: "2%"
    },

    text: {
        fontSize: 16,
        fontWeight: 500,
        color: "#383838ff",
        marginLeft: "3%",
        padding: 3,
    },

    inf: {
        flexDirection: "row"
    },

    buttons: {
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "2%",
        justifyContent: "space-between",
    },

    button: {
        width: "45%",
        height: 40,
        borderRadius: 10,
        backgroundColor: "#414141",
        alignItems: "center",
        justifyContent: "center"
    },

    label: {
        fontSize: 19,
        fontWeight: 500,
        color: "#f4f4f4",
        marginLeft: "3%",
        padding: 3,
        width: "95%",
        padding: 10,
    }

});
