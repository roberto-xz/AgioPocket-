import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";


export default function HistoricInstallmentCard() {
    return (
        <View>
            <Text>
                <Text>Cobrança #1</Text>
                <Text>10/10/2025 15:34 PM</Text>
            </Text>
            <Text>Anotações</Text>
            <Text>
                Sem comentários, ele não estava em casa, e fui muito mal recebido por sua esposa,
                onde a mesma desferio palavras de cunho ofenciso, ensinuando que eu tomas agua no seu..
            </Text>
            <View>
                <TouchableOpacity>
                    <FontAwesome name="view" size={20} color={"#cecece"}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="edit" size={20} color={"#cecece"}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="trash" size={20} color={"#cecece"}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
