import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function Screen({ children, style }) {
    return (
        <View style={[styles.screen, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: colors.primary_light
    }
})

export default Screen;