
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import ClientModel from "../../models/ClientModel";
import ClientService from "../../services/ClientService";

function createClient(clientData) {
    const name = clientData.name.split(" ")[0];
    const last = clientData.name.split(" ")[1];
    const clientService = new ClientService();

    const client = new ClientModel(name,last,
        clientData.cpf, clientData.date,
        clientData.city,clientData.neigh,
        clientData.street, clientData.homeNumber,
        clientData.email,clientData.phone
    );

    if (clientService.create(client)) {
        Alert.alert("Usuario adicionado");
        return;
    }
}

export default function ClientModal({onPress}) {
    const [clientData,setClientData] = useState({
        name: "", cpf: "", date: "",
        city: "", neigh: "",street: "",
        homeNumber: "", email: "", phone: ""
    });

    // é, fazer formulários é sempre uma grande M...
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Nome e sobrenome</Text>
                <TextInput
                    style={styles.textInput}
                    value={clientData.name}
                    onChangeText={(v)=> setClientData(prev =>({...prev, name:v}))}
                />

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Cpf</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.cpf}
                            onChangeText={(v)=> setClientData(prev =>({...prev, cpf:v}))}
                        />
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Data de nascimento</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.date}
                            onChangeText={(v)=> setClientData(prev =>({...prev, date:v}))}
                        />
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Cidade</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.city}
                            onChangeText={(v)=> setClientData(prev =>({...prev, city:v}))}
                        />
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Bairro</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.neigh}
                            onChangeText={(v)=> setClientData(prev =>({...prev, neigh:v}))}
                        />
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Rua</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.street}
                            onChangeText={(v)=> setClientData(prev =>({...prev, street:v}))}
                        />
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>N° casa</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.homeNumber}
                            onChangeText={(v)=> setClientData(prev =>({...prev, homeNumber:v}))}
                        />
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.email}
                            onChangeText={(v)=> setClientData(prev =>({...prev, email:v}))}
                        />
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Whatsapp</Text>
                        <TextInput
                            style={styles.textInput}
                            value={clientData.phone}
                            onChangeText={(v)=> setClientData(prev =>({...prev, phone:v}))}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={()=>createClient(clientData)} style={styles.button}>
                    <Text style={styles.textButton}> Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
    },

    title: {
        fontSize: 17,
        fontWeight: "800",
        marginTop: 10,
        marginBottom: 5
    },

    towBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textInput: {
        backgroundColor: "#f4f4f4",
        borderWidth: 1,
        borderColor: "#313131",
        borderRadius: 5,
        marginTop: 5,
        fontSize: 19,
        marginBottom: 10,
        padding: 10
    },

     button: {
        backgroundColor: "#000",
        borderRadius: 10,
        width: "100%",
        marginTop: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    textButton: {
        color: "#f1f1f1",
        fontSize: 18
    }
})
