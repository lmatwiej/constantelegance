import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

import AppText from './AppText';
import colors from '../config/colors';

function ScreenHeader({ name, IconComponentPanel = null }) {
    return (
        <View style={styles.headerContainer}>
            <AppText style={styles.headerText}>{name}</AppText>
            {IconComponentPanel}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingBottom: 20,
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 32,
        flex: 1,
        fontWeight: "bold",
        color: colors.primary_dark
    }
})

export default ScreenHeader;