
import { useNavigation } from "@react-navigation/native"
import { Text, View, Image } from "react-native"
import NextButton from "../components/NextButton";
import { StyleSheet } from "react-native";

export default function Onboarding({text_h1,text_h2,paragraph,page, nextPage, bntText}) {
    const navigation = useNavigation();

    const images = {
        onboard1: require("../../../assets/images/image_01.png"),
        onboard2: require("../../../assets/images/image_02.png"),
        onboard3: require("../../../assets/images/image_03.png"),
        onboard4: require("../../../assets/images/image_04.png"),
    };
    return (
        <View style={styles.page}>
            <View style={{marginLeft: 50}}>
                <Text style={styles.text_h1}>{text_h1}</Text>
                <Text style={styles.text_h2}>{text_h2}</Text>
            </View>
            <Image
                source={images[page]}
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.text_p}> {paragraph}</Text>
            <NextButton title={bntText} action={()=>navigation.navigate(nextPage)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ae60fcff", flex: 1,
        justifyContent: "center",
    },

    image: {
        width: 250, height: 250,
        alignSelf: "center",
        marginTop: 30,
    },

    text_h1: {
        fontSize: 58, fontWeight: 800,
        color: "#f4f4f4"
    },

    text_h2: {
        fontSize: 28, fontWeight: 800,
        color: "#f4f4f4"
    },

    text_p: {
        width: "80%",fontSize: 19,
        color: "#f4f4f4",alignSelf: "center",
    },

    button_jump: {
        width: 330,marginTop: 10,
        height: 50,justifyContent: "center",
        alignItems: "center"
    },

     button_next: {
        backgroundColor: "#000",
        borderRadius: 10,
        width: "80%",marginTop: 70,
        height: 50, justifyContent: "center",
        alignItems: "center", alignSelf: "center"
    },

    button_next_text: {
        color: "#f1f1f1", fontSize: 18
    }
});
