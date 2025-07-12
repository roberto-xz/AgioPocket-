
import { StyleSheet, Text, View } from "react-native";
import CircleIcon from "./CircleIcon";
import { FontAwesome } from "@expo/vector-icons";

export default function LoansRow({item}) {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.text}>Data-Pedido: {item.createdDate}</Text>
                <Text style={styles.text}>Data-pago..: {item.paymentDate}</Text>
            </View>
            <View style={{flexDirection: "colum", alignItems: "flex-end"}}>
                <Text style={styles.part}>Parcelas: {item.installments}</Text>
                <Text style={styles.value}>R$ {item.value}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        gap: 10
    },

    text: {
        fontSize: 14,
        color: "#f4f4f4",
        fontWeight: "bold"
    },

    part: {
        fontSize: 13,
        color: "#f4f4f4",
        fontWeight: "bold"
    },

    value: {
        fontSize: 17,
        color: "#f4f4f4",
        fontWeight: "bold"
    }
});
