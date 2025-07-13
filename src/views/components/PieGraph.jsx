import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';



export default function PieGraph() {
    const screenWidth = Dimensions.get("window").width;
    const chartWidth = screenWidth * 0.9;
    const data = [
        {
        name: "Lucro",
        population: 4000,
        color: "#4CAF50",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
        },
        {
        name: "Emprestado",
        population: 2500,
        color: "#F44336",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
        },
        {
        name: "Em Caixa",
        population: 3500,
        color: "#2196F3",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
        }
    ];

  return (
    <View style={{ alignItems: "center", width: "90%", backgroundColor: "#f4f4f4", borderRadius: 16 }}>
      <PieChart
        data={data}
        width={chartWidth}
        height={220}
        chartConfig={{
          color: () => `rgba(0, 0, 0, 1)`
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
}
