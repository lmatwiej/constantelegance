import React from 'react';
import { useFormikContext } from 'formik';
import { View, StyleSheet, TextInput } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function LocationField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                currentLocation
                numberOfLines={3}
                placeholder='Search Address'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAyiqcppwsvGLWvI73kg8YOrY6SiouJRl4',
                    language: 'en',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default LocationField;