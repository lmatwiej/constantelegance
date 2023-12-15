import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function PickerItem({ label, value, selectedItem, onPress }) {
    const selected = (selectedItem === label);
    const bgColor = selected ? colors.secondary_light : colors.primary_light;
    return (
        <TouchableHighlight underlayColor={colors.secondary_light} onPress={onPress}>
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                <View style={styles.subContainer}>
                    <AppText style={styles.label} numberOfLines={1}>{label}</AppText>
                    <AppText style={styles.value} numberOfLines={1}>{value}</AppText>
                </View>
                {selected && <Feather name="check" size={25} color={colors.tertiary_dark} />}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center'
    },
    subContainer: {
        flex: 1
    },
    label: {
        fontSize: 18,
        flex: 1,
        fontWeight: "600",
        color: colors.secondary_dark,
        paddingVertical: 5
    },
    value: {
        color: colors.grey,
        fontSize: 16,
        paddingVertical: 5
    }
})

export default PickerItem;