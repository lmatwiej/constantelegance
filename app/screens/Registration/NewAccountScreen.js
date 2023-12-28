import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';

import colors from '../../config/colors';
import ScreenHeader from '../../components/ScreenHeader';
import { AppForm, FormLabel, AppFormField, SubmitButton } from '../../components/forms';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string().required("Must confirm password").oneOf([Yup.ref('password')], 'Passwords must match'),
})

function NewAccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ScreenHeader name="New User" />
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                    <AppForm
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        onSubmit={values => navigation.navigate("Contact")}
                        validationSchema={validationSchema}
                    >
                        <FormLabel label="Account Email" />
                        <AppFormField
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <FormLabel label="New Password" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <FormLabel label="Confirm Password" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="confirmPassword"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Confirm Password"
                            secureTextEntry
                        />
                        <SubmitButton title="Create Account" />
                    </AppForm>
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

export default NewAccountScreen;