import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import * as Yup from 'yup';

import useAPI from '../../hooks/useAPI';
import AuthContext from '../../auth/context';
import accountAPI from '../../api/account';
import colors from '../../config/colors';
import { AppForm, FormLabel, AppFormField, SubmitButton } from '../../components/forms';
import StatePicker from '../../components/forms/StatePicker';

const zipRegex = /^(\d{5})$/
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const validationSchema = Yup.object().shape({
    address: Yup.string().required().label("Address"),
    city: Yup.string().required().label("City"),
    state: Yup.string().required("Required").label("State"),
    zip: Yup.string().matches(zipRegex, "Invalid zip").required("Required")
})

function UpdateAddressScreen({ navigation }) {
    const { error, request: updateLocation } = useAPI(accountAPI.updateLocation)
    const { user, setUser } = useContext(AuthContext)

    const handleSubmit = ({ address, city, state, zip }) => {
        // Update database
        updateLocation(user._id.toString(), address, city, state, zip);
        if (error) return console.log(error);

        // Update user context
        setUser({ ...user, "home": { address, city, state, zip } })

        navigation.navigate("Account", { screen: 'Account Screen' })
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.inputContainer}>
                <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                    <AppForm
                        initialValues={{ address: '', city: '', state: '', zip: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >

                        <FormLabel label="Pickup / Delivery Location" style={{ marginTop: 30 }} />
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

export default UpdateAddressScreen;