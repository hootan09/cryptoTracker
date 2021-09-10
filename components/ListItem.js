import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../assets/colors/colors'

// https://download.logo.wine/logo/Ethereum/Ethereum-Icon-Purple-Logo.wine.png
const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? colors.green : colors.red;

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.itemWrapper}>
                    {/* Leaft Side */}
                    <View style={styles.leftWrapper}>
                        <Image source={ {uri: logoUrl} } style={styles.image}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
                        </View>
                    </View>

                    {/* Right Side */}
                    <View style={styles.rightWrapper}>
                        <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                        <Text style={[styles.subTitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        marginHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 48,
        width: 48,
    },
    titleWrapper: {
        marginLeft: 8,

    },
    title: {
        fontFamily: "Lato-Bold",
        fontSize: 18,
    },
    subTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
        marginTop: 4,
        color: colors.gray,
    },
    rightWrapper: {
        alignItems: "flex-end"
    },
})

export default ListItem
