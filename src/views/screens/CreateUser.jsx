
import { Alert, Image, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import UserNameInput from "../components/UserNameInput";
import { useState } from "react";
import NextButton from "../components/NextButton";
import MoneyInput from "../components/MoneyInput";
import UserService from "../../services/UserService";


function createAccount(name, money, navigation) {
    const userService = new UserService();
    if (name.split(" ").length > 1 ) {
        const userFName = name.split(" ")[0];
        const userSName = name.split(" ")[1];

        userService.create(userFName,userSName,money);
        navigation.reset({index: 1, routes:[{name:"AgioPocket"}]})
        return;
    }
    Alert.alert("Novo usuário","Error ao criar usuário");
    return
}

export default function CreateUser() {
    const navigation = useNavigation()
    const [userName,setUserName] = useState("");
    const [userMony,setUserMony] = useState(0);

    return (
        <View style={styles.page}>
            <Image
                source={require('../../../assets/icons/logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.slogan}>
                Criar Usuário
            </Text>

            <UserNameInput onChange={setUserName} placeholder="Nome e sobre-nome"/>
            <MoneyInput onChange={setUserMony}/>

            <NextButton title={"Criar usuário"} action={()=>createAccount(userName,userMony,navigation)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: "center",
        paddingTop: "40%",
        backgroundColor: "#ae60fcff",
    },

    image: {
        width: 100,
        height: 100,
    },

    slogan: {
        width: "100%",
        color: "#f1f1f1",
        fontSize: 35,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 10
    },
});
