
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";


export default function UserNameInput({onChange}) {

    return (
        <View style={styles.child}>
            <FontAwesome name="user" size={25} color={"#cecece"}/>
            <TextInput
                style={styles.input}
                placeholder='Nome de usuário'
                onChangeText={onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    child: {
        backgroundColor: "#f4f4f4",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#616161",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: "76%", height: 55
    },

    input: {
        flex: 1,
        marginLeft: "5%",
        fontSize: 18,
    }
})
