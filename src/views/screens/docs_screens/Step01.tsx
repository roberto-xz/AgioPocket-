
import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"


export default function Step01() {
    const navigation = useNavigation<any>();
    return (
        <View style={{backgroundColor: "#f4f4f4", justifyContent:"center",alignItems:"center", flex: 1}}>
            <TouchableOpacity  onPress={()=>navigation.navigate("step02")}>
                <Text>1 Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}
