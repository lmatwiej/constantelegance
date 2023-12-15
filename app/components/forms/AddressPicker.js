import React from 'react';
import { useFormikContext } from 'formik';
import { FontAwesome } from '@expo/vector-icons';

import AppPicker from '../AppPicker';
import colors from '../../config/colors';

const items = [
    { label: "Home", value: "4 Timothy Ct, Morristown, NJ 07960" },
    { label: "Work", value: "50 Madison Ave, New York, NY 90876" },
]
const LocationIcon = <FontAwesome name="location-arrow" size={20} color={colors.tertiary_dark} />

function AddressPicker({ name }) {
    const { setFieldValue, values } = useFormikContext();

    return (
        <AppPicker
            items={items}
            icon={LocationIcon}
            onSelectItem={(item) => setFieldValue(name, item)}
            selectedItem={values[name]}
        />
    );
}

export default AddressPicker;