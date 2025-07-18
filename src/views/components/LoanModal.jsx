
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import ClientService from "../../services/ClientService";
import LoanDao from "../../daos/LoanDao";
import LoanModel from "../../models/LoanModel";
import InstallmentsModel from "../../models/InstallmentModel";
import InstallmentDao from "../../daos/InstallmentDao";


function createLoan(data) {
    const loanDao = new LoanDao();
    const loanModel =  new LoanModel(
        data.clientId,
        data.value,
        data.firstInstallmentDate,
        data.percentual,
        data.installMentsCount
    );
    const status = loanDao.insert(loanModel);

    if (status) {
        // gerar as parcelas aqui
        const installment = new InstallmentsModel(status,1,78,"paga","10-20-2025");
        const installmentDao = new InstallmentDao();

        if (installmentDao.insert(installment)) {
            Alert.alert("Novo empréstimo", "Novo empréstimo adicionado !");
            console.log(installment)
            return;
        }
    }
}
export default function LoanModal({onPress}) {
    const [clients, setClients] = useState([{
        clientId: "",
        clientName: "",
    }]);

    const [loan, setLoan] = useState({
        clientId: 0, value: 0,
        firstInstallmentDate: "",
        percentual: 0,
        installMentsCount: 0
    });

    useEffect(()=>{
        const clientService = new ClientService();
        const data = clientService.selectAll();
        if (data != null) {
            const clients = [];
            for (const client of data) {
                clients.push({
                    clientId: client.getId,
                    clientName: client.getFullName
                })
            }
            setClients(clients);
            return;
        }
    },[]);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Cliente</Text>

                <Picker style={{backgroundColor: "#f4f4f4"}}
                    selectedValue={0}
                    onValueChange={(id,_)=> setLoan(prev =>({...prev,clientId: id}))}>

                    {clients.map((x) => (
                        <Picker.Item key={x.clientId} label={x.clientName} value={x.clientId} />
                    ))}
                </Picker>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Valor total</Text>
                        <TextInput
                            style={styles.textInput}
                            value={loan.value}
                            onChangeText={(v)=> setLoan(prev =>({...prev, value:v}))}
                        />
                    </View>

                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>N° de parcelas</Text>
                        <TextInput
                            style={styles.textInput}
                            value={loan.installMentsCount}
                            onChangeText={(v)=> setLoan(prev =>({...prev, installMentsCount:v}))}
                        />
                    </View>
                </View>

                <View style={styles.towBlock}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Data 1° parcela</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={{width: "45%"}}>
                        <Text style={styles.title}>Percentual</Text>
                        <TextInput
                            style={styles.textInput}
                            value={loan.percentual}
                            onChangeText={(v)=> setLoan(prev =>({...prev, percentual:v}))}
                        />
                    </View>
                </View>

                <Text>Valor das parcelas: R$ 12.00 </Text>
                <Text>Valor+percentual..: R$ 12.00 </Text>

                <TouchableOpacity  onPress={() => createLoan(loan)}
                style={styles.button}>
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
