
import CircleIcon from "./CircleIcon";
import { FlatList, StyleSheet, Text, View } from "react-native"

export default function ClientRowInstallments({ item }) {
    return (
        <View style={styles.container}>
            <CircleIcon chars={item.chars} size={40} charSize={16} />
            <View style={{marginLeft: 10 }}>
                <Text style={styles.clientName}>{item.clientName} </Text>
                <Text style={styles.createdDate}>data {item.createdDate}</Text>
            </View>
            <View style={{flex: 1, alignItems: "flex-end" }}>
                <Text>parcelas: {item.installments}</Text>
                <Text>R$ {item.value}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        borderBlockColor: "#cecece",
        borderBottomWidth: 1,
    },

    clientName: {
        fontSize: 19,
        fontWeight: "bold",
    },

    createdDate: {
        fontSize: 14,
        color: "#888",
    },
});
