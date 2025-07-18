

import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CircleIcon from "./CircleIcon";

export default function ClientRow({client, press, longPress}) {
    if (client) // resolve um bug estranho, somente aqui, o array chega uma linha undefined
        return (
            <TouchableOpacity style={styles.item} onPress={press} onLongPress={longPress}>
                <CircleIcon chars={client.char || "UN"} size={44}/>
                <View>
                    <Text style={{ fontSize: 19, fontWeight: "bold" }}>
                        {client.name || "Uknow Name"}
                    </Text>
                    <Text style={{ fontSize: 16, color: "#888" }}>
                        {client.contact || "87 9.1234-1234" }
                    </Text>
                </View>
            </TouchableOpacity>
        );
}


const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        alignItems: 'flex-end',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cecece",
        gap: 10
    },

    options: {
        flex: 1,
        textAlign: 'right',
    }
});
