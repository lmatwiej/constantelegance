import React from 'react';
import { useFormikContext } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import colors from '../../config/colors';

// TODO: Connect to backend
const items = [
    {
        id: 1,
        label: "Grey Suit Package",
        image: require("../../assets/TailoringImage.jpeg")
    },
    {
        id: 2,
        label: "Navy Suit Package",
        image: require("../../assets/TailoringImage.jpeg")
    }
]

const DresserIcon = <MaterialCommunityIcons name="dresser-outline" size={20} color={colors.tertiary_dark} />

function PackagePicker({ name }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                icon={DresserIcon}
                placeholder="Select Package"
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default PackagePicker;