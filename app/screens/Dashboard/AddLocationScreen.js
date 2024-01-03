import React, { useContext, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';

import AuthContext from '../../auth/context';
import accountAPI from '../../api/account';
import colors from '../../config/colors';
import { AppForm, FormLabel, AppFormField, SubmitButton } from '../../components/forms';
import StatePicker from '../../components/forms/StatePicker';
import ErrorMessage from '../../components/forms/ErrorMessage';

const zipRegex = /^(\d{5})$/
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const validationSchema = Yup.object().shape({
    label: Yup.string().trim()
        .test("Home", "Home is a restricted label", (input) => input !== "Home" && input !== "home")
        .required("Required"),
    address: Yup.string().trim().required().label("Address"),
    city: Yup.string().trim().required().label("City"),
    state: Yup.string().trim().required("Required").label("State"),
    zip: Yup.string().trim().matches(zipRegex, "Invalid zip").required("Required")
})

function AddLocationScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);
    const [labelError, setLabelError] = useState(false);

    const handleSubmit = async ({ label, address, city, state, zip }) => {
        // Check label
        const conflicting_labels = user.other_locations.filter((item) => item.label.toLowerCase() === label.toLowerCase().trim());
        if (conflicting_labels.length > 0) return setLabelError(true);

        // Update database
        const result = await accountAPI.addAddress(user._id.toString(), label, address, city, state, zip);
        if (!result.ok) return console.log(result);


        // Update user context
        var other_locations = user.other_locations
        other_locations.push({ label, address, city, state, zip })
        setUser({ ...user, other_locations })

        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                    <AppForm
                        initialValues={{ label: '', address: '', city: '', state: '', zip: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >

                        <FormLabel label="Location Label" style={{ marginTop: 30 }} />
                        <AppFormField
                            name="label"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Work, Gym, etc."
                        />
                        <ErrorMessage error={"This label has already been taken."} visible={labelError} />
                        <FormLabel label="Address Details" style={{ marginTop: 30 }} />
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
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default AddLocationScreen;