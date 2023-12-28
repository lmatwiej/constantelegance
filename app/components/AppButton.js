import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from "../config/colors.js"

function AppButton({ title, onPress, style, color = "primary_dark", icon, disabled = false }) {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, style, { backgroundColor: colors[color] }]} onPress={onPress}>
            {icon}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary_dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 15,
        marginVertical: 20,
        width: "100%"
    },
    text: {
        fontSize: 18,
        color: colors.white,
        textTransform: "capitalize",
        fontWeight: "bold"
    }
})