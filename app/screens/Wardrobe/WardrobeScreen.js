import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import colors from '../../config/colors'
import ScreenHeader from '../../components/ScreenHeader';
import RegisteredItems from '../../components/wardrobe/RegisteredItems';

function WardrobeScreen(props) {
    const navigation = useNavigation();

    const HeaderIcons = (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Wardrobe", { screen: 'Shop' })}>
            <Ionicons name='ios-add' color={colors.primary_dark} size={40} style={{ marginLeft: 5 }} />
        </TouchableWithoutFeedback>
    );

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