import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal, FlatList, Text } from 'react-native';
import { useFormikContext } from 'formik';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                        <FlatList
                            data={user.locations}
                            keyExtractor={item => item.label}
                            renderItem={({ item }) => <PickerItem
                                label={item.label}
                                value={item.address + ", " + item.city + ", " + item.state + " " + item.zip}
                                selectedItem={values["location"]}
                                onPress={() => {
                                    setModalVisible(false);
                                    handleSubmit(item);
                                }}
                            />}
                        />
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
    }
})

export default AddressPicker;