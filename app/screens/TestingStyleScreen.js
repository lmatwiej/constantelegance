import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'

import AppText from '../components/AppText';

function TestingStyleScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.square}></View>
            <View style={styles.shadowBox}></View>
            <Text style={styles.textSample}>Hola</Text>
            <AppText>This is an encapsulated text component</AppText>
            <Entypo name="mail" size={60} color="dodgerblue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: "royalblue",
        borderRadius: 10
    },
    // Circle: Radius = 1/2 of edge length
    shadowBox: {
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100,
        shadowColor: "grey",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10
    },
    textSample: {
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "tomato",
        textTransform: "capitalize",
        textAlign: "center",
        lineHeight: 60
    }

})

export default TestingStyleScreen;