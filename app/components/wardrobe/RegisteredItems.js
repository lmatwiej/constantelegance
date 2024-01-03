import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CurrentPackage from './CurrentPackage';
import colors from '../../config/colors';
import AppText from '../AppText';
import AuthContext from '../../auth/context';
import AppButton from '../AppButton';

function RegisteredItems(props) {
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.headerRow}>
                <AppText style={styles.headerText}>Your Packages</AppText>
            </View>
            <View style={styles.container}>
                {user.packages.length === 0
                    ? <View style={{ paddingHorizontal: 20 }}>
                        <AppText style={styles.placeholderText}>Wardrobe is currently empty.</AppText>
                        <AppButton title="Add New Package" onPress={() => navigation.navigate("Wardrobe", { screen: 'Shop' })} />
                    </View>
                    : <ScrollView showsVerticalScrollIndicator={false}>
                        {user.packages.map((item) => <CurrentPackage packageItem={item} key={item.type} />)}
                    </ScrollView>

                }
            </View>
        </>
    );
}

export default RegisteredItems;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderColor: colors.panel1,
        borderWidth: 1,
        paddingVertical: 20,
        marginBottom: 20
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
    placeholderText: {
        fontStyle: "italic",
        fontSize: 18,
        fontWeight: "normal",
        color: colors.secondary,
        padding: 20,
        alignSelf: 'center'
    },
})