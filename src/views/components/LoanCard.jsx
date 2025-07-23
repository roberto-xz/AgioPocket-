import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function LoanCard({onPress, onLongPress, loan}) {
    return (
        <TouchableOpacity
            style={style.card}
            onPress={()=>onPress(loan)}
            onLongPress={()=>onLongPress(loan)}
        >
            <View style={style.head}>
                <Text style={style.price}>
                    {new Intl.NumberFormat("pt-BR",{style: 'currency',currency: 'BRL'}).format(loan.value)}
                </Text>
                <Text style={style.loans}>{loan.loans} parcelas</Text>
            </View>
            <Text style={style.date}>1° parcela {loan.date}</Text>
        </TouchableOpacity>
    );
}


const style = StyleSheet.create({
    card: {
        width: "46%",
        backgroundColor: "#efefefff",
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        margin: 10,
    },

    head: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    price: {
        fontSize: 18,
        fontWeight: 800,
    },

    loans: {
        fontSize: 18,
        fontWeight: 500,
    },
    date: {
        fontSize: 16,
        fontWeight: 300,
        marginBottom: "4%",
        marginTop: "5%"
    },

    percent: {
        width: "100%",
        textAlign: "right",
        marginTop: "3%",
        fontSize: 16,
        fontWeight: 300,
    }
});
