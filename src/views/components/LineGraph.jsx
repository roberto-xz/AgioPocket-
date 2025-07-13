
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function LineGraph({data}) {
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const screenWidth = Dimensions.get("window").width;
    const chartWidth = screenWidth * 0.9;

    return (
        <LineChart style={{borderRadius: 16 }}
            data={{
                labels: monthNames,
                datasets: [{ data }]
            }}
            width={chartWidth}
            height={220}
            chartConfig={{
                backgroundColor: "#717171",
                backgroundGradientFrom: "#616161",
                backgroundGradientTo: "#616161",
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
        />
    );
}
