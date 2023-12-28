import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import WardrobeDetailsScreen from '../../screens/Wardrobe/WardrobeDetailsScreen';
import colors from '../../config/colors';
import AppText from '../AppText';

function Listing({ packageItem, cart, updateCount }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={packageItem.image} />
                    <View style={styles.textContainer}>
                        <AppText style={styles.nameText}>{packageItem.name}</AppText>
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
        width: '50%',
        overflow: 'hidden',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    image: {
        height: 100,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 5,
        opacity: 0.8,
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameText: {
        fontWeight: '600',
        fontSize: 16,
        color: colors.primary_dark
    },
    priceText: {
        fontWeight: '400',
        color: colors.grey
    }
})

export default Listing;