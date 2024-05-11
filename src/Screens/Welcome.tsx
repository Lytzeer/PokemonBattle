import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Welcome = ({
    navigation
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome
            </Text>
            <View style={styles.logoWrapper}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.form}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'flex-start',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: "20%"
    },
    logoWrapper: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
    form: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#48d0b0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});