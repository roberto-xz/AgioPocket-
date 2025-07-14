
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ClientCard from "../components/ClientCard";
import { FontAwesome } from "@expo/vector-icons";
import LoanIntallmentsCard from "../components/LoanInstallmentsCard";

export default function InstallmentsHistoric() {
    return(
        <SafeAreaView style={styles.page}>
            <TouchableOpacity onPress={() => {}} style={styles.backButton}>
                <FontAwesome name="long-arrow-left" size={20} color={"#f4f4f4"}/>
                <Text style={styles.title}>Histórico de parcelas</Text>
            </TouchableOpacity>

            <View style={styles.userCard}>
                <LoanIntallmentsCard showButtons={false}/>
                <ClientCard />
            </View>
            <Text style={styles.title}>Histórico de Cobranças</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ae60fcff",
        alignItems: "center"
    },

    backButton: {
        width: "90%",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
    },

    userCard: {
        padding: 5,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        backgroundColor: "#f4f4f4",
        borderRadius: 10,
        marginBottom: 14
    },

    title: {
        width: "90%",
        color: "#f4f4f4",
        fontSize: 19,
        marginLeft: 10,
        fontWeight: 800
    }

});
