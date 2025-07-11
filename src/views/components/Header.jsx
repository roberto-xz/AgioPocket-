import { StyleSheet, Text, TextInput, View } from "react-native";
import CircleIcon from "./CircleIcon";
import SearchInput from "./SearchInput";



export default function Header({chars, UserName="Admin-User",showSearchBar, action}) {
    return(
        <View style={styles.header}>
            <View  style={styles.userInfo}>
                <CircleIcon chars={chars || "US"} size={59} charSize={23}/>
                <Text style={styles.userName}><Text style={styles.hiText}>Olá.  </Text>{UserName}</Text>
            </View>
            {showSearchBar && <SearchInput />}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "90%",
        justifyContent: "center",
        borderBottomColor: "#f4f4f4",
        borderBottomWidth: 2,
        paddingBottom: 10,
    },

    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    hiText: {
        fontSize: 29,
        color: "#f4f4f4",
        fontWeight: "bold"
    },

    userName: {
        fontSize: 23,
        color: "#f4f4f4",
        fontWeight: "bold"
    }
});
