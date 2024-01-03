import React, { useContext, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';
import ActiveOrderIcon from './ActiveOrderIcon';
import AuthContext from '../../auth/context';

const icons = {
    "Alterations": <Entypo name='ruler' color={colors.secondary_dark} size={20} />,
    "Cleaning": <MaterialIcons name='dry-cleaning' color={colors.white} size={30} />,
    "Donations": <FontAwesome5 name='hand-holding-heart' color={colors.white} size={24} />,
    "Exchanges": <FontAwesome name='exchange' color={colors.white} size={25} />
}

function RecentActivity(props) {
    const { user } = useContext(AuthContext);
    const scrollView = useRef();

    return (
        <>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Active Orders</AppText>
            </View>
            <View style={styles.sectionContainer}>

                {(user.orders.length === 0)
                    ? <AppText style={styles.placeholderText}>No pending orders.</AppText>
                    : <ScrollView ref={scrollView}
                        horizontal
                        onContentSizeChange={() => scrollView.current.scrollToEnd()}
                    >
                        <View style={styles.scrollContainer}>
                            {user.orders.map(order =>
                                <ActiveOrderIcon key={order.service} order={order} />
                            )}
                        </View>
                    </ScrollView>}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    placeholderText: {
        fontStyle: "italic",
        fontSize: 18,
        fontWeight: "normal",
        color: colors.secondary,
        padding: 20,
        alignSelf: 'center'
    },
    headerRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 25
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
        color: colors.primary_dark,
    },
    sectionContainer: {
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        paddingVertical: 20,
        marginBottom: 20
    },
    scrollContainer: {
        flexDirection: 'row',
    }
})

export default RecentActivity;