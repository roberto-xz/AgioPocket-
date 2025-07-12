
import { useState } from "react";
import { FlatList, StyleSheet, View} from "react-native";
import ClientRow from "./ClientRow";

function rederItem({ item }) {
    return (
        <ClientRow item={item}/>
    )
}

export default function ClientList() {
   const [dados,setDados] = useState([
        { id: '1', clientName: 'João', clientChars: "JO", clientContact: ' +55 87 9.1234-1234'},
        { id: '2', clientName: 'João', clientChars: "JO", clientContact: ' +55 87 9.1234-1234'},
        { id: '3', clientName: 'Maria', clientChars: "MA", clientContact: ' +55 87 9.1234-1234'},
        { id: '4', clientName: 'Pedro', clientChars: "PD", clientContact: ' +55 87 9.1234-1234'},
        { id: '5', clientName: 'Ana', clientChars: "AN", clientContact: ' +55 87 9.1234-1234'},
        { id: '6', clientName: 'Lucas', clientChars: "LC", clientContact: ' +55 87 9.1234-1234'},
        { id: '7', clientName: 'Carla', clientChars: "CA", clientContact: ' +55 87 9.1234-1234'},
        { id: '8', clientName: 'Roberto', clientChars: "RO", clientContact: ' +55 87 9.1234-1234'},
    ]);

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
        height: "20%",
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
