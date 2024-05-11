import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const Input = ({ input, index }) => {
  return (
    <View key={index} style={styles.inputContainer}>
            <Text style={styles.inputTitle}>{input.title}</Text>
            <Text style={styles.inputSubtitle}>{input.title}</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholder={input.title}
                value={input.value}
                onChangeText={input.onChange}
                secureTextEntry={input.inputType === 'password'}
              />
              <TouchableOpacity style={styles.inputButton} onPress={input.onPress}>
                <Text style={styles.inputButtonText}>{input.buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
      },
      inputTitle: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      inputSubtitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      input: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      inputText: {
        paddingLeft: 10,
        color: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 20,
        width: '70%',
        height: 50,
      },
      inputButton: {
        backgroundColor: '#48D0B0',
        borderRadius: 20,
        width: '25%',
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      },
});