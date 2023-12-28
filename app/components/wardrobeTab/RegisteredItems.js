import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import CurrentPackage from './CurrentPackage';
import AuthContext from '../../auth/context';

function RegisteredItems(props) {
    const { user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {user.packages.map((item) => <CurrentPackage packageItem={item} key={item.type} />)}
            </ScrollView>
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