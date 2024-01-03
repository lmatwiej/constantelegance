import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ImageInput from '../components/ImageInput';
import ImageInputList from '../components/ImageInputList';

function ImageDemoScreen(props) {
    const [imageUri, setImageUri] = useState();
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri]);
    }

    const handleRemove = (uri) => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))
    }

    return (
        <View style={styles.container}>
            <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
            <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25
    }
})

export default ImageDemoScreen;