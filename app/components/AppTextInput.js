import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from "../config/colors"
import defaultStyles from "../config/styles"

function AppTextInput({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width: { width } }]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.tertiary_dark} style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15,
        borderColor: colors.panel1,
        borderWidth: 1,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        width: "100%",
        ...defaultStyles.textInput
    }
})

export default AppTextInput;