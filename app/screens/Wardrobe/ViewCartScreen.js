import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import CartItem from '../../components/wardrobeTab/CartItem';

function ViewCartScreen({ navigation, route }) {
    const { cart } = route.params;
    const priceCalculator = (cart) => {
        const price = (cart["0"] * 30) + (cart["1"] * 15) + (cart["2"] * 30) + (cart["3"] * 15)
        return price
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Your Cart</AppText>
            </View>
            <View style={styles.sectionContainer}>
                {cart["0"] > 0 && <CartItem type={0} quantity={cart["0"]} />}
                {cart["1"] > 0 && <CartItem type={1} quantity={cart["1"]} />}
                {cart["2"] > 0 && <CartItem type={2} quantity={cart["2"]} />}
                {cart["3"] > 0 && <CartItem type={3} quantity={cart["3"]} />}
            </View>
            <View style={styles.priceContainer}>
                <View style={styles.priceLineItem}>
                    <AppText style={styles.priceText}>Gross Total</AppText>
                    <AppText style={styles.priceText}>{"$" + (priceCalculator(cart)) + ".00"}</AppText>
                </View>

            </View>

            <View style={styles.buttonFooter}>
                <AppButton
                    title="Checkout"
                    onPress={() => navigation.navigate("Wardrobe", { screen: 'Checkout', params: { cart: cart } })}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light,
    },
    headerRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 25
    },
    headerText: {
        flex: 1,
        fontSize: 18,
        fontWeight: "600",
        color: colors.primary_dark,
    },
    buttonFooter: {
        backgroundColor: colors.primary_light,
        bottom: 0,
        flex: 1,
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%'
    },
    sectionContainer: {
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
        paddingVertical: 10,
        marginBottom: 20
    },
    priceContainer: {
        width: "100%",
        paddingHorizontal: 20,
    },
    priceLineItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    priceText: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.grey,
    },

})

export default ViewCartScreen;