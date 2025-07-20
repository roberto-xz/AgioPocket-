
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, Modal, StyleSheet, Text, View } from "react-native"
import Header from "../components/Header";
import ClientList from "../components/ClientList";
import FabButton from "../components/FabButton";
import { useEffect, useState } from "react";
import ClientForm from "../components/ClientForm";
import ClientDetails from "./ClientDetails";
import ClientService from "../../services/ClientService";
import nameToChars from "../../utils/NameToChars";

function loadClients() {
    const clients = new Array();
    const clientService = new ClientService();
    const data = clientService.selectAll();

    if (data) {
        for (const client of data) {
            clients.push({
                id: client.getId,
                name: client.getFullName,
                char: nameToChars(client.getName, client.getLast),
                contact: client.getPhoneNumber
            });
        }
        return clients;
    }
}

function client() {
    const [modal,setModal] = useState(false);
    const [data,setData] = useState([]);
    const service = new ClientService();

    useEffect(() => {
        const fetchedClients = loadClients();
        setData(fetchedClients);
    }, []);

    const deleteCl = (id) => {
        if (service.remove(id)) {
            Alert.alert("Sucesso", "Cliente removido!");
            setData((prev) => prev.filter(c => c.id !== id));
            return;
        }
        Alert.alert("Erro", "Não foi possível remover.");
    };

    const createCl = (client) => {
        if (service.create(client)) {
            Alert.alert("Sucesso", "Novo cliente adicionado !!");
            const fetchedClients = loadClients();
            setData(fetchedClients);
            return;
        }
        Alert.alert("Erro", "O email ou numero de telefone já foi cadastrado");
        return;
    }

    const searchCL = (term) => {
        if (term.length >= 1) {
            const clients = new Array();
            const data = service.search(term);
            if (data) {
                for (client of data ) {
                    clients.push({
                        id: client.getId,
                        name: client.getFullName,
                        char: nameToChars(client.getName, client.getLast),
                        contact: client.getPhoneNumber
                    });
                }
                setData(clients);
                return;
            }
        }
        const fetchedClients = loadClients();
        setData(fetchedClients);
    }


    return (
        <View style={styles.container}>
            <Header showSearchBar={true} onSearchType={searchCL}></Header>
            <Text style={styles.text}>Clientes</Text>
            <ClientList clients={data} onDelete={deleteCl}/>
            <Modal
                visible={modal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModal(false)}
            ><ClientForm onCreate={createCl} /></Modal>
            <FabButton onPress={()=> setModal(true)}/>
        </View>
    );
}

export default function Client() {
    const stack = createNativeStackNavigator();


    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="client" component={client} />
            <stack.Screen name="clform" component={ClientForm}/>
            <stack.Screen name="detais" component={ClientDetails}/>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#ae60fcff"
    },

    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        width: "90%",
        paddingTop: 15,
        paddingBottom: 15,
    }
});
