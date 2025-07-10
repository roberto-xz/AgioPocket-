
import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"


export default function Step02() {
    const navigation = useNavigation<any>();
    return (
        <View style={{backgroundColor: "#f4f4f4", justifyContent:"center",alignItems:"center", flex: 1}}>
            <TouchableOpacity  onPress={()=>navigation.navigate("step00")}>
                <Text>2 Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}
