import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormikContext } from 'formik';
import { View, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';

// Date variables
const today = new Date()
var minTime = new Date();
minTime.setHours(9);
minTime.setMinutes(0);
minTime.setMilliseconds(0);
var maxTime = new Date();
maxTime.setHours(22);
maxTime.setMinutes(0);
maxTime.setMilliseconds(0);

function FormDateTimePicker({ name_date, name_time }) {

    const { setFieldValue, values, errors, touched } = useFormikContext();

    const onChangeDate = ({ type }, selectedDate) => {
        if (type === "set") {
            const currentDate = selectedDate;
            setFieldValue(name_date, currentDate);
            console.log(currentDate);
        }
    };

    const onChangeTime = ({ type }, selectedTime) => {
        if (type === "set") {
            const currentTime = selectedTime;
            setFieldValue(name_time, currentTime);
            console.log(currentTime);
        }
    };

    return (
        <>
            <View style={styles.container} >
                <Fontisto name="date" size={20} color={colors.tertiary_dark} style={styles.icon} />
                <DateTimePicker
                    testID="dateTimePicker"
                    value={values[name_date] ? values[name_date] : new Date()}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChangeDate}
                    minimumDate={today}
                    style={{ marginVertical: -5 }}
                />
                <DateTimePicker
                    testID="dateTimePicker"
                    value={values[name_time] ? values[name_time] : new Date()}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChangeTime}
                    minuteInterval={15}
                    minimumDate={minTime}
                    maximumDate={maxTime}
                    style={{ marginVertical: -5 }}
                />
            </View>
            <ErrorMessage error={errors[name_date]} visible={touched[name_date]} />
            <ErrorMessage error={errors[name_time]} visible={touched[name_time]} />
        </>

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

export default FormDateTimePicker;