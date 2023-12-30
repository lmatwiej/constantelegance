import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AuthContext from '../../auth/context';
import ScreenHeader from '../../components/ScreenHeader';


function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <ScreenHeader name="My Account" />
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Contact</AppText>
                <TouchableOpacity onPress={() =>
                    navigation.navigate("Account", { screen: 'Update Contact' })
                }>
                    <Entypo name="edit" size={20} color={colors.primary_dark} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>Name: </AppText>
                    <AppText style={styles.bulletPoint}>{user.name}</AppText>
                </View>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>Email:  </AppText>
                    <AppText style={styles.bulletPoint}>{user.contact.email}</AppText>
                </View>
                <View style={styles.rowContainer}>
                    <AppText style={styles.bulletLabel}>Phone:</AppText>
                    <AppText style={styles.bulletPoint}>{user.contact.mobile}</AppText>
                </View>
            </View>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Home Address</AppText>
                <TouchableOpacity onPress={() =>
                    navigation.navigate("Account", { screen: 'Update Address' })
                }>
                    <Entypo name="edit" size={20} color={colors.primary_dark} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionContainer}>
                <AppText style={[styles.bulletPoint, { paddingVertical: 8 }]}>{user.home.address}</AppText>
                <AppText style={[styles.bulletPoint, { paddingVertical: 8 }]}>{`${user.home.city}, ${user.home.state} ${user.home.zip}`}</AppText>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setUser(null)}>
                <Text style={styles.buttonLogout}>Log Out</Text>
            </TouchableOpacity>

        </View >
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonLogout: {
        fontSize: 18,
        color: colors.primary_dark,
        textTransform: "capitalize",
        fontWeight: "bold"
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
    rowContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        width: '100%'
    },
    sectionContainer: {
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        alignItems: 'center',
        padding: 20,
        marginBottom: 20
    },
})

export default AccountScreen;