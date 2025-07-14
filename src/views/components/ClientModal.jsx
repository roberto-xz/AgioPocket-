
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ClientModal({onPress}) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Nome e sobrenome</Text>
                <TextInput style={styles.textInput}></TextInput>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Cpf</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Data de nascimento</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Cidade</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Bairro</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Rua</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>N° casa</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Email</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Whatsapp</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>

                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.textButton}> Criar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '95%',
    },

    title: {
        fontSize: 17,
        fontWeight: "800",
        marginTop: 10,
        marginBottom: 5
    },

    towBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textInput: {
        backgroundColor: "#f4f4f4",
        borderWidth: 1,
        borderColor: "#313131",
        borderRadius: 5,
        marginTop: 5,
        fontSize: 19,
        marginBottom: 10,
        padding: 10
    },

     button: {
        backgroundColor: "#000",
        borderRadius: 10,
        width: "100%",
        marginTop: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    textButton: {
        color: "#f1f1f1",
        fontSize: 18
    }
})
