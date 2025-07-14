
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native"
import ClientLoansDetailsCard from "../components/ClientLoansDetailsCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';
import LoanIntallmentsCard from "../components/LoanInstallmentsCard";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InstallmentsHistoric from "./InstallmentsHistoric";


function loansDetails() {
    const [dados, setDados] = useState([
        { id: '1', clientName: 'João', clientChars: "JO", data: '2023-10-01', value: 100.00 },
        { id: '2', clientName: 'Maria', clientChars: "MA", data: '2023-10-02', value: 200.50 },
        { id: '3', clientName: 'Pedro', clientChars: "PD", data: '2023-10-03', value: 150.75 },
        { id: '4', clientName: 'Ana', clientChars: "AN", data: '2023-10-04', value: 300.00 },
        { id: '1', clientName: 'João', clientChars: "JO", data: '2023-10-01', value: 100.00 },
    ]);

    return (
        <SafeAreaView style={styles.page}>
            <TouchableOpacity style={styles.backButton} onPress={() => {}}>
                <FontAwesome name="long-arrow-left" size={20} color={"#f4f4f4"}/>
                <Text style={{color: "#f4f4f4", fontSize: 19, marginLeft: 10, fontWeight: 800}}>Emprestimo #12</Text>
            </TouchableOpacity>
            <ClientLoansDetailsCard/>
            <Text style={styles.title}>Parcelas</Text>

            <View style={{width: "90%", height: "70%"}}>
                <FlatList
                    key={2}
                    data = {dados}
                    renderItem={(item) => <LoanIntallmentsCard data={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </View>


        </SafeAreaView>
    );
}


export default function LoansDetails() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="details" component={loansDetails} />
            <stack.Screen name="installmentsHistoric" component={InstallmentsHistoric} />
        </stack.Navigator>
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

    title: {
        width: "90%",
        fontSize: 24,
        fontWeight: "bold",
        color: "#f4f4f4",
        marginTop: 14,
        marginBottom: 10,
    },
});
