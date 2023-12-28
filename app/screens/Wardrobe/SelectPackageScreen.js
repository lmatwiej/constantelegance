import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import Listing from '../../components/wardrobeTab/Listing';

const packages = [
    {
        type: 0,
        name: "Suits",
        price: "$30",
        image: require("../../assets/TailoringImage.jpeg")
    },
    {
        type: 1,
        name: "Shirts",
        price: "$15",
        image: require("../../assets/DressShirts.webp")
    },
    {
        type: 2,
        name: "Dresses",
        price: "$30",
        image: require("../../assets/TailoringImage.jpeg")
    },
    {
        type: 3,
        name: "Pants",
        price: "$15",
        image: require("../../assets/TailoringImage.jpeg")
    }
]

const initialCart = { 0: 0, 1: 0, 2: 0, 3: 0 }; // Key = package ID

function SelectPackageScreen({ navigation }) {
    const [cart, setCart] = useState(initialCart);
    const [cartCount, setCartCount] = useState(0);

    const updateCount = (increment, packageID) => {
        if (cart[packageID] === 0 && increment < 0) return null;
        const new_item_count = cart[packageID] + increment;
        setCart({ ...cart, [packageID]: new_item_count });
        setCartCount(cartCount + increment);
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Browse Offerings</AppText>
                <Ionicons name="cart-outline" size={25} color={colors.primary_dark} />
                <AppText style={styles.cartCount}>{cartCount}</AppText>
            </View>
            <View style={styles.sectionContainer}>
                <FlatList
                    data={packages}
                    scrollEnabled={false}
                    keyExtractor={(item) => item.name}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Listing
                            packageItem={item}
                            cart={cart}
                            updateCount={updateCount}
                        />
                    )}
                />
            </View>

            {(cartCount > 0) && <View style={styles.buttonFooter}>
                <AppButton
                    title={"View Cart (" + cartCount + ")"}
                    onPress={() => navigation.navigate("Wardrobe", { screen: 'Cart', params: { cart: cart } })}
                />
            </View>}

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
    cartCount: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.primary_dark,
        marginLeft: 8
    },
    inputContainer: {
        flex: 1,
        paddingBottom: 70,
        padding: 20,
        width: "100%",
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
    rowContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        width: "100%",
        paddingHorizontal: 20,
    }

})

export default SelectPackageScreen;