import { Text, View } from "react-native";

export default function CircleIcon({ chars, size = 24,charSize, bgcolor = "#000", fgcolor = "#fff" }) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: bgcolor,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text style={{color: fgcolor, fontSize: charSize}}>{chars}</Text>
        </View>
    );
}
