import { View, Text, StyleSheet } from "react-native";


export default function LoanCard() {
    return (
        <View style={style.card}>
            <View style={style.head}>
                <Text style={style.price}>R$ 78,000,12</Text>
                <Text style={style.loans}>20 parcelas</Text>
            </View>
            <Text style={style.date}>1° parcela 12/12/2025</Text>
            <View style={{backgroundColor: "gray", width: "100%", height: 15, borderRadius: 100}}>
                <View style={{backgroundColor: "#313131", width: "90%", height: 15, borderRadius: 100}}></View>
            </View>
            <Text style={style.percent}>90%</Text>
        </View>
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
        marginBottom: "10%"
    },

    percent: {
        width: "100%",
        textAlign: "right",
        marginTop: "3%",
        fontSize: 16,
        fontWeight: 300,
    }
});
