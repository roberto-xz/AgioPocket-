
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";


export default function LoanIntallmentsCard({showButtons = true}) {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.installments}>1° Parcela</Text>
                <Text style={styles.installments}>78,00 R$</Text>
            </View>
            <Text style={styles.installmentsDate}>data vencimento: 20/10/2023</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10,marginTop: 10}}>
                <Text style={styles.status}>Status: <Text style={{color: "red"}}>Devendo</Text> </Text>
                <Text style={styles.status}>Tentativas: <Text style={{color: "gray"}}>4x</Text></Text>
            </View>

            {showButtons &&
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <TouchableOpacity style={styles.bnt}>
                        <Text style={styles.bntText}>Cobrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bnt} onPress={()=>navigation.navigate("installmentsHistoric")}>
                        <Text style={styles.bntText}>Histórico</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "48%",
        backgroundColor: "#f4f4f4",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 10,
        marginTop: 10,
    },

    installments: {
        fontSize: 13,
        fontWeight: "bold",
    },

    installmentsDate: {
        fontSize: 13,
        color: "#313131",
        marginTop: 5,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        paddingBottom: 5,
    },

    status: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
        marginBottom: 10,
    },

    bnt: {
        width: "48%",
        height: 30,
        backgroundColor: "#313131",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    bntText: {
        color: "#f1f1f1",
        fontSize: 13,
    }
});
