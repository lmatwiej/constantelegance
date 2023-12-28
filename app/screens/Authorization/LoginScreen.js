import React, { useContext, useState } from 'react';
import { Image, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';
import { jwtDecode } from 'jwt-decode';
import "core-js/stable/atob";

import authAPI from '../../api/auth';
import { ErrorMesssage, AppFormField, AppForm, SubmitButton } from '../../components/forms';
import colors from '../../config/colors';
import AuthContext from '../../auth/context';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [loginError, setLoginError] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authAPI.login(email, password);
        if (!result.ok) return setLoginError(true);

        const user = jwtDecode(result.data);
        const account = await authAPI.loadAccount(user.userId);
        if (!account.ok) return setLoginError(true);

        authContext.setUser(account.data);
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.formLayout}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>

                    <Image resizeMode="contain" style={styles.logo} source={require("../../assets/CELogoReverse.png")} />
                    <AppForm
                        initialValues={{ email: '', password: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <ErrorMesssage error="Invalid email or password." visible={loginError} />
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

                </ScrollView>
            </KeyboardAvoidingView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary_light,
        flex: 1,
        padding: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.primary_light,
        borderRadius: 15,
        justifyContent: 'center',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    formLayout: {
        flex: 1,
        width: '100%'
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 30,
        width: 300
    },
    textLogin: {
        color: colors.primary_dark,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default LoginScreen;