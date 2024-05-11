import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import Navbar from "./Navbar";

export default function Trainer({navigation, username}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/pokemon_trainer.png')} style={styles.images}>
                <Navbar navigation={navigation} username={username} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChoosePokes', { username: username })}>
                    <Text style={styles.btn_text}>Pokemon Trainer</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
    },
    images: {
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#48D0B0',
        padding: 20,
        borderRadius: 20,
        width: '50%',
        marginLeft: '25%',
        marginTop: '25%',
    },
    btn_text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 55,
    },
});