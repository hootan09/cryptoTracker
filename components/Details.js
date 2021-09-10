import React from 'react';
import { View, Text, StyleSheet,ImageBackground, Dimensions, TouchableOpacity } from 'react-native'

import colors from '../assets/colors/colors'

const Details = ({navigation, route}) => {

    const {item} = route.params;
    return (
        <View style={styles.container}>
            <Text>Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});

export default Details
