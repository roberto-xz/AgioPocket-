import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function MainCard({ballance}) {
    return (
        <>
        <View style={styles.card}>
            <Text style={styles.wallate}>
                {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                }).format(ballance)}
            </Text>

            <Text style={styles.date}>Última atualização 12/12/2025</Text>
            <View style={styles.options}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="home" size={25} color={"#cecece"}/>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.wallateCards}>
            <View style={styles.wallateCard}>
                <Text style={styles._tt}>Total a receber </Text>
                <Text style={styles._vl}>R$ 78.000,00 </Text>
            </View>
            <View style={styles.wallateCard}>
                <Text style={styles._tt}>Total emprestado</Text>
                <Text style={styles._vl}>R$ 78.000,00 </Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        shadowRadius: 3.84,
        marginTop: 30
    },

    wallate: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 12
    },

    date: {
        fontSize: 16,
        color: "#888",
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        paddingBottom: 10,
    },

    options: {
        backgroundColor: "#000",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        borderRadius: 20,
        padding: 20,
        shadowRadius: 3.84,
    },

    wallateCards: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginTop: 20
    },

    wallateCard: {
        width: "48%",
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#f4f4f4",
        shadowRadius: 3.84,
    },

    _tt: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 4
    },

    _vl: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
});
