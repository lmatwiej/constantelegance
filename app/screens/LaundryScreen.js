import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';
import ScreenHeader from '../components/ScreenHeader';
import LaundryForm from '../components/requestTab/LaundryForm';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

function LaundryScreen(props) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="Laundry" IconComponentPanel={BackIcon} />
            <LaundryForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    }
})

export default LaundryScreen;