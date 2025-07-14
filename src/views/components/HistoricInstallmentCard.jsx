import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


export default function HistoricInstallmentCard() {
    return (
        <View style={styles.card}>
            <View style={styles.head}>
                <Text style={styles.headText}>Cobrança #1</Text>
                <Text style={styles.headText}>10/10/2025 15:34 PM</Text>
            </View>
            <Text style={styles.rowText}>Anotações</Text>
            <Text style={styles.textBlock}>
                Sem comentários, ele não estava em casa, e fui muito mal recebido por sua esposa,
                onde a mesma desferio palavras de cunho ofenciso, ensinuando que eu tomas agua no seu..
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <FontAwesome name="eye" size={20} color={"#cecece"}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="edit" size={20} color={"#cecece"}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="trash" size={20} color={"#cecece"}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#313131",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },

    head: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    headText:{
        color: "#f4f4f4",
        fontSize: 14,
        fontWeight: "800",
    },

    buttons: {
        flexDirection: "row",
        gap: 30,
        marginTop: "5%",
        marginBottom: "1%",
        justifyContent: "flex-end",
    },

    rowText: {
        color: "#f4f4f4",
        fontSize: 14,
        fontWeight: "800",
        marginTop: 12,
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomColor: "#c3c3c3",
        borderBottomWidth: 2,
    },

    textBlock: {
        color: "#f4f4f4",
        fontSize: 13,
        fontWeight: "800",
        textAlign: "justify",
        marginTop: 12,
        borderBottomColor: "#c3c3c3",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    }
});
