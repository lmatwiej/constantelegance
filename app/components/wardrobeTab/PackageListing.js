import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WardrobeDetailsScreen from '../../screens/Wardrobe/WardrobeDetailsScreen';
import colors from '../../config/colors';
import AppText from '../AppText';

function PackageListing({ packageItem, cart, updateCount }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={packageItem.image} />
                    <View style={styles.textContainer}>
                        <AppText style={styles.nameText}>{packageItem.name}</AppText>
                        <MaterialCommunityIcons name="chevron-right" size={25} color={colors.grey} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <WardrobeDetailsScreen
                    closeModal={() => setModalVisible(false)}
                    packageItem={packageItem} cart={cart} updateCount={updateCount}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 15,
        borderColor: colors.panel1,
        borderWidth: 1,
        backgroundColor: colors.white,
        marginVertical: 15,
        justifyContent: 'center'
    },
    cartIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 40,
        width: 60,
        backgroundColor: colors.white
    },
    image: {
        height: 125,
        width: '100%',
        overflow: 'hidden',
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameText: {
        fontWeight: '600',
        color: colors.secondary_dark
    },
    priceText: {
        fontWeight: '400',
        color: colors.grey
    }
})

export default PackageListing;