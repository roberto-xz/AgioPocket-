
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CircleIcon from "./CircleIcon";

function rederItem({ item }) {
    return (
        <View style={styles.item}>
            <CircleIcon chars={item.clientChars} size={44}/>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Pagamento recebido - {item.clientName}</Text>
                <Text style={{ color: "#888" }}> data {item.data}</Text>
            </View>
            <Text style={styles.money}>
                R$ {item.value.toFixed(2).replace('.', ',')}
            </Text>
        </View>
    );
}

export default function RecentPayments() {
   const [dados,setDados] = useState([
        { id: '1', clientName: 'João', clientChars: "JO", data: '2023-10-01', value: 100.00 },
        { id: '2', clientName: 'Maria', clientChars: "MA", data: '2023-10-02', value: 200.50 },
        { id: '3', clientName: 'Pedro', clientChars: "PD", data: '2023-10-03', value: 150.75 },
        { id: '4', clientName: 'Ana', clientChars: "AN", data: '2023-10-04', value: 300.00 },
        { id: '5', clientName: 'Lucas', clientChars: "LC", data: '2023-10-05', value: 250.25 },
        { id: '6', clientName: 'Carla', clientChars: "CA", data: '2023-10-06', value: 175.00 },
        { id: '7', clientName: 'Roberto', clientChars: "RO", data: '2023-10-07', value: 400.00 },
        { id: '8', clientName: 'Fernanda', clientChars: "FE", data: '2023-10-08', value: 320.50 },
        { id: '9', clientName: 'Ricardo', clientChars: "RI", data: '2023-10-09', value: 180.00 },
        { id: '10', clientName: 'Juliana', clientChars: "JU", data: '2023-10-10', value: 220.75 },

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
        height: "45%",
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

    money: {
        fontSize: 16,
        color: "#000",
        flex: 1,
        fontWeight: "bold",
        textAlign: 'right',
        paddingLeft: 10,
        paddingRight: 10,
    }
});
