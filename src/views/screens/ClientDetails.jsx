
import { FontAwesome } from "@expo/vector-icons";
import { Alert, FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CircleIcon from "../components/CircleIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ClientService from "../../services/ClientService";
import ClientForm from "../components/ClientForm";
import nameToChars from "../../utils/NameToChars";
import FabButton from "../components/FabButton";
import LoanCard from "../components/LoanCard";
import LoanForm from "../components/LoanForm";
import LoanModel from "../../models/LoanModel";
import LoanService from "../../services/LoanService";
import InstallmentService from "../../services/InstallmentService";


export default function ClientDetails() {
    const navigation = useNavigation();
    const clientService = new ClientService()
    const loanService =   new LoanService()
    const instalmentService = new InstallmentService();

    const route = useRoute()

    const [editModal,setEditModal] = useState(false);
    const [LoanModal,setLoanModal] = useState(false);
    const [componentUpdate,setComponentUpdate] = useState(false);
    const {clientId, onUpdate, onDelete} = route.params;

    const [client, setClient] = useState({
        name: "Nome",
        last: "Sobre-Nome",
        email: "nome.sobrenome@email.com",
        phoneNumber: '(87) 9.1234-5678',
        sendEmails: false
    })

    const [loans, setLoans] = useState({})

    useEffect(()=> {
        const client_data = clientService.selectById(clientId);
        const loans_data  = loanService.selectByClientId(clientId);
        if (loans_data){setLoans(loans_data)}else{ setLoans({})}

        if (client_data) {
            setClient({
                name: client_data.getName,
                last: client_data.getLast,
                email: client_data.getEmail,
                phoneNumber: client_data.getPhoneNumber,
                sendEmails: (client_data.getSendEmail == "Y") ? true : false
            })
        }

    },[componentUpdate])

    const updateCL = (client)=> {
        client.setId =  clientId;
        setComponentUpdate(!componentUpdate);
        setEditModal(false);
        onUpdate(client);
    }

    const createLN = (loan)=> {
        const status = loanService.create(new LoanModel(
            clientId,loan.value,loan.date,loan.percent, loan.loans, loan.ploan
        ));

        if (status) {
            Alert.alert("Empréstimo", "Empréstimo criado com sucesso !",[{
                text: "Ok",
                onPress: () =>{
                    setComponentUpdate(!componentUpdate);
                    setLoanModal(false);
                }
            }]);
        }
    }

    const deleteLN = (loan)=>{
        Alert.alert("Remover Empréstimo","Tem certeza que deseja remover este emepréstimo?'",
            [{text: "Cancelar", style: "cancel"},{
                text: 'Sim', style: 'destructive',
                onPress: ()=>{
                    if (loanService.remove(loan.id)) {
                        Alert.alert("Sucesso", "Empréstimo removido!",[{
                            text: "Ok",
                            onPress: ()=>{
                               setComponentUpdate(!componentUpdate);
                            }
                        }]); return;
                    }
                    Alert.alert("Erro", "Não foi possível remover.");
                    return;
                }
            }]
        )
    }

    const gotoLoanDetails = (loan)=> {
        console.log(loan) // aqui chega
        navigation.navigate("loansDetails",{loan}); // aqui dentro não
    }

    return (
        <SafeAreaView style={style.page}>
            <TouchableOpacity style={style.backButton} onPress={()=> navigation.goBack()}>
                <FontAwesome name="long-arrow-left" size={20} color={"#f4f4f4"}/>
                <Text style={{color: "#f4f4f4", fontSize: 19, marginLeft: 10, fontWeight: 800}}>Perfil do Cliente</Text>
            </TouchableOpacity>

            <View style={style.userDetails}>
                <View style={style.userNameBox}>
                    <CircleIcon charSize={13} chars={nameToChars(client.name, client.last)} size={55}/>
                    <Text style={style.userName}> {client.name} {client.last} </Text>
                </View>
                <View style={style.inf}>
                    <FontAwesome name="envelope" size={20} color={"#616161"}/>
                    <Text style={style.text}>{client.email}</Text>
                </View>
                <View style={style.inf}>
                    <FontAwesome name="phone" size={20} color={"#616161"}/>
                    <Text style={style.text}>{client.phoneNumber}</Text>
                </View>
                <View style={style.inf}>
                    {
                        client.sendEmails ? <FontAwesome name="check" size={20} color={"#616161"}/> :
                        <FontAwesome name="remove" size={20} color={"#616161"}/>
                    }
                    <Text style={style.text}>Aceita receber Email?</Text>
                </View>
                <View style={style.buttons}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={()=>setEditModal(true)}>
                        <Text style={{color: "#f4f4f4"}}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={style.button}
                        onPress={()=> onDelete({id:clientId, page:"clientDetails"})}>
                        <Text style={{color: "#f4f4f4"}}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={editModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setEditModal(false)}>
                <ClientForm onCreate={updateCL} isUpdate={true} client={client}/>
            </Modal>
            <Modal
                visible={LoanModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setLoanModal(false)}>
                <LoanForm onCreate={createLN}/>
            </Modal>

            <Text style={style.label}>Emprestimos</Text>
            <View style={style.loans}>
                <FlatList
                    key={2}
                    numColumns={2}
                    data={loans}
                    renderItem={(item)=>
                        <LoanCard
                            loan={item.item}
                            onPress={(item) => gotoLoanDetails(item)}
                            onLongPress={deleteLN}
                        />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <FabButton onPress={()=> setLoanModal(!LoanModal)}></FabButton>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    page: {
        backgroundColor: "#ae60fcff",
        flex: 1,
        alignItems: "center"
    },

    backButton: {
        width: "90%",
        flexDirection: "row",
        marginTop: "10%",
        marginBottom: 20,
    },

    userDetails: {
        backgroundColor: "#f4f4f4",
        width: "95%",
        borderRadius: 20,
        padding: 10,
    },
    userNameBox:{
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: "4%"
    },
    userName: {
        fontSize: 19,
        fontWeight: 800,
        marginBottom: "2%",
        marginLeft: "2%"
    },

    text: {
        fontSize: 16,
        fontWeight: 500,
        color: "#383838ff",
        marginLeft: "3%",
        padding: 3,
    },

    inf: {
        flexDirection: "row"
    },

    buttons: {
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "2%",
        justifyContent: "space-between",
    },

    button: {
        width: "45%",
        height: 40,
        borderRadius: 10,
        backgroundColor: "#414141",
        alignItems: "center",
        justifyContent: "center"
    },

    label: {
        fontSize: 19,
        fontWeight: 500,
        color: "#f4f4f4",
        marginLeft: "3%",
        padding: 3,
        width: "95%",
        padding: 10,
    },

    loans: {
        width: "95%",
        height: "50%",
        backgroundColor: "#f4f4f4",
        borderRadius: 20
    }

});
