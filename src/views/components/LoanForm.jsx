
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function LoanForm({onCreate}) {
    const [fmtPrice, setFmtPrice] = useState(0);
    const [fmtPloan, setFmtPloan] = useState(0);

    const [data,setData] = useState({
        value: "", date:  "",
        loans: 1,  percent: 0,
        ploan: 0, price: 0
    });

    useEffect(() => {
        let price = Number(parseFloat(data.percent) * parseFloat(data.value) / 100 + parseFloat(data.value)).toFixed(2)
        let ploan = Number(price/parseFloat(data.loans)).toFixed(2);
        price = isNaN(price) ? 0 : price;
        ploan = isNaN(ploan) ? 0 : ploan;

        setFmtPrice(new Intl.NumberFormat("pt-BR",{style: 'currency',currency: 'BRL'}).format(price));
        setFmtPloan(new Intl.NumberFormat("pt-BR",{style: 'currency',currency: 'BRL'}).format(ploan));

        setData(prev => ({ ...prev, price: price}));
        setData(prev => ({ ...prev, ploan: ploan}));

    }, [data.percent, data.value, data.loans]);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.loans}>
                    <View>
                        <Text style={styles.text}>Parcelas </Text>
                        <Text style={styles.price}>{data.loans}x {fmtPloan} </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Lucro final </Text>
                        <Text style={styles.price}>{fmtPrice} </Text>
                    </View>
                </View>
                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Valor P/Empréstimo</Text>
                        <TextInput
                            value={data.value}
                            onChangeText={(v)=> setData(prev =>({...prev, value:v}))}
                            style={styles.textInput}
                        />
                    </View>

                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>N°/ Parcelas</Text>
                        <TextInput
                            value={data.loans}
                            onChangeText={(v)=> setData(prev =>({...prev, loans:v}))}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Data 1° parcela</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(v)=> setData(prev =>({...prev, date:v}))}
                        />
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Porcentual/Juros</Text>
                        <TextInput
                            onChangeText={(v)=> setData(prev =>({...prev, percent:v}))}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <TouchableOpacity  onPress={() => onCreate(data)}
                style={styles.button}>
                    <Text style={styles.textButton}> Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        backgroundColor: '#fff',
        padding: 20,
        elevation: 7,
        borderRadius: 10,
        width: '90%',
    },

    title: {
        fontSize: 17,
        fontWeight: "800",
        marginTop: 10,
        marginBottom: 5
    },

    towBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textInput: {
        backgroundColor: "#f4f4f4",
        borderWidth: 1,
        borderColor: "#313131",
        borderRadius: 5,
        marginTop: 5,
        fontSize: 19,
        fontSize: 17,
        marginBottom: 10,
    },

     button: {
        backgroundColor: "#000",
        borderRadius: 10,
        width: "100%",
        marginTop: "8%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    textButton: {
        color: "#f1f1f1",
        fontSize: 18
    },

    loans: {
        marginTop: "5%",
        marginBottom: "5%",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingBottom: 5,
        borderBottomColor: "#c3c3c3",
        borderBottomWidth:  1,
    },

    text: {
        fontSize: 19,
        fontWeight: 600,
    },

    price: {
        fontSize: 19,
        fontWeight: 300,
    }
})




