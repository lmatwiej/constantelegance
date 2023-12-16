import React from 'react';
import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function PickerItem({ label, value, image = null, selectedItem, onPress }) {
    const selected = (selectedItem === label);
    const bgColor = selected ? colors.secondary_light : colors.primary_light;
    return (
        <TouchableHighlight underlayColor={colors.secondary_light} onPress={onPress}>
            <View style={[styles.container, { backgroundColor: bgColor }]}>
                {image && <Image style={styles.pickerImage} source={image} />}
                <View style={styles.subContainer}>
                    <AppText style={styles.label} numberOfLines={1}>{label}</AppText>
                    {value && <AppText style={styles.value} numberOfLines={1}>{value}</AppText>}
                </View>
                {selected && <Feather name="check" size={25} color={colors.tertiary_dark} />}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: 'center'
    },
    subContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.secondary_dark,
        paddingVertical: 5
    },
    pickerImage: {
        width: 75,
        height: 75,
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    value: {
        color: colors.grey,
        fontSize: 16,
        paddingVertical: 5
    }
})

export default PickerItem;