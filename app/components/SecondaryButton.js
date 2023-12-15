import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../config/colors.js"

function SecondaryButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default SecondaryButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
        margin: 5,
        width: "100%"
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})