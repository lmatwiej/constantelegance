import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Button, Modal, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

import authStorage from '../../auth/storage';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AuthContext from '../../auth/context';
import ScreenHeader from '../../components/ScreenHeader';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import PickerItem from '../../components/PickerItem';


function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const handleNavigate = () => {
        setModalVisible(false);
        navigation.navigate("Account", { screen: 'New Location' });
    }

    return (
        <>
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
                <Button title="View Full Address Book" onPress={() => setModalVisible(true)} />
                <View style={styles.buttonContainer} >
                    <AppButton title="Log Out" onPress={() => setUser(null)} />
                </View>
            </View >
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.textButton}>Close</Text>
                    </TouchableOpacity>
                    <ScrollView style={styles.scrollContainer}>
                        <PickerItem
                            label={"Home"}
                            value={user.home.address + ", " + user.home.city + ", " + user.home.state + " " + user.home.zip}
                        />
                        {user.other_locations.map((item, index) => <PickerItem
                            key={index}
                            label={item.label}
                            value={item.address + ", " + item.city + ", " + item.state + " " + item.zip}
                        />)}
                        <TouchableWithoutFeedback onPress={handleNavigate}>
                            <View style={styles.newLocationContainer}>
                                <View style={styles.repImage}>
                                    <Ionicons name="ios-add" size={50} color={colors.white} />
                                </View>
                                <AppText style={styles.label}>Add New Location</AppText>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>

                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
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
    closeButton: {
        backgroundColor: colors.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 15,
        width: "100%"
    },
    textButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.primary_dark
    },
    scrollContainer: {
        borderTopColor: colors.panel1,
        borderTopWidth: 1,
    },
    newLocationContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        alignItems: 'center'
    },
    repImage: {
        width: 50,
        height: 50,
        backgroundColor: colors.panel1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 15,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        color: colors.secondary_dark,
        marginLeft: 15,
        paddingVertical: 5
    },
})

export default AccountScreen;