

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CircleIcon from "./CircleIcon";
import { FontAwesome } from "@expo/vector-icons";

export default function ClientRow({ item, showButtons = true }) {
    return (
        <View style={styles.item}>
            <CircleIcon chars={item.clientChars} size={44}/>
            <View>
                <Text style={{ fontSize: 19, fontWeight: "bold" }}>{item.clientName}</Text>
                <Text style={{ fontSize: 16, color: "#888" }}>{item.clientContact}</Text>
            </View>
            {showButtons &&
                <Text style={styles.options}>
                    <TouchableOpacity>
                        <FontAwesome name="trash" size={25} color={"#818181"} style={{marginRight: 20}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <FontAwesome name="edit" size={25} color={"#818181"} style={{marginRight: 10}}/>
                    </TouchableOpacity>
                </Text>
            }
        </View>
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
