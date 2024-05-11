import React from 'react'
import { Text, StyleSheet } from 'react-native'


const Title = () => {
    return (
        <Text style={styles.maintitle}>
            Shop
        </Text>
    )
}

export default Title

const styles = StyleSheet.create({
    maintitle: {
        color: '#fff',
        textAlign: 'left',
        paddingTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
    },
})