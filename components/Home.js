import React , {useRef, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,ScrollView, Image, FlatList, Dimensions } from 'react-native';

import BottomSheet from "react-native-gesture-bottom-sheet";

import colors from '../assets/colors/colors'
import ListItem from './ListItem';

import { SAMPLE_DATA } from '../assets/data/sampleData'
import Chart from './Chart';

const height = Dimensions.get('window').height * 0.535;

const Home = ({navigation}) => {
    
    const bottomSheet = useRef();

    const [selectedCoinData , setselectedCoinData ] = useState(null);
    

    const openModal = (item)=>{
        // console.log(item);
        setselectedCoinData(item);
        bottomSheet?.current?.show()
    }

    

    return (
            <SafeAreaView style={styles.container}>
                {/* <ScrollView> */}
                    <Text style={styles.largeTitle}>Markets</Text>
                    <View style={styles.divider}/>

                    <FlatList 
                        keyExtractor={(item) => item.id}
                        data={SAMPLE_DATA}
                        renderItem={({item}) => (
                            <ListItem 
                            name={item.name}
                            symbol={item.symbol}
                            currentPrice={item.current_price}
                            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                            logoUrl={item.image}
                            onPress={()=> openModal(item)}
                        />
                        )}
                    />
                {/* </ScrollView> */}
                {selectedCoinData && (
                    <BottomSheet hasDraggableIcon ref={bottomSheet} height={height}>
                        <View style={styles.bottomSheetWrapper}>
                            <Chart 
                                currentPrice={selectedCoinData.current_price}
                                logoUrl={selectedCoinData.image}
                                name={selectedCoinData.name}
                                priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
                                sparkLine={selectedCoinData.sparkline_in_7d.price}
                                symbol={selectedCoinData.symbol}
                            />
                        </View>
                    </BottomSheet>
                )}

            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    largeTitle: {
        fontFamily: "Lato-Bold",
        fontSize: 24,
        marginHorizontal: 16,
        marginTop: 30,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.gray,
        marginHorizontal: 16,
        marginTop: 16 ,
    },
    bottomSheetWrapper: {
        
    },
})

export default Home
