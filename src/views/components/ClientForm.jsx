
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckBox from 'react-native-check-box'
import { useEffect, useState } from "react";
import ClientModel from "../../models/ClientModel";

function register({userData, onCreate}) {
    onCreate(new ClientModel(
        userData.name,
        userData.last,
        userData.email,
        userData.phone,
        userData.senEmail
    ));
}

export default function ClientForm({onCreate, isUpdate=false, client}) {
    const [checkbox, setCheckBox] = useState(false);
    const [userData, setData] = useState({name: "", last: "", email: "", phone: "", senEmail: checkbox});

    useEffect(()=>{
        if (isUpdate) {
            setData(client);
        }
    })

    return (
        <SafeAreaView style={style.page}>
            <View style={style.modal}>
                <Text style={style.fullName}>Nome completo</Text>
                <View style={style.towRows}>
                    <TextInput
                        style={style.name} placeholder="Nome "
                        value={userData.name}
                        onChangeText={(v)=> setData(prev =>({...prev, name:v}))}
                    />
                    <TextInput
                        style={style.name} placeholder="Sobre nome"
                        onChangeText={(v)=> setData(prev =>({...prev, last:v}))}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.nameLabel}>Contato</Text>
                    <TextInput
                        style={style.input} placeholder="87 9.1234-1234"
                        onChangeText={(v)=> setData(prev =>({...prev, phone:v}))}
                    />
                </View>
                <View style={style.row}>
                    <Text style={style.nameLabel}>Email</Text>
                    <TextInput
                        style={style.input}
                        placeholder="joao.alberto@email.com"
                        onChangeText={(v)=> setData(prev =>({...prev, email:v}))}
                    />
                </View>
                <View style={style.checkbox}>
                    <CheckBox onClick={()=>setCheckBox(!checkbox)} isChecked={checkbox}/>
                    <Text style={style.checkboxText}>Enviar cobranças por email?</Text>
                </View>
                <TouchableOpacity style={style.button} onPress={()=>register({userData, onCreate})}>
                    <Text style={style.textBnt}>{!isUpdate ? "Criar" : "Atualizar"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    page: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        alignItems: "center"
    },

    modal: {
        width: "90%",
        opacity: 1,
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        padding: 20
    },

    textHeader: {
        width: "100%",
        fontSize: 20,
        color: "#313131",
        fontWeight: 800,
        marginLeft: "2%"
    },

    towRows: {
        width: "100%",
        backgroundColor: "#f4f4f4",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        borderRadius: 5,
        alignContent: "center",
        borderWidth: 1,
        borderColor: "#313131"
    },

    name: {
        width: "50%",
        backgroundColor: "#f4f4f4",
        padding: 14,
        fontSize: 18
    },

    nameLabel: {
        width: "100%",
        fontSize: 20,
        color: "#313131",
        fontWeight: 800,
    },

    fullName: {
        width: "100%",
        marginBottom: "2%",
        fontSize: 18,
        color: "#313131",
        fontWeight: 800,
    },

    row: {
        width: "100%",
        marginTop: "3%",
        marginBottom: "3%",
    },

    input: {
        height: 55,
        width: "100%",
        backgroundColor: "#f4f4f4",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
        fontSize: 18,
        marginTop: "2%",
        borderWidth: 1,
        borderColor: "#313131"
    },

    checkbox: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end"
    },

    checkboxText: {
        color: "#313131",
        marginLeft: "1%",
        fontSize: 16,
        verticalAlign: "middle"
    },

    button: {
        backgroundColor: "#313131",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: "10%",
        marginBottom: "1%",
        alignSelf: "center"
    },

    textBnt: {
        color: "#f4f4f4",
        fontSize: 18
    }

});
