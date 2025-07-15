
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function LoanModal({onPress}) {
    const [user, setUser] = useState("");

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Cliente</Text>
                <Picker style={{backgroundColor: "#c3c3c3"}}
                    selectedValue={user}
                    onValueChange={(userName,_)=> setUser(userName)}
                >
                    <Picker.Item label="Teste 1" value="roberto" />
                    <Picker.Item label="Teste 2" value="joao" />
                    <Picker.Item label="Teste 3" value="maria" />
                </Picker>
                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Valor total</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>N° de parcelas</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>
                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Data 1° parcela</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Percentual</Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                </View>
                <Text>Valor das parcelas: R$ 12.00 </Text>
                <Text>Valor+percentual..: R$ 12.00 </Text>
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
        width: '90%',
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
        marginTop: "8%",
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
