
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Modal, StyleSheet, Text, View } from "react-native"
import Header from "../components/Header";
import ClientList from "../components/ClientList";
import ClientDetails from "../components/ClientDetails";
import FabButton from "../components/FabButton";
import { useEffect, useState } from "react";
import ClientModal from "../components/ClientModal";

function client() {
    const [userModal,setUserModal] = useState(false);

    return (
        <View style={styles.container}>
            <Header showSearchBar={true}></Header>
            <Text style={styles.text}>Clientes</Text>
            <ClientList />
            <ClientDetails />
            <Modal
                visible={userModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setUserModal(false)} // botão voltar do android
            >
                <ClientModal />
            </Modal>
            <FabButton onPress={()=> setUserModal(true)}/>
        </View>
    );
}

export default function Client() {
    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="client" component={client} />
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#ae60fcff"
    },

    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        width: "90%",
        paddingTop: 15,
        paddingBottom: 15,
    }
});
