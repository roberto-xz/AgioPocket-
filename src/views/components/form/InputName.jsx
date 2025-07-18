
import { StyleSheet, TextInput, View } from "react-native"


export default function InputName() {
    return(
        <View style={styles.box}>
            <TextInput style={styles.input} placeholder="Nome"></TextInput>
            <TextInput style={styles.input} placeholder="Sobre nome"></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: "100%",
        flexDirection: "row",
        //borderColor: "#616161",
        //borderWidth: 1,
        gap: 6
    },

    input: {
        width: "49.4%",
        padding: 10,
        fontSize: 19,
        borderRadius: 10,
        backgroundColor: "#c3c3c3"
    }
});
