import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';

function ExchangesDetails(props) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name="information-circle-sharp" size={25} color={colors.secondary_dark} style={{ marginRight: 5 }} />
                <AppText style={styles.textHeader}>Important Note</AppText>
            </View>
            <AppText style={styles.bulletPoint}>Our team will appraise your package value and recompensate you at pickup.</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
        backgroundColor: colors.white,
        borderColor: colors.secondary_dark,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        paddingVertical: 5,
        fontWeight: "500",
        color: colors.secondary_dark
    },
    bulletPoint: {
        paddingVertical: 10,
        fontWeight: "normal",
        fontSize: 16,
        color: colors.grey,
    }
})

export default ExchangesDetails;