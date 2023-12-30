import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, description, image = false, ImageComponent = false, onPress, renderRightActions, chevron = false }) {
    return (
        <TouchableHighlight underlayColor={colors.secondary_light} onPress={onPress}>
            <View style={styles.container}>

                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} >{title}</AppText>
                    {description && <AppText style={styles.description} numberOfLines={1}>{description}</AppText>}
                </View>

                {chevron && <MaterialCommunityIcons name="chevron-right" size={35} color={colors.grey} />}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    description: {
        color: colors.grey,
        fontSize: 16,
        paddingVertical: 5
    },
    detailsContainer: {
        width: '100%',
        marginLeft: 15,
        justifyContent: "center",
    },
    image: {
        width: 75,
        height: 75,
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.secondary_dark,
        paddingVertical: 5
    }

})

export default ListItem;