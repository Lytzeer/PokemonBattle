import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Login = ({ navigation }: any) => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = async () => {
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/login/${username}/${password}`)
        const data = await response.json()
        console.log(data)
        if (data.message === true) {
            navigation.navigate('Home', { username: username })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>

            <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

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
    form: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
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
})