import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ScreenSection from '../ScreenSection';
import colors from '../../config/colors';
import AppText from '../AppText';
import ListItem from '../ListItem';
import ListItemSeparator from '../ListItemSeparator';
import Icon from '../Icon';

// TODO: Connect to backend
const initialActivities = [
    {
        id: 1,
        title: "Donations",
        icon: "account-settings"
    },
    {
        id: 2,
        title: "Alterations",
        icon: "credit-card-settings"
    }
]

function RecentActivity(props) {
    const [activities, setActivities] = useState(initialActivities);

    return (
        <ScreenSection name="View Active Orders">
            {(activities.length > 0) && <FlatList
                data={activities}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        description={item.description}
                        ImageComponent={<Icon name={item.icon} size={35} backgroundColor={colors.secondary_dark} iconColor={colors.white} />}
                        onPress={() => console.log("Tapped")}
                        chevron={true}
                    />}

                ItemSeparatorComponent={() => <ListItemSeparator />}
            />}
            {(activities.length === 0) && <AppText style={styles.placeholderText}>You have no pending activities.</AppText>}
        </ScreenSection>
    );
}

const styles = StyleSheet.create({
    placeholderText: {
        fontStyle: "italic",
        fontSize: 18,
        fontWeight: "normal",
        color: colors.secondary,
        paddingHorizontal: 20,
        paddingBottom: 15,
    }
})

export default RecentActivity;