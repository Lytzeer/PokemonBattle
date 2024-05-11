import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export const Navbar = ({ navigation, username }) => {

    return (
        <View style={stylesNav.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { username: username })}>
                <Image source={require('../../assets/profile.png')} />
            </TouchableOpacity>
        </View>
    )
}

const stylesNav = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 55,
        backgroundColor: '#000',
    },
});

export const NavbarFull = ({ navigation, username }) => {

    console.log(username);

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { username: username })}>
                <Image source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { username: username })}>
                <Image source={require('../../assets/profile.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 55,
        backgroundColor: '#000',
    },
});