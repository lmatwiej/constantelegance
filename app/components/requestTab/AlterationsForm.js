import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import { AppFormField, AppForm, SubmitButton, FormLabel } from '../forms';
import AddressPicker from '../forms/AddressPicker';
import DatePicker from '../forms/DatePicker';

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("Location"),
    password: Yup.string().required().min(4).label("Password")
})

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const initialFormValue = { location: 'Home', date: new Date(1598051730000) }

function AlterationsForm(props) {
    return (
        <KeyboardAvoidingView
            behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={'handled'}>

                <AppForm
                    initialValues={{ location: 'Home', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormLabel label="Clothing Pickup Location" />
                    <AddressPicker
                        name="location"
                    />
                    <FormLabel label="Which day works best?" style={{ marginTop: 30 }} />
                    {/*<AppFormField
                        name="password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />*/}
                    <DatePicker name="date" />
                    <SubmitButton title="Submit Order" />
                </AppForm>



            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: "100%",
    }
})

export default AlterationsForm;