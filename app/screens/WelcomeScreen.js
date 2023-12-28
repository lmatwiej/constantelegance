import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.logo} source={require("../assets/CELogo.png")} />
            <View style={styles.buttonLayout}>
                <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary_light }]}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.textRegister}>Create a New Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary_dark,
        flex: 1,
        padding: 25
    },
    button: {
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        marginVertical: 10,
        padding: 15,
        width: '100%',
    },
    buttonLayout: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    logo: {
        marginVertical: 90,
        width: 300
    },
    textLogin: {
        color: colors.primary_dark,
        fontWeight: 'bold',
        fontSize: 18
    },
    textRegister: {
        color: colors.primary_light,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default WelcomeScreen;