import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from "../config/colors.js"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image resizeMode="contain" style={styles.image} source={require("../assets/NDLogo.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 50,
        left: 20
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 50,
        right: 20
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: "80%",
        height: "80%"
    }
})

export default ViewImageScreen;