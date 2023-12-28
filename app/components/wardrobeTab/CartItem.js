import React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors';
import AppText from '../AppText';

const packages = {
    0: { name: "Suits", price: "$30", priceInt: 30, image: require("../../assets/TailoringImage.jpeg") },
    1: { name: "Shirts", price: "$15", priceInt: 15, image: require("../../assets/DressShirts.webp") },
    2: { name: "Dresses", price: "$30", priceInt: 30, image: require("../../assets/TailoringImage.jpeg") },
    3: { name: "Pants", price: "$15", priceInt: 15, image: require("../../assets/TailoringImage.jpeg") },
}

function CartItem({ type, quantity }) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={packages[type].image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{packages[type].name}</AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>{quantity + "  x  " + packages[type].price}</AppText>
            </View>
            <AppText style={styles.price} numberOfLines={1}>{"$" + (packages[type].priceInt * quantity).toString() + ".00"}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        color: colors.primary_dark_dark,
        paddingVertical: 3
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.grey,
        paddingVertical: 3
    },
    price: {
        fontSize: 18,
        fontWeight: "400",
        color: colors.grey,
        paddingVertical: 3
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: "center"
    },

})

export default CartItem;