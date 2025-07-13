
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainCard from "../components/MainCard";
import RecentPayments from "../components/RecentPayments";
import Client from "./Client";
import Loans from "./Loans";
import Dashboard from "./Dashboard";

function MainScreen() {
   return (
        <View style={styles.container}>
            <Header chars={"AU"} showSearchBar={false}></Header>
            <MainCard></MainCard>
            <Text style={styles.text}>Movimentações recentes</Text>
            <RecentPayments />
        </View>
    );
}

export default function AgioPocket() {
    const Tabs = createBottomTabNavigator();
    const tabBarOptions = {
        headerShown: false,
        tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
            height: 90,
            backgroundColor: "#000"
        }
    }

    return (
        <Tabs.Navigator screenOptions={tabBarOptions} mainScreen="Home">
            <Tabs.Screen name="Clientes" component={Client} />
            <Tabs.Screen name="Home" component={MainScreen} />
            <Tabs.Screen name="Empréstimos" component={Loans} />
            <Tabs.Screen name="Dashboard" component={Dashboard} />
        </Tabs.Navigator>
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
