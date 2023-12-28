import React, { useContext } from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { AppForm, SubmitButton, FormLabel } from '../forms';
import AddressPicker from '../forms/AddressPicker';
import FormDateTimePicker from '../forms/FormDateTimePicker';
import AlterationsDetails from '../forms/AlterationsDetails';
import PackagePicker from '../forms/PackagePicker';
import useAPI from '../../hooks/useAPI';
import orderAPI from '../../api/order';
import AuthContext from '../../auth/context';

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label("Location"),
    package: Yup.string().required().label("Package")
})

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
const initialFormValues = {
    location: 'Home',
    date: new Date(),
    time: new Date(),
    package: null,
    packageId: null
}

function AlterationsForm(props) {
    const { data, error, request: createOrder } = useAPI(orderAPI.createOrder)
    const { user, setUser } = useContext(AuthContext)
    const navigation = useNavigation();

    const handleSubmit = (values) => {
        // Process values
        const date = values.date.toLocaleDateString('en-US')
        const time = values.time.toLocaleTimeString("en-US")
        const type = "Alterations"
        const location = values.location
        const packageId = values.packageId

        // Make API request
        createOrder(user._id.toString(), date, time, type, location, packageId)
        if (error) return console.log(error);

        // Update context variables
        var new_orders = user.orders
        new_orders.push({
            type,
            packageId,
            location,
            created_date: new Date().toLocaleDateString('en-US'),
            pickup_date: date,
            pickup_time: time,
            service_rep: data.rep,
            service_rep_mobile: data.service_rep_mobile
        })
        setUser({ ...user, "orders": new_orders })

        navigation.navigate("Services", { screen: 'Dashboard' })
    }

    return (
        <KeyboardAvoidingView
            behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>

                <AppForm
                    initialValues={initialFormValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <FormLabel label="Clothing Pickup Location" />
                    <AddressPicker />
                    <FormLabel label="Preferred Date & Time" style={{ marginTop: 30 }} />
                    <FormDateTimePicker name_date="date" name_time="time" />
                    <FormLabel label="Select Wardrobe Package" style={{ marginTop: 30 }} />
                    <PackagePicker />
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