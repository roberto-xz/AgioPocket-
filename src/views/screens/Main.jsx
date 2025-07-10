
import { Image, Text, View } from "react-native"
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { StyleSheet } from "react-native";
import NextButton from "../components/NextButton";
import SkipButton from "../components/SkipButton";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Sigin from "./Sigin";

function page_manager() {
    return (
        <Onboarding
            text_h1={"Gerencie"}
            text_h2={"Clientes & Empréstimos"}
            paragraph={"Adicione e gerencie clientes com níveis de confiança"}
            page={"onboard4"}

            nextPage={"page_charges"}
            bntText={"Próximo"}
        />
    );
}

function page_charges() {
    return (
        <Onboarding
            text_h1={"Cobranças"}
            text_h2={"Automáticas com whatsapp"}
            paragraph={"Adicione e gerencie clientes com níveis de confiança"}
            page={"onboard3"}
            nextPage={"page_visuals"}
            bntText={"Próximo"}
        />
    );
}

function page_visuals() {
    return (
        <Onboarding
            text_h1={"Acompanhe"}
            text_h2={"parcelas dos empréstimos"}
            paragraph={"Adicione e gerencie clientes com níveis de confiança"}
            page={"onboard2"}
            nextPage={"page_dashbrd"}
            bntText={"Próximo"}
        />
    );
}

function page_dashbrd() {
    return (
        <Onboarding
            text_h1={"Dashboard"}
            text_h2={"Disponível para analize"}
            paragraph={"Adicione e gerencie clientes com níveis de confiança"}
            page={"onboard1"}
            nextPage={"page_login"}
            bntText={"Próximo"}
        />
    );
}

function Start() {
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <Image
                source={require('../../../assets/icons/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.slogan}>
                Conheça o AgioPocket, seu App para
                Agiotagem moderna e cobrança sincera !
            </Text>
            <NextButton title="Conhecer" action={()=>navigation.navigate("page_manager")}/>
            <SkipButton title="Pular introdução" action={()=>navigation.reset({index: 1, routes:[{name:"page_login"}]})} />
        </View>
    );
}

export default function Main() {
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen name="start" component={Start}/>
                <stack.Screen name="page_manager" component={page_manager}/>
                <stack.Screen name="page_charges" component={page_charges}/>
                <stack.Screen name="page_visuals" component={page_visuals}/>
                <stack.Screen name="page_dashbrd" component={page_dashbrd}/>
                <stack.Screen name="page_login" component={Login}/>
                <stack.Screen name="page_sigin" component={Sigin}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ae60fcff",
        flex: 1, justifyContent: "center",
        alignItems: "center"
    },

    image: {width: "35%"},
    slogan: {
        width: 330, color: "#f1f1f1",
        fontSize: 18, fontWeight: 700,
        textAlign: "center", marginTop: 20
    },
});
