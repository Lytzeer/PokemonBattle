import React from 'react'
import { Text, StyleSheet } from 'react-native'

interface TitleProps {
    title: string
}


const Title = ({
    title,
}:TitleProps) => {
    return (
        <Text style={styles.maintitle}>
            Hi! {title.charAt(0).toUpperCase() + title.slice(1)} 👋
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