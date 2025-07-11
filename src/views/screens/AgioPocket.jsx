import { Text, View } from "react-native";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


function MainScreen() {
   return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"#ae60fcff"}}>
            <Header chars={"RB"}></Header>
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
            backgroundColor: "#000"
        }
    }

    return (
        <Tabs.Navigator screenOptions={tabBarOptions}>
            <Tabs.Screen name="Home" component={MainScreen} />
        </Tabs.Navigator>
    );
}
