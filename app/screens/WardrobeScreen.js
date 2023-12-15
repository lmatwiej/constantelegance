import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import colors from '../config/colors'
import ScreenHeader from '../components/ScreenHeader';
import RegisteredItems from '../components/wardrobeTab/RegisteredItems';

const HeaderIcons = <Ionicons name='ios-add' color={colors.primary_dark} size={40} style={{ marginLeft: 5 }} />

function WardrobeScreen(props) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="Wardrobe" IconComponentPanel={HeaderIcons} />
            <RegisteredItems />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light,
    }
})

export default WardrobeScreen;