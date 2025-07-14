
import { StyleSheet, View, Text } from "react-native";
import CircleIcon from "./CircleIcon";

export default function ClientCard() {
    return (
        <View style={styles.page}>
            <View style={styles.userDetails}>
                <CircleIcon charSize={13} size={45} chars={"AU"} bgcolor={"#f4f4f4"} fgcolor={"#313131"}/>
                <View style={{marginLeft: "5%"}}>
                    <Text style={styles.textRow}>Client name</Text>
                    <Text style={styles.textRow}>endereço</Text>
                </View>
            </View>

            <Text style={styles.installments}>Parcelas 1/12</Text>
            <Text style={styles.textRow}>Valor total..: R$ 78.000,00</Text>
            <Text style={styles.textRow}>Valor quitado: R$ 10.800,28</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        width: "48%",
        backgroundColor: "#313131",
        borderRadius: 10,
        padding: 5,
    },

    userDetails: {
        flexDirection: "row",
        width: "100%",
        padding: 2,
        alignItems: "center",
    },

    textRow: {
        width: "100%",
        color: "#f4f4f4"
    },

    installments: {
        width: "100%",
        color: "#f4f4f4",
        marginTop: "5%",
        marginBottom: "8%",
        borderBottomColor: "#c3c3c3",
        borderBottomWidth: 1
    }
});
