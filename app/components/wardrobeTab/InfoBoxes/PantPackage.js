import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../../AppText';
import colors from '../../../config/colors';

const offerings = [
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "Coverage on 3 eligible items"
    },
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "Specialty cleaning every 2 months"
    },
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "Expert alteration upon registration"
    },
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "Pant exchanges & donations"
    },
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "At-home item pickup & delivery"
    },
]

const eligibleItems = [
    {
        icon: <Ionicons name="ios-checkmark-sharp" size={20} color={colors.panel1} />,
        description: "Dress pants & chinos"
    }
]

function PantPackage(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AppText style={styles.textHeader}>What We Offer</AppText>
                </View>
                {offerings.map((item, index) => (
                    <View style={styles.line} key={index}>
                        {item.icon}
                        <AppText style={styles.bulletPoint}>{item.description}</AppText>
                    </View>))}
            </View>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <AppText style={styles.textHeader}>Eligible Items</AppText>
                </View>
                {eligibleItems.map((item, index) => (
                    <View style={styles.line} key={index}>
                        {item.icon}
                        <AppText style={styles.bulletPoint}>{item.description}</AppText>
                    </View>))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
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
        padding: 10,
        fontWeight: "normal",
        fontSize: 16,
        color: colors.grey,
    },
    line: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'center',
    }
})

export default PantPackage;