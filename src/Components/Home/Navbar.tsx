import { StyleSheet, View, Image, TouchableOpacity, Modal } from 'react-native';
import React, {useState} from 'react';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
                <TouchableOpacity >
                    <Image source={require('../../assets/profile.png')} />
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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