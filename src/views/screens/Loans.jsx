
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native"
import Header from "../components/Header";
import ClientRowInstallments from "../components/ClientRowInstallments";
import LoansDetails from "./LoansDetails";
import { useNavigation } from "@react-navigation/native";
import FabButton from "../components/FabButton";



function RenderItem({item, navigation}) {
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("details")}}>
            <ClientRowInstallments item={item} />
        </TouchableOpacity>
    )
}

function loans() {
    const navigation = useNavigation();
    const [client,setClient] = useState([
        { id: '1', clientName: 'João', chars: "JO", createdDate: '12/12/2025', installments: '5/12', value: 100.00 },
        { id: '2', clientName: 'Maria', chars: "MA", createdDate: '11/11/2025', installments: '3/12', value: 200.50 },
        { id: '3', clientName: 'Pedro', chars: "PE", createdDate: '10/10/2025', installments: '2/12', value: 150.75 },
        { id: '4', clientName: 'Ana', chars: "AN", createdDate: '09/09/2025', installments: '6/12', value: 300.00 },
        { id: '5', clientName: 'Lucas', chars: "LU", createdDate: '08/08/2025', installments: '4/12', value: 250.25 }
    ]);

    return (
        <View style={styles.container}>
            <Header chars={"AU"} showSearchBar={false}></Header>
            <View style={styles.wallateCard}>
                <Text style={styles._tt}>Total a receber em abril </Text>
                <Text style={styles._vl}>R$ 78.000,00 </Text>
            </View>
            <Text style={styles.text}>Empréstimos ativos</Text>
            <View style={styles.clientList}>
                 <FlatList
                    data={client}
                    renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <Text style={styles.text}>Cobranças dessa semana</Text>
            <View style={styles.weekRow}>
                    <Text>Segunda</Text><Text>Terça</Text><Text>Quarta</Text>
                    <Text>Quinta</Text><Text>Sexta</Text><Text>Sábado</Text>
            </View>
            <View style={styles.clientList}>
                 <FlatList
                    data={client}
                    renderItem={({ item }) => <RenderItem item={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <FabButton/>
        </View>
    );
}

export default function Loans() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="loans" component={loans} />
            <stack.Screen name="details" component={LoansDetails} />
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#ae60fcff",
    },

    wallateCard: {
        width: "90%",
        padding: 20,
        marginTop: "5%",
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

     text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        width: "90%",
        paddingTop: 15,
        paddingBottom: 10,
     },

     clientList: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#f4f4f4",
        shadowRadius: 3.84,
     },

    weekRow: {
        width: '90%',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        backgroundColor: "#f4f4f4",
        borderRadius: 10,
        marginBottom: 10
    },
});
