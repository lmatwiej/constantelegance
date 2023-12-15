import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormikContext } from 'formik';
import { View, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import colors from '../../config/colors';

function DatePicker({ name }) {
    // const [date, setDate] = useState(new Date(1598051730000));
    const { setFieldValue, values } = useFormikContext();

    const onChange = ({ type }, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate;
            setFieldValue(name, currentDate);
        }
    };




    return (
        <View style={styles.container} >
            <Fontisto name="date" size={20} color={colors.tertiary_dark} style={styles.icon} />
            <DateTimePicker
                testID="dateTimePicker"
                value={values[name] ? values[name] : new Date()}
                mode={'date'}
                is24Hour={true}
                onChange={onChange}
                style={{ marginVertical: -5 }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15,
        borderColor: colors.panel1,
        borderWidth: 1,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        flex: 1,
        ...defaultStyles.text
    }
})

export default DatePicker;