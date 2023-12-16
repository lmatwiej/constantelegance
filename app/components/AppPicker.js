import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Modal, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <View style={styles.icon}>{icon}</View>
                    <AppText style={styles.text}>{selectedItem ? selectedItem : placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.tertiary_dark} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.textButton}>Close</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.label.toString()}
                        renderItem={({ item }) => <PickerItem
                            label={item.label}
                            value={item.value}
                            image={item.image}
                            selectedItem={selectedItem}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item.label);
                            }}
                        />}
                    />
                </Screen>
            </Modal>
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
    textButton: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.primary_dark
    },
    icon: {
        marginRight: 10
    }
})

export default AppPicker;