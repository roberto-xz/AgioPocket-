import { Text, View } from "react-native";
import Header from "../components/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainCard from "../components/MainCard";


function MainScreen() {
   return (
        <View style={{flex: 1, alignItems: "center",paddingTop: "15%", backgroundColor:"#ae60fcff"}}>
            <Header chars={"RB"}></Header>
            <MainCard></MainCard>
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
