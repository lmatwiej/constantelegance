import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';

import colors from '../../config/colors';
import useAPI from '../../hooks/useAPI';
import AuthContext from '../../auth/context';
import accountAPI from '../../api/account';
import { AppForm, FormLabel, AppFormField, SubmitButton } from '../../components/forms';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const phoneRegex = /^(\d{10})$/
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    mobile: Yup.string().matches(phoneRegex, "Invalid phone").required("Phone is required"),
})

function UpdateContactScreen({ navigation }) {
    const { error, request: updateContact } = useAPI(accountAPI.updateContact)
    const { user, setUser } = useContext(AuthContext)

    const handleSubmit = ({ email, mobile }) => {
        // Update database
        updateContact(user._id.toString(), email, mobile);
        if (error) console.log(error);

        // Update user context
        setUser({ ...user, "contact": { email, mobile } })

        navigation.navigate("Account", { screen: 'Account Screen' })
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                    <AppForm
                        initialValues={{ email: '', mobile: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >

                        <FormLabel label="Phone" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="mobile"
                            icon="cellphone"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            placeholder="(xxx) xxx-xxxx"
                            maxLength={10}
                        />

                        <FormLabel label="Email" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <SubmitButton title="Confirm Changes" />
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
})

export default UpdateContactScreen;