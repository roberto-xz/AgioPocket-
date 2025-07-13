
import { View, Text, StyleSheet } from "react-native";

export default function DashboardCards() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Total recebido</Text>
                <Text style={{color: "seagreen", fontWeight: "700", fontSize: 15}}>R$ 89.000,12 </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Total em aberto</Text>
                <Text style={{color: "#a7a126ff", fontWeight: "700", fontSize: 15}}>R$ 89.000,12</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Lucro estimado</Text>
                <Text style={{color: "#ca7631ff", fontWeight: "700", fontSize: 15}}>R$ 89.000,12</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "5%",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        backgroundColor: "#ae60fcff",
    },

    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
    },

    title: {
        fontSize: 15,
        fontWeight: "bold",
    },
});
