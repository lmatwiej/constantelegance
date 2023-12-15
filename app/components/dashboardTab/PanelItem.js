import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';

function PanelItem({ name, style, icon }) {
    return (
        <TouchableWithoutFeedback onPress={() => console.log(name)}>
            <View style={[styles.buttonContainer, style]}>
                <AppText style={styles.buttonLabel}>{name}</AppText>
                <View style={styles.imageContainer}>
                    {icon}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 100,
        flex: 1,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.panel1,
        color: colors.white,
    },
    buttonLabel: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        position: "absolute",
        bottom: 10,
        left: 10
    },
    imageContainer: {
        height: "50%",
        width: "40%",
        //borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15,
        //borderColor: colors.panel2,
        //borderWidth: 2,
        //backgroundColor: colors.panel2,
        overflow: "hidden",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        right: 0
    }

})

export default PanelItem;