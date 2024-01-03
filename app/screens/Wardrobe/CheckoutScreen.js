import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import wardrobe from '../../data/wardrobe';
import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import AuthContext from '../../auth/context';
import useAPI from '../../hooks/useAPI';
import wardrobeAPI from '../../api/wardrobe';

const packages = {
    0: {
        name: wardrobe.names[0],
        price: wardrobe.prices_string[0],
        priceInt: wardrobe.prices_integer[0],
        image: require('../../assets/wardrobe/Suits.jpeg')
    },
    1: {
        name: wardrobe.names[1],
        price: wardrobe.prices_string[1],
        priceInt: wardrobe.prices_integer[1],
        image: require('../../assets/wardrobe/Shirts.webp')
    },
    2: {
        name: wardrobe.names[2],
        price: wardrobe.prices_string[2],
        priceInt: wardrobe.prices_integer[2],
        image: require('../../assets/wardrobe/Dresses.webp')
    },
    3: {
        name: wardrobe.names[3],
        price: wardrobe.prices_string[3],
        priceInt: wardrobe.prices_integer[3],
        image: require('../../assets/wardrobe/Pants.jpeg')
    },
}

const tailoring_menu = { 0: 2, 1: 2, 2: 2, 3: 2 }
const cleaning_menu = { 0: 2, 1: 2, 2: 2, 3: 2 }

function CheckoutScreen({ navigation, route }) {
    const { user, setUser } = useContext(AuthContext);
    const { cart } = route.params;
    const { error, request: updateWardrobe } = useAPI(wardrobeAPI.updateWardrobe)

    const handleSubmit = () => {
        // Make Payment


        // Create new package array
        var new_packages = []
        const types = [0, 1, 2, 3]
        for (const type in types) {
            const quantity = cart[type]

            const currentPackageArray = user.packages.filter(item => item["type"] === parseInt(type))
            if (currentPackageArray.length > 0) {
                const newPackage = {
                    "type": parseInt(type),
                    "tailoring_count": currentPackageArray[0].tailoring_count + (quantity * tailoring_menu[type]),
                    "cleaning_count": currentPackageArray[0].cleaning_count + (quantity * cleaning_menu[type]),
                }
                new_packages.push(newPackage)
            } else if (quantity > 0) {
                const newPackage = {
                    "type": parseInt(type),
                    "tailoring_count": quantity * tailoring_menu[type],
                    "cleaning_count": quantity * cleaning_menu[type],
                }
                new_packages.push(newPackage)
            }
        }

        // Update database and context
        updateWardrobe(user._id.toString(), new_packages)
        if (error) return console.log(error)
        setUser({ ...user, packages: new_packages })

        navigation.navigate("Wardrobe", { screen: 'Current Wardrobe' })
    }

    return (
        <View style={styles.container}>
            <Text>To be updated. No payment method at this time.s</Text>
            <View style={styles.buttonFooter}>
                <AppButton
                    title="Confirm Payment"
                    onPress={handleSubmit}
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
    buttonFooter: {
        backgroundColor: colors.primary_light,
        bottom: 0,
        flex: 1,
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%'
    }

})

export default CheckoutScreen;