import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';


function SubmitButton({ title, InfoComponent }) {
    const { handleSubmit } = useFormikContext();
    return (
        <View style={styles.container}>
            {InfoComponent}
            <AppButton title={title} onPress={handleSubmit} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    }
})

export default SubmitButton;