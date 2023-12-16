import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import { AppForm, SubmitButton, FormLabel } from '../forms';
import AddressPicker from '../forms/AddressPicker';
import FormDateTimePicker from '../forms/FormDateTimePicker';
import AlterationsDetails from '../forms/AlterationsDetails';
import PackagePicker from '../forms/PackagePicker';

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("Location"),
    package: Yup.string().required().label("Package")
})

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const initialFormValues = { location: 'Home', date: new Date(), time: new Date(), package: '' }

function AlterationsForm(props) {
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
                    <FormLabel label="Select Wardrobe Package" style={{ marginTop: 30 }} />
                    <PackagePicker name="package" />
                    <SubmitButton title="Submit Order" InfoComponent={<AlterationsDetails />} />
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