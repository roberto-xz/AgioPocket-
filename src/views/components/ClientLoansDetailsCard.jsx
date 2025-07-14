
import {View, Text, StyleSheet} from 'react-native';
import CircleIcon from './CircleIcon';


export default function ClientLoansDetailsCard() {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <CircleIcon size={54} charSize={16} chars={"AU"} />
                <View style={{flex: 1, marginLeft: 15}}>
                    <Text style={styles.clientName}>User test</Text>
                    <Text style={styles.loanStatus}>pago</Text>
                </View>
                <View style={{flex: 1, alignItems: "flex-end"}}>
                    <Text style={styles.loanValue}>Valor do Empréstimo</Text>
                    <Text style={styles.valuePayment}>R$ 1.000,00</Text>
                </View>
            </View>
            <Text style={styles.adress}>
                 Rua Teste, 123 - Bairro Teste, Cidade Teste - UF
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: "#f4f4f4",
        width: "90%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowRadius: 3.84,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
    },

    clientName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },

    loanStatus: {
        fontSize: 18,
        color: "seagreen",
        fontWeight: "bold",
    },

    loanValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },

    valuePayment: {
        fontSize: 14,
        color: "gray",
        fontWeight: "bold",
    },
    adress: {
        fontSize: 14,
        color: "#666",
        marginTop: 15,
        gap: 5,
    },
});
