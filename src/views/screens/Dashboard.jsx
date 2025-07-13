
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
import DashboardCards from "../components/DashboardCards";
import LineGraph from "../components/LineGraph";
import PieGraph from "../components/PieGraph";
import BarGraph from "../components/BarGraph";

export default function Dashboard() {

    return (
        <View style={styles.container}>
            <Header chars={"AU"} showSearchBar={false} />
            <DashboardCards/>
            <Text style={styles.text}>Evolução do caixa</Text>
            <LineGraph data={[20, 45, 28, 80, 99, 43, 50]} />
            <Text style={styles.text}> Distribuição Financeira</Text>
            <PieGraph/>
            <Text style={styles.text}> Distribuiçõa entre os clientes</Text>
            <BarGraph
                clientes={["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5"]}
                values={[20, 45, 28, 80, 99]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#ae60fcff"
    },

    text: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        width: "90%",
        paddingTop: 15,
        paddingBottom: 15,
    }
});
