
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainCard from "../components/MainCard";
import RecentPayments from "../components/RecentPayments";

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
            borderRadius: 30,
            height: 90,
            backgroundColor: "#000"
        }
    }

    return (
        <Tabs.Navigator screenOptions={tabBarOptions}>
            <Tabs.Screen name="Home_0" component={MainScreen} />
            <Tabs.Screen name="Home_1" component={MainScreen} />
            <Tabs.Screen name="Home_2" component={MainScreen} />
            <Tabs.Screen name="Home_3" component={MainScreen} />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        // justifyContent: "center",
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
