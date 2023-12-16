import React from 'react';
import { useFormikContext } from 'formik';
import { FontAwesome } from '@expo/vector-icons';

import AppPicker from '../AppPicker';
import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';

const items = [
    { label: "Home", value: "4 Timothy Ct, Morristown, NJ 07960" },
    { label: "Work", value: "50 Madison Ave, New York, NY 90876" },
]
const LocationIcon = <FontAwesome name="location-arrow" size={20} color={colors.tertiary_dark} />

function AddressPicker({ name }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                icon={LocationIcon}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AddressPicker;