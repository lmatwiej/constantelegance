import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors';

function UpgradeButton({ title }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Ionicons name='ios-add' color={colors.primary_light} size={30} style={{ marginRight: 5 }} />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: colors.secondary_dark,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: colors.primary_light,
        textTransform: "capitalize",
        fontWeight: "bold"
    }
})

export default UpgradeButton;