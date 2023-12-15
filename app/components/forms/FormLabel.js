import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';

function FormLabel({ label, style }) {
    return (
        <AppText style={[styles.textContainer, style]}>{label}</AppText>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        fontWeight: "500",
        color: colors.secondary_dark
    }
})

export default FormLabel;