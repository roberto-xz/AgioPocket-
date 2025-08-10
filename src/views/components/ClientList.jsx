
import { Alert, FlatList, StyleSheet, View} from "react-native";
import ClientRow from "./ClientRow";
import { useNavigation } from "@react-navigation/native";

function deleteClient({clientId,onDelete}) {
    onDelete({id:clientId, page:"clientList"});
}

function renderItem({item, navigation, onDelete, onUpdate}) {
    const clientId = item.id;
    return (
         <ClientRow
            client={item}
            press={()=>navigation.navigate("clientDetails",{clientId,onUpdate,onDelete})}
            longPress={() => deleteClient({clientId,onDelete})}
        />
    );
}

export default function ClientList({clients, onDelete, onUpdate}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList
                data={clients}
                renderItem={({ item }) => renderItem({ item, navigation, onUpdate,onDelete })}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "69%",
        padding: 10,
        borderRadius: 10,
        shadowRadius: 3.84,
        backgroundColor: "#f4f4f4"
    },

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
