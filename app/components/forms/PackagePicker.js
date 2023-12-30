import React, { useState, useContext } from 'react';
import { useFormikContext } from 'formik';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from '../PickerItem';
import Screen from '../Screen';
import AppText from '../AppText';
import ErrorMessage from './ErrorMessage';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';
import AuthContext from '../../auth/context';

const packageNames = {
    0: "Full Suit Bundle",
    1: "Collared Shirt Set",
    2: "Dresses & Feminine",
    3: "Stylish Pants & Chinos"
}

const packageImages = {
    0: require("../../assets/TailoringImage.jpeg"),
    1: require("../../assets/DressShirts.webp"),
    2: require("../../assets/DressShirts.webp"),
    3: require("../../assets/DressShirts.webp")
}

const DresserIcon = <MaterialCommunityIcons name="dresser-outline" size={20} color={colors.tertiary_dark} />

function PackagePicker(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const { setFieldValue, values, errors, touched } = useFormikContext();
    const { user } = useContext(AuthContext);

    const handleSubmit = (item) => {
        setFieldValue("package", packageNames[item.type]);
        setFieldValue("packageId", item.type);
    }

    return (
        <>
            <>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={styles.container}>
                        <View style={styles.icon}>{DresserIcon}</View>
                        {values["package"]
                            ? <AppText style={styles.text}>{values["package"]}</AppText>
                            : <AppText style={styles.placeholderText}>Select Package</AppText>}
                        <MaterialCommunityIcons name="chevron-down" size={20} color={colors.tertiary_dark} />
                    </View>
                </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.textButton}>Close</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={user.packages}
                            keyExtractor={item => item.type}
                            renderItem={({ item }) => <PickerItem
                                label={packageNames[item.type]}
                                image={packageImages[item.type]}
                                selectedItem={values["package"]}
                                onPress={() => {
                                    setModalVisible(false);
                                    handleSubmit(item);
                                }}
                            />}
                        />
                    </Screen>
                </Modal>
            </>
            <ErrorMessage error={errors["package"]} visible={touched["package"]} />
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

export default PackagePicker;