import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { NavbarFull } from '../Components/Navbar/Navbar'
import Title from '../Components/Profile/Title'
import Input from '../Components/Profile/Input'

type InputProps = {
  title: string
  inputType: string
  value: string
  onChange: (text: string) => void
  buttonText: string
  onPress: () => void
}

const Profile = ({
  navigation,
  route
}) => {

  const { username } = route.params

  const [usernameEdit, setUsername] = useState<string>(username)
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleEdit = async (attribute: string, value: string) => {
    console.log(attribute, value)
    if (value === '') {
      setError('Please fill in the field')
      return
    }
    const route = `http://192.168.0.34:5000/user_info/${username}/${attribute}/${value}`
    const response = await fetch(route)
    const data = await response.json()
    console.log(data)
    setError(data.message)
  }

  const deleteAccount = async () => {
    const route = `http://192.168.0.34:5000/user_info/${username}/delete`
    const response = await fetch(route)
    const data = await response.json()
    console.log(data)
    if (data.message.includes('deleted')) {
      navigation.navigate('Welcome')
    }
  }

  const inputs: InputProps[] = [
    {
      title: 'Change your Username',
      inputType: 'text',
      value: usernameEdit,
      onChange: setUsername,
      buttonText: 'Change',
      onPress: () => handleEdit('update_username', usernameEdit)
    },
    {
      title: 'Change your Password',
      inputType: 'password',
      value: password,
      onChange: setPassword,
      buttonText: 'Change',
      onPress: () => handleEdit('update_password', password)
    }
  ]

  const buttons = [
    {
      title: 'Logout',
      onPress: () => navigation.navigate('Welcome')
    },
    {
      title: 'Delete Account',
      onPress: () => {
        deleteAccount()
      }
    }
  ]

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
      <NavbarFull navigation={navigation} />
      <Title title={username} />

      <Text style={styles.error}>
        {error}
      </Text>


      <View style={styles.form}>
        {inputs.map((input, index) => (
          <Input key={index} input={input} index={index} />
        ))}

        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.btn}
            onPress={button.onPress}
          >
            <Text style={styles.btnText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    paddingLeft: "5%",
    paddingRight: "5%",
  },

  form: {
    width: '100%',
    marginTop: 25,
  },
  btn: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  error: {
    color: '#00ff00',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})