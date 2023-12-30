import React, { useContext } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { AppForm, SubmitButton, FormLabel, AppFormField } from '../forms';
import AddressPicker from '../forms/AddressPicker';
import LaundryDetails from '../forms/LaundryDetails';
import FormDateTimePicker from '../forms/FormDateTimePicker';
import PackagePicker from '../forms/PackagePicker';
// import FormCheckbox from '../forms/FormCheckbox';
import useAPI from '../../hooks/useAPI';
import orderAPI from '../../api/order';
import AuthContext from '../../auth/context';

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("Location"),
    package: Yup.string().required().label("Package"),
})

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const initialFormValues = {
    location: 'Home',
    date: new Date(),
    time: new Date(),
    expedite: false,
    package: null,
    packageId: null
}

function LaundryForm(props) {
    const { data, error, request: createOrder } = useAPI(orderAPI.createOrder)
    const { user, setUser } = useContext(AuthContext)
    const navigation = useNavigation();

    const handleSubmit = (values) => {
        // Process values
        const date = values.date.toLocaleDateString('en-US')
        const time = values.time.toLocaleTimeString("en-US")
        const service = "Cleaning"
        const location = values.location
        const packageId = values.packageId
        const status = "Pickup"

        // Make API request
        createOrder(user._id.toString(), service, packageId, status, location, date, time)
        if (error) return console.log(error);

        // Update context variables
        var new_orders = user.orders
        new_orders.push({
            service,
            package: packageId,
            status,
            location,
            date,
            time,
            service_rep: data.service_rep,
            service_rep_mobile: data.service_rep_mobile
        })

        var new_eligibility = user.eligibility
        new_eligibility[service] = false

        setUser({ ...user, "orders": new_orders, "eligibility": new_eligibility })

        navigation.navigate("Services", { screen: 'Dashboard' })
    }

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
                    <AddressPicker />
                    <FormLabel label="Preferred Date & Time" style={{ marginTop: 30 }} />
                    <FormDateTimePicker name_date="date" name_time="time" />
                    {/* <FormCheckbox name="expedite" /> */}
                    <FormLabel label="Select Wardrobe Package" style={{ marginTop: 30 }} />
                    <PackagePicker />
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