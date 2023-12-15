import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { AppFormField, SubmitButton, AppForm } from '../components/forms';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function WelcomeScreen(props) {

    return (
        <View style={styles.background}>
            <Image resizeMode="contain" style={styles.logo} source={require("../assets/ConstantEleganceLogov2.png")} />
            <View style={styles.inputSection}>
                <AppForm
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        name="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        name="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Login" />
                </AppForm>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        padding: 25
    },
    inputSection: {
        width: "100%",
    },
    logo: {
        width: 300,
        marginTop: 90,
        marginBottom: 70
    }
})

export default WelcomeScreen;