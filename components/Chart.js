import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

import colors from '../assets/colors/colors';


const Chart = ({currentPrice, logoUrl, name, priceChangePercentage7d, sparkLine, symbol}) => {
    
    console.log(sparkLine);
    const priceChangeColor = priceChangePercentage7d > 0 ? colors.green : colors.red;

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 134, 134, ${opacity})`, // optional
            strokeWidth: 6 // optional
          }
        ],
        legend: ["Price"] // optional
      };

      const chartConfig = {
        backgroundGradientFrom: "#eee",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#111",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => priceChangeColor,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return (
            <View>
                {/* Titles */}
                <View style={styles.chartWrapperTitle}>
                    <View style={styles.titleWrapper}>
                        <View style={styles.upperTitles}>
                            <View style={styles.upperLeftTitle}>
                                <Image source={{uri: logoUrl}} style={styles.image}/>
                                <Text style={styles.subTitle}>{name} ({symbol.toUpperCase()})</Text>
                            </View>

                            <Text style={styles.subTitle}>7d</Text>

                        </View>
                        <View style={styles.lowerTitles}>
                            <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                            <Text style={[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                        </View>
                    </View>

                </View>
                <View>
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={256}
                        verticalLabelRotation={30}
                        chartConfig={chartConfig}
                        bezier
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    chartWrapperTitle: {
        margin: 16,
    },
    titleWrapper: {},
    upperTitles: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    upperLeftTitle: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4,
    },
    subTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 20,
        color: colors.gray,
    },
    lowerTitles: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boldTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        color: colors.black,
    },
    title: {
        fontFamily: "Lato-Regular",
        fontSize: 18,
    },
})

export default Chart
