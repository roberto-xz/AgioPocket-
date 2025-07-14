
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function FabButton({onPress}) {
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <FontAwesome name="plus" size={20} color={"#cecece"}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        // opacity: .7,
        right: "10",
        bottom: "10%",
        elevation: 6,
        width: 65,
        height: 65,
        borderRadius: 65/2,
        backgroundColor: "#313131",
        justifyContent: "center",
        alignItems: "center"
    }
});
