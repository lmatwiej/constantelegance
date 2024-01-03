import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../../config/colors';
import ExchangesForm from '../../components/service_forms/ExchangesForm';

const BackIcon = <AntDesign name='back' color={colors.primary_dark} size={35} style={{ marginLeft: 5 }} />

function ExchangesOrderScreen(props) {
    return (
        <View style={styles.container}>
            <ExchangesForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    }
})

export default ExchangesOrderScreen;