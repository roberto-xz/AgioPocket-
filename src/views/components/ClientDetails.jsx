
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import ClientRow from "./ClientRow";
import LoansRow from "./LoansRow";


function rederItem({ item }) {
    return (
        <LoansRow item={item}/>
    )
}

export default function ClienDetails() {
    const [client,setClient] = useState([
        { id: '1', clientName: 'João', clientChars: "JO", clientContact: ' +55 87 9.1234-1234'},
    ]);

    const [loans,setLoans] = useState([
        {id: '0',createdDate: '2023-10-01', paymentDate: '2023-10-05', installments: '5/12', value: 100.00},
        {id: '1',createdDate: '2023-10-02', paymentDate: '2023-10-06', installments: '5/12', value: 200.50},
        {id: '2',createdDate: '2023-10-03', paymentDate: '2023-10-07', installments: '5/12', value: 150.75},
        {id: '3',createdDate: '2023-10-04', paymentDate: '2023-10-08', installments: 6, value: 300.00},
        {id: '4',createdDate: '2023-10-05', paymentDate: '2023-10-09', installments: 2, value: 250.25},
        {id: '5',createdDate: '2023-10-06', paymentDate: '2023-10-10', installments: 1, value: 175.34},
        {id: '6',createdDate: '2023-10-07', paymentDate: '2023-10-11', installments: 7, value: 400.00},
        {id: '7',createdDate: '2023-10-08', paymentDate: '2023-10-12', installments: 8, value: 500.00},
        {id: '8',createdDate: '2023-10-09', paymentDate: '2023-10-13', installments: 9, value: 600.00},
        {id: '9',createdDate: '2023-10-10', paymentDate: '2023-10-14', installments: 10, value: 700.00}
    ]);

    return (
        <View style={styles.container}>
            <ClientRow item={client[0]} showButtons={false}/>
            <Text style={styles.text}>Emprestimos</Text>
            <View style={styles.loans}>
                <FlatList
                    data={loans}
                    renderItem={rederItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "50%",
        borderRadius: 10,
        shadowRadius: 3.84,
        padding: 10,
        marginTop: "5%",
        backgroundColor: "#f4f4f4"
    },

    text: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        width: "100%",
        paddingTop: 15,
        paddingBottom: 15,
    },

    loans: {
        width: "100%",
        padding: 10,
        height: "75%",
        borderRadius: 10,
        shadowRadius: 3.84,
        backgroundColor: "#242424ff"
    },
});
