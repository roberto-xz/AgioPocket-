
import { View, Text, FlatList, StyleSheet } from "react-native";
import LoansRow from "./LoansRow";
import ClientRowInstallments from "./ClientRowInstallments";


function rederItem({ item }) {
    return (
        <ClientRowInstallments item={item}/>
    )
}

export default function PaymentsWeek({item}) {
    return(
        <View style={styles.container}>
            <View style={styles.weekRow}>
                <Text>Segunda</Text><Text>Terça</Text><Text>Quarta</Text>
                <Text>Quinta</Text><Text>Sexta</Text><Text>Sábado</Text>
            </View>
            <View style={styles.loans}>
                <FlatList data={item} renderItem={rederItem} keyExtractor={(item) => item.id}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "28%",
        borderRadius: 10,
        shadowRadius: 3.84,
        marginTop: "2%",
    },

    weekRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        backgroundColor: "#f4f4f4",
        borderRadius: 10,
    },

    loans: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
    },
});
