
import { Image, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import UserNameInput from "../components/UserNameInput";
import { use, useState } from "react";
import UserPassInput from "../components/UserPassInput";
import NextButton from "../components/NextButton";
import SkipButton from "../components/SkipButton";
import UserController from "../../controllers/UserController";

function _login(userName,userPass, navigation) {
    const userController = new UserController();
    navigation.reset({index: 1, routes:[{name:"AgioPocket"}]});
    return;


    try {
        userController.login(userName, userPass);
        navigation.reset({index: 1, routes:[{name:"AgioPocket"}]});
    }

    catch (error) {
        console.error("Login failed:", error.message);
    }
}


export default function Login() {
    const navigation = useNavigation()
    const [userName,setUserName] = useState();
    const [userPass,setUserPass] = useState();

    return (
        <View style={styles.page}>
            <Image
                source={require('../../../assets/icons/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.slogan}>
                Gerenciado emprestimos com confiança
            </Text>

            <UserNameInput onChange={setUserName}/>
            <UserPassInput onChange={setUserPass}/>
            <NextButton title={"Entrar"} action={()=>_login(userName,userPass,navigation)}/>
            <SkipButton title={"Criar uma conta"} action={()=>navigation.navigate("page_sigin")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ae60fcff",
        flex: 1,
        alignItems: "center"
    },

    image: {
        width: "30%",
        marginTop: "20%"
    },
    slogan: {
        width: 310, color: "#f1f1f1",
        fontSize: 22, fontWeight: 700,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
});
