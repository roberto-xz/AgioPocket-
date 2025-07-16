
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View} from "react-native";
import ClientRow from "./ClientRow";
import ClientService from "../../services/ClientService";
import nameToChars from "../../utils/NameToChars";

function rederItem({ item }) {
    return (
        <ClientRow item={item}/>
    )
}

export default function ClientList() {
   const [dados,setDados] = useState([
        { id: '1', clientName: '', clientChars: "", clientContact: ''}
    ]);

    useEffect(()=>{
        const clientService = new ClientService();
        const clients = clientService.selectAll();
        const dados = [];

        if (clients != null) {
            for (const client of clients) {
                dados.push({
                    id: client.id,
                    clientName: client.getFullName,
                    clientChars: nameToChars(client.getName, client.getLast),
                    clientContact: client.getPhoneNumber
                });
                console.log(client.getPhoneNumber)
            }
            if (dados.length > 0 ) setDados(dados);
        }
    },[]);

    return (
        <View style={styles.container}>
            <FlatList
                data={dados}
                renderItem={rederItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "15%",
        padding: 10,
        borderRadius: 10,
        shadowRadius: 3.84,
        backgroundColor: "#f4f4f4"
    },

    item: {
        flexDirection: "row",
        alignItems: 'flex-end',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        gap: 10
    },

    options: {
        flex: 1,
        textAlign: 'right',
    }
});
