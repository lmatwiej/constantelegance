import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppText from '../../components/AppText';
import ScreenHeader from '../../components/ScreenHeader';
import colors from '../../config/colors';
import CartIncrement from '../../components/wardrobeTab/CartIncrement';
import { SuitPackage, ShirtPackage, DressPackage, PantPackage } from '../../components/wardrobeTab/InfoBoxes'
import PackageStatus from '../../components/wardrobeTab/PackageStatus';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

const packageImages = {
    0: require('../../assets/TailoringImage.jpeg'),
    1: require('../../assets/DressShirts.webp'),
    2: require('../../assets/DressShirts.webp'),
    3: require('../../assets/DressShirts.webp'),
}

const descriptions = {
    0: <SuitPackage />,
    1: <ShirtPackage />,
    2: <DressPackage />,
    3: <PantPackage />
}

const packageNames = {
    0: "Suits",
    1: "Shirts",
    2: "Dresses",
    3: "Pants"
}

function WardrobeDetailsScreen({ closeModal, packageItem, cart = null, updateCount = null }) {

    const TouchableBackIcon = <TouchableWithoutFeedback onPress={closeModal}>{BackIcon}</TouchableWithoutFeedback>

    return (
        <View style={styles.container}>
            <ScreenHeader IconComponentPanel={TouchableBackIcon} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={packageImages[packageItem.type]} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{packageNames[packageItem.type]}</AppText>
                    {packageItem.price && <AppText style={styles.subTitle}>{packageItem.price + " / mo."}</AppText>}
                </View>
                {cart
                    ? <CartIncrement cart={cart} updateCount={updateCount} itemID={packageItem.type} />
                    : <PackageStatus tailorings={packageItem.tailoring_count} cleanings={packageItem.cleaning_count} />}
                {cart && <View style={styles.subdetailsContainer}>
                    {descriptions[packageItem.type]}
                </View>}
            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light,
        paddingBottom: 20
    },
    detailsContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    subdetailsContainer: {
        paddingHorizontal: 20
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        color: colors.primary_dark,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.grey,
        fontWeight: "400"
    }
})

export default WardrobeDetailsScreen;