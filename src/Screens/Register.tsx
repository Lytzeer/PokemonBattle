import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Register = ({ navigation }: any) => {

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleRegister = async () => {
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/register/${username}/${password}/${confirmPassword}/${email}`)
        const data = await response.json()
        if (data.message === true) {
            navigation.navigate('Home', { username: username })
        } else {
            setError(data.error)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setError('');
        }, 3000);
    
        return () => {
            clearTimeout(timer);
        };
    }, [error]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register
            </Text>

            <Text style={styles.error}>
                {error}
            </Text>

            <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />

                <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

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
    },
    error: {
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
    }
})