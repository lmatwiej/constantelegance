import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';

function CartIncrement({ cart, updateCount, itemID }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => updateCount(-1, itemID)}>
                <View style={styles.minusContainer}>
                    <Entypo name="minus" size={24} color={colors.white} />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.countContainer}>
                <AppText style={styles.countText}>{cart[itemID]}</AppText>
            </View>

            <TouchableWithoutFeedback onPress={() => updateCount(1, itemID)}>
                <View style={styles.plusContainer}>
                    <Entypo name="plus" size={24} color="white" />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    minusContainer: {
        backgroundColor: colors.panel2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 75,
        paddingVertical: 2,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,

    },
    countContainer: {
        backgroundColor: colors.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 75,
        paddingVertical: 2,
        borderTopColor: colors.panel2,
        borderBottomColor: colors.panel2,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    countText: {
        fontWeight: "bold",
        color: colors.primary_dark,
        fontSize: 18
    },
    plusContainer: {
        backgroundColor: colors.panel2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 75,
        paddingVertical: 2,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }
})

export default CartIncrement;