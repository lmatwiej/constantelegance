import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function ScreenSection({ name, children }) {

    return (
        <View style={styles.container}>
            <AppText style={styles.headerText}>{name}</AppText>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.primary_red,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
})

export default ScreenSection;