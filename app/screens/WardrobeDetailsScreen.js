import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

import AppText from '../components/AppText';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import colors from '../config/colors';
const initialWardrobe = [
    {
        id: 1,
        title: "Dress Shirt",
        description: "[TBU]",
        image: require("../assets/NDLogo.png")
    },
    {
        id: 2,
        title: "Dress Shirt",
        description: "[TBU]",
        image: require("../assets/NDLogo.png")
    },
    {
        id: 3,
        title: "Chino Pants",
        image: require("../assets/NDLogo.png")
    },
]

function WardrobeDetailsScreen(props) {
    const [wardrobeItems, setWardrobeItems] = useState(initialWardrobe);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = wardrobeItem => {
        // Remove item from the wardrobeItems array
        setWardrobeItems(wardrobeItems.filter(item => item.id !== wardrobeItem.id));

        // Call server to delete the item
    }

    return (
        <View style={styles.screenContainer}>
            <Image style={styles.image} source={require("../assets/TailoringImage.jpeg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Grey Suit Package</AppText>
                <AppText style={styles.subTitle}>2X56H</AppText>
            </View>
            <FlatList
                data={wardrobeItems}
                keyExtractor={wardrobeItem => wardrobeItem.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => console.log("Tapped")}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />}

                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setWardrobeItems(initialWardrobe)
                }}
            />
            <Icon name="email" />
        </View>

    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        color: colors.primary,
        fontWeight: "bold"
    },
    screenContainer: {
        flexGrow: 1
    },
    subTitle: {
        color: colors.green,
        fontWeight: "500"
    }
})

export default WardrobeDetailsScreen;