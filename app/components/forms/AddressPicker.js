import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFormikContext } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

import AppText from '../AppText';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import Screen from '../Screen';
import PickerItem from '../PickerItem';
import ErrorMessage from './ErrorMessage';
import AuthContext from '../../auth/context';


function AddressPicker(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const { setFieldValue, values, errors, touched } = useFormikContext();
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleNavigate = () => {
        setModalVisible(false);
        navigation.navigate("Services", { screen: 'New Location' });
    }

    const handleSubmit = (item) => {
        setFieldValue("location", item.label);
    }

    return (
        <>
            <>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={styles.container}>
                        <View style={styles.icon}>
                            <FontAwesome name="location-arrow" size={20} color={colors.tertiary_dark} />
                        </View>
                        {values["location"]
                            ? <AppText style={styles.text}>{values["location"]}</AppText>
                            : <AppText style={styles.placeholderText}>Select Location</AppText>}
                        <MaterialCommunityIcons name="chevron-down" size={20} color={colors.tertiary_dark} />
                    </View>
                </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.textButton}>Close</Text>
                        </TouchableOpacity>
                        <ScrollView style={styles.scrollContainer}>
                            <PickerItem
                                label={"Home"}
                                value={user.home.address + ", " + user.home.city + ", " + user.home.state + " " + user.home.zip}
                                selectedItem={values["location"]}
                                onPress={() => {
                                    setModalVisible(false);
                                    handleSubmit({ label: "Home" });
                                }}
                            />
                            {user.other_locations.map((item, index) => <PickerItem
                                key={index}
                                label={item.label}
                                value={item.address + ", " + item.city + ", " + item.state + " " + item.zip}
                                selectedItem={values["location"]}
                                onPress={() => {
                                    setModalVisible(false);
                                    handleSubmit(item);
                                }}
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
            <ErrorMessage error={errors["location"]} visible={touched["location"]} />
        </>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        backgroundColor: colors.primary_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 15,
        width: "100%"
    },
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
    text: {
        flex: 1,
        ...defaultStyles.textInput
    },
    placeholderText: {
        flex: 1,
        color: colors.grey,
        ...defaultStyles.textInput
    },
    textButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.primary_dark
    },
    icon: {
        marginRight: 10
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
    scrollContainer: {
        borderTopColor: colors.panel1,
        borderTopWidth: 1,
    }
})

export default AddressPicker;