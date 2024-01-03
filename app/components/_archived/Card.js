import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from "../../config/colors"
import AppText from '../AppText';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        width: "100%",
        backgroundColor: colors.white,
        marginVertical: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        color: colors.primary,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.green,
        fontWeight: "500"
    }
})

export default Card;