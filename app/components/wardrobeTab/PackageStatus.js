import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText';
import colors from '../../config/colors';

function PackageStatus({ tailorings, cleanings }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <AppText style={styles.textHeader}>Remaining Service Eligiblity</AppText>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statusBox}>
                    <AppText style={styles.mainFigure}>{tailorings}</AppText>
                    <AppText style={styles.title}>Alteration</AppText>

                </View>
                <View style={styles.statusBox}>
                    <AppText style={styles.mainFigure}>{cleanings}</AppText>
                    <AppText style={styles.title}>Cleaning</AppText>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
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
    statsContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    statusBox: {
        width: '50%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainFigure: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.secondary_dark,
        paddingVertical: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "400",
        paddingVertical: 5,
        color: colors.grey,
        textAlign: 'center'
    }
})

export default PackageStatus;