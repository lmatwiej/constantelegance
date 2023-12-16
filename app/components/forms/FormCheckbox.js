import React from 'react';
import Checkbox from 'expo-checkbox';
import { useFormikContext } from 'formik';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';

function FormCheckbox({ name }) {
    const { setFieldValue, values } = useFormikContext();
    const handleChange = () => { setFieldValue(name, !values[name]) }

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={values[name]}
                onValueChange={handleChange}
                color={values[name] ? colors.secondary_dark : undefined}
                back
            />
            <Text style={styles.text}>Request 24-hour turnaround for $50</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center'
    },
    checkbox: {
        height: 25,
        width: 25,
        padding: 5,
        marginRight: 10,
        borderRadius: 5,
        borderColor: colors.panel1,
        borderWidth: 1,
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: colors.grey
    }
})

export default FormCheckbox;