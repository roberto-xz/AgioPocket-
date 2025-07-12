
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native"
import Header from "../components/Header";
import ClientList from "../components/ClientList";
import ClientDetails from "../components/ClientDetails";

function client() {
    return (
        <View style={styles.container}>
            <Header chars={"AU"} showSearchBar={true}></Header>
            <Text style={styles.text}>Clientes</Text>
            <ClientList />
            <ClientDetails />
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
