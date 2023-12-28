import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import colors from '../../config/colors';
import ScreenHeader from '../../components/ScreenHeader';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0


function BillingInputScreen(props) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="Payment Info" />
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light
    },
    inputContainer: {
        flex: 1,
        padding: 20,
        width: "100%",
    }
})

export default BillingInputScreen;