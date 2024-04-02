import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function Wild({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/wild_pokemon.png')} style={styles.images}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn_text}>Wild Pokemon</Text>
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
});