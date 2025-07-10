
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function SkipButton({title,action}) {
    return(
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "75%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    text: {
        color: "#f1f1f1",
        fontSize: 18
    }
});
