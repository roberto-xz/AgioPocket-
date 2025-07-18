import { StyleSheet, Text, TextInput, View } from "react-native";
import CircleIcon from "./CircleIcon";
import SearchInput from "./SearchInput";
import UserService from "../../services/UserService";
import nameToChars from "../../utils/NameToChars";

function getUserData() {
    const userService = new UserService();
    const userModel = userService.getUser();

    if (userModel)
        return {
            userChar: nameToChars(userModel.getName,userModel.getLast),
            userName: userModel.getName+" "+userModel.getLast
        }

    return {userChar: "UD",userName: "undefined"}
}

export default function Header({showSearchBar}) {
    const userData = getUserData();
    return(
        <View style={styles.header}>
            <View  style={styles.userInfo}>
                <CircleIcon chars={userData.userChar} size={49} charSize={16}/>
                <Text style={styles.userName}>
                    <Text style={styles.hiText}>Olá. </Text>
                    {userData.userName}
                </Text>
            </View>
            {showSearchBar && <SearchInput />}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "90%",
        justifyContent: "center",
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
        paddingBottom: 10,
    },

    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    hiText: {
        fontSize: 20,
        color: "#f4f4f4",
        fontWeight: "bold"
    },

    userName: {
        fontSize: 18,
        color: "#f4f4f4",
        fontWeight: "bold"
    }
});
