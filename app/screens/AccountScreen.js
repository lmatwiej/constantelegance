import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
const accountOptions = [
    {
        id: 1,
        title: "Settings",
        icon: "account-settings"
    },
    {
        id: 2,
        title: "Payment Info",
        icon: "credit-card-settings"
    }
]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.sectionContainer}>
                <ListItem
                    title="LukaszJMat"
                    description="Profile Details"
                    ImageComponent={<Icon name="horse-human" size={45} backgroundColor={colors.primary} iconColor={colors.white} />}
                />
            </View>
            <View style={styles.sectionContainer}>
                <FlatList
                    data={accountOptions}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            ImageComponent={<Icon name={item.icon} size={35} backgroundColor={colors.secondary} iconColor={colors.white} />}
                            onPress={() => console.log("Tapped")}
                            chevron={true}
                        />}

                    ItemSeparatorComponent={() => <ListItemSeparator />}
                />
            </View>
            <View style={[styles.sectionContainer, { alignItems: "center" }]}>
                <AppButton title="Log Out" onPress={() => console.log("Logging Out")} color="primary" />
            </View>
        </Screen >
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 20,
    }
})

export default AccountScreen;