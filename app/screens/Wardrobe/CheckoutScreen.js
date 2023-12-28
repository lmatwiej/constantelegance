import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppButton from '../../components/AppButton';
import colors from '../../config/colors';
import AuthContext from '../../auth/context';
import useAPI from '../../hooks/useAPI';
import wardrobeAPI from '../../api/wardrobe';

const packages = {
    0: { name: "Suits", price: "$30", priceInt: 30, image: require("../../assets/TailoringImage.jpeg") },
    1: { name: "Shirts", price: "$15", priceInt: 15, image: require("../../assets/DressShirts.webp") },
    2: { name: "Dresses", price: "$30", priceInt: 30, image: require("../../assets/TailoringImage.jpeg") },
    3: { name: "Pants", price: "$15", priceInt: 15, image: require("../../assets/TailoringImage.jpeg") },
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