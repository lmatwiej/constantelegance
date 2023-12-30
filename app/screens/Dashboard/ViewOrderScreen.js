import React, { useContext, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import AuthContext from '../../auth/context';
import AppText from '../../components/AppText';
import colors from '../../config/colors';


const icons = {
    "Alterations": <Entypo name='ruler' color={colors.primary_dark} size={20} />,
    "Cleaning": <MaterialIcons name='dry-cleaning' color={colors.primary_dark} size={30} />,
    "Donations": <FontAwesome5 name='hand-holding-heart' color={colors.primary_dark} size={24} />,
    "Exchanges": <FontAwesome name='exchange' color={colors.primary_dark} size={25} />
}

const packages = { 0: "Suits", 1: "Shirts", 2: "Dresses", 3: "Pants" }

function ViewOrderScreen({ route }) {
    const { user } = useContext(AuthContext);
    const { order } = route.params;

    return (
        <View style={styles.container}>
            {/* Service Type, Status, Date & Time */}
            <View style={styles.headerRow}>
                {icons[order.service]}
                <AppText style={styles.headerText}>{"  " + order.service}</AppText>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>Status: </AppText>
                    <AppText style={styles.bulletPoint}>{order.status}</AppText>
                </View>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>When:  </AppText>
                    <AppText style={styles.bulletPoint}>{order.date + " at " + order.time}</AppText>
                </View>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>Where: </AppText>
                    <AppText style={styles.bulletPoint}>{order.location}</AppText>
                </View>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>What:   </AppText>
                    <AppText style={styles.bulletPoint}>{packages[order.package]}</AppText>
                </View>

            </View>

            {/* Service Rep Section */}
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Service Rep</AppText>
            </View>
            <View style={[styles.sectionContainer, { flexDirection: 'row' }]}>
                <View style={styles.repImage}>
                    <Ionicons name="person-outline" size={50} color={colors.grey} />
                </View>
                <View style={styles.repDetails}>
                    <AppText style={styles.repName}>{order.service_rep}</AppText>
                    <AppText style={styles.repMobile}>{order.service_rep_mobile}</AppText>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    },
    headerRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 25
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
        color: colors.primary_dark,
    },
    sectionContainer: {
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20
    },
    repImage: {
        width: 80,
        height: 80,
        backgroundColor: colors.secondary_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 15,
    },
    repDetails: {
        flex: 1
    },
    repName: {
        color: colors.primary_dark,
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 5
    },
    repMobile: {
        color: colors.grey,
        fontSize: 18,
        fontWeight: '400',
        paddingVertical: 5
    },
    rowContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        width: '100%'
    },
    bulletLabel: {
        fontWeight: "500",
        fontSize: 18,
        color: colors.primary_dark,
        marginRight: 8
    },
    bulletPoint: {
        fontWeight: "normal",
        fontSize: 18,
        color: colors.grey,
    },
})

export default ViewOrderScreen;