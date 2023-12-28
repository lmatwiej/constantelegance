import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors';
import AppText from '../AppText';
import WardrobeDetailsScreen from '../../screens/Wardrobe/WardrobeDetailsScreen';

const packageImages = {
    0: require('../../assets/TailoringImage.jpeg'),
    1: require('../../assets/DressShirts.webp'),
    2: require('../../assets/DressShirts.webp'),
    3: require('../../assets/DressShirts.webp'),
}

const packageNames = {
    0: "Suit Package",
    1: "Shirt Package",
    2: "Dresses & Feminine",
    3: "Nice Dress Pants"
}

function CurrentPackage({ packageItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableHighlight underlayColor={colors.secondary_light} onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <View style={styles.leftSide}>
                        <Image style={styles.image} source={packageImages[packageItem.type]} />
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{packageNames[packageItem.type]}</AppText>
                        </View>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={35} color={colors.grey} />
                </View>
            </TouchableHighlight>

            <Modal visible={modalVisible} animationType="slide">
                <WardrobeDetailsScreen
                    closeModal={() => setModalVisible(false)}
                    packageItem={packageItem}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    description: {
        color: colors.grey,
        fontSize: 16,
        paddingVertical: 5
    },
    detailsContainer: {
        marginLeft: 15,
        justifyContent: "center"
    },
    image: {
        width: 75,
        height: 75,
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftSide: {
        flexDirection: "row",
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.secondary_dark,
        paddingVertical: 5
    }

})

export default CurrentPackage;