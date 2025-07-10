
import { Image, Text, TouchableOpacity, View } from "react-native"
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { main_styles } from "../styles/main_styles";
import Step01 from "./docs_screens/Step01";
import Step02 from "./docs_screens/Step02";


function Start() {
    const styles = main_styles;
    const navigation = useNavigation<any>();

    return (
        <View style={styles.page}>
            <Image
                source={require('./icons/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.slogan}>Agiotagem moderna, cobrança sincera !</Text>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("step01")}>
                <Text style={styles.button_text}> Avançar </Text>
            </TouchableOpacity>
        </View>
    );
}

export default function Main() {
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name="step00" component={Start}/>
                <stack.Screen name="step01" component={Step01}/>
                <stack.Screen name="step02" component={Step02}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}
