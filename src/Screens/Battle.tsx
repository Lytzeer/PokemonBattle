import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Battle = ({route}) => {
    const {username}=route.params;
    const {adversary}=route.params;
    console.log("Username :",username);
    console.log("Opponent :",adversary);
    console.log(adversary.name)
    console.log(adversary.stats.moves)
    console.log("Route Params :",route.params);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Battle</Text>
            <Text style={styles.subtitle}>{username} vs Trainer</Text>
            <Text style={styles.text}>{adversary.name} {adversary.stats.health}/{adversary.stats.health}</Text>
        </View>
    )
}

export default Battle

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
    },
    title: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        paddingTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
})