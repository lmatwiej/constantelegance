import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';

import authAPI from '../../api/auth';
import AuthContext from '../../auth/context';
import colors from '../../config/colors';
import ScreenHeader from '../../components/ScreenHeader';
import StatePicker from '../../components/forms/StatePicker';
import { AppForm, FormLabel, AppFormField, SubmitButton } from '../../components/forms';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const phoneRegex = /^(\d{10})$/
const zipRegex = /^(\d{5})$/
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(5).label("Password"),
    confirmPassword: Yup.string().required("Must confirm password").oneOf([Yup.ref('password')], 'Passwords must match'),
    email: Yup.string().email().required().label("Email"),
    mobile: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
    address: Yup.string().required().label("Address"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required("Required").label("State"),
    zip: Yup.string().matches(zipRegex, "Invalid zip").required("Required")
})


function RegistrationScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);

    const handleSubmit = async ({ email, password, name, mobile, address, city, state, zip }) => {
        // Create user
        const mobile_string = "(" + mobile.substring(0, 3) + ") " + mobile.substring(3, 6) + "-" + mobile.substring(6)
        console.log({ email, password, name, mobile, address, city, state, zip })
        const response = await authAPI.createAccount(email, password, name, mobile_string, address, city, state, zip)

        if (!response.ok)
            navigation.navigate("Welcome")

        // Load the user
        const account = await authAPI.loadAccount(response.data);
        if (!account.ok)
            navigation.navigate("Welcome")

        setUser(account.data);
    }

    return (
        <View style={styles.container}>
            <ScreenHeader name="Register Account" />
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                    <AppForm
                        initialValues={{ email: '', password: '', confirmPassword: '', name: '', mobile: '', address: '', city: '', state: '', zip: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <FormLabel label="Name & Password" />
                        <AppFormField
                            name="name"
                            icon="face-man"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Name"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <AppFormField
                            name="confirmPassword"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Confirm Password"
                            secureTextEntry
                        />
                        <FormLabel label="Contact Info" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="mobile"
                            icon="cellphone"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="(xxx) xxx-xxxx"
                            maxLength={10}
                        />
                        <AppFormField
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <FormLabel label="Home Location" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Address"
                        />
                        <AppFormField
                            name="city"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="City"
                        />
                        <View style={styles.rowContainer}>
                            <View style={{ width: '47%' }}>
                                <StatePicker name="state" />
                            </View>
                            <View style={{ width: '47%' }}>
                                <AppFormField
                                    name="zip"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="number-pad"
                                    placeholder="Zip"
                                    maxLength={5}
                                />
                            </View>
                        </View>

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
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default RegistrationScreen;