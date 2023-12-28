import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const states = [
    { label: "Alabama", abbreviation: "AL" },
    { label: "Alaska", abbreviation: "AK" },
    { label: "Arizona", abbreviation: "AZ" },
    { label: "Arkansas", abbreviation: "AR" },
    { label: "California", abbreviation: "CA" },
    { label: "Colorado", abbreviation: "CO" },
    { label: "Connecticut", abbreviation: "CT" },
    { label: "Delaware", abbreviation: "DE" },
    { label: "Florida", abbreviation: "FL" },
    { label: "Georgia", abbreviation: "GA" },
    { label: "Hawaii", abbreviation: "HI" },
    { label: "Idaho", abbreviation: "ID" },
    { label: "Illinois", abbreviation: "IL" },
    { label: "Indiana", abbreviation: "IN" },
    { label: "Iowa", abbreviation: "IA" },
    { label: "Kansas", abbreviation: "KS" },
    { label: "Kentucky", abbreviation: "KY" },
    { label: "Louisiana", abbreviation: "LA" },
    { label: "Maine", abbreviation: "ME" },
    { label: "Maryland", abbreviation: "MD" },
    { label: "Massachusetts", abbreviation: "MA" },
    { label: "Michigan", abbreviation: "MI" },
    { label: "Minnesota", abbreviation: "MN" },
    { label: "Mississippi", abbreviation: "MS" },
    { label: "Missouri", abbreviation: "MO" },
    { label: "Montana", abbreviation: "MT" },
    { label: "Nebraska", abbreviation: "NE" },
    { label: "Nevada", abbreviation: "NV" },
    { label: "New Hampshire", abbreviation: "NH" },
    { label: "New Jersey", abbreviation: "NJ" },
    { label: "New Mexico", abbreviation: "NM" },
    { label: "New York", abbreviation: "NY" },
    { label: "North Carolina", abbreviation: "NC" },
    { label: "North Dakota", abbreviation: 'ND' },
    { label: "Ohio", abbreviation: "OH" },
    { label: "Oklahoma", abbreviation: "OK" },
    { label: "Oregon", abbreviation: 'OR' },
    { label: "Pennsylvania", abbreviation: 'PA' },
    { label: "Rhode Island", abbreviation: "RI" },
    { label: "South Carolina", abbreviation: "SC" },
    { label: "South Dakota", abbreviation: "SD" },
    { label: "Tennessee", abbreviation: "TN" },
    { label: "Texas", abbreviation: "TX" },
    { label: "Utah", abbreviation: "UT" },
    { label: "Vermont", abbreviation: "VT" },
    { label: "Virginia", abbreviation: "VA" },
    { label: "Washington", abbreviation: "WA" },
    { label: "West Virginia", abbreviation: "WV" },
    { label: "Wisconsin", abbreviation: "WI" },
    { label: "Wyoming", abbreviation: "WY" }
]

function StatePicker({ name }) {
    const { setFieldValue, values, errors, touched } = useFormikContext();
    return (
        <>
            <AppPicker
                items={states}
                onSelectItem={(item) => setFieldValue(name, item.abbreviation)}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default StatePicker;