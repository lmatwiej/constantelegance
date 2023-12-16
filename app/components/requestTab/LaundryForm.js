import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import { AppForm, SubmitButton, FormLabel, AppFormField } from '../forms';
import AddressPicker from '../forms/AddressPicker';
import LaundryDetails from '../forms/LaundryDetails';
import FormDateTimePicker from '../forms/FormDateTimePicker';
import PackagePicker from '../forms/PackagePicker';
import FormCheckbox from '../forms/FormCheckbox';

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("Location"),
    package: Yup.string().required().label("Package"),
    notes: Yup.string().max(200).label("Notes")
})

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const initialFormValues = { location: 'Home', date: new Date(), time: new Date(), expedite: false, package: '', notes: '' }

function LaundryForm(props) {
    return (
        <KeyboardAvoidingView
            behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>

                <AppForm
                    initialValues={initialFormValues}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <FormLabel label="Clothing Pickup Location" />
                    <AddressPicker name="location" />
                    <FormLabel label="Preferred Date & Time" style={{ marginTop: 30 }} />
                    <FormDateTimePicker name_date="date" name_time="time" />
                    <FormCheckbox name="expedite" />
                    <FormLabel label="Select Wardrobe Package" style={{ marginTop: 30 }} />
                    <PackagePicker name="package" />
                    <SubmitButton title="Submit Order" InfoComponent={<LaundryDetails />} />
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

export default LaundryForm;