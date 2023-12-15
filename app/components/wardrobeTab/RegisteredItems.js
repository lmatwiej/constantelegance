import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem';
import ListItemSeparator from '../ListItemSeparator';
import UpgradeButton from './UpgradeButton';

// TODO: Connect to backend
const initialWardrobe = [
    {
        id: 1,
        title: "Grey Suit Package",
        description: "5 total items",
        image: require("../../assets/TailoringImage.jpeg")
    },
    {
        id: 2,
        title: "Navy Suit Package",
        image: require("../../assets/TailoringImage.jpeg")
    }
]

function RegisteredItems(props) {
    const [wardrobeItems, setWardrobeItems] = useState(initialWardrobe);

    return (
        <View style={styles.container}>
            {(wardrobeItems.length > 0) && <FlatList
                data={wardrobeItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log("Tapped")}
                        chevron={true}
                    />}
            />}
            <UpgradeButton title="Upgrade" />
        </View>
    );
}

export default RegisteredItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    }
})