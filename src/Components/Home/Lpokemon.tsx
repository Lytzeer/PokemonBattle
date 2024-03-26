import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function Lpokemon() {
    return (
        <View>
            <Text style={styles.subtitle}>Your Last Pokemon</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
                <TouchableOpacity style={styles.pokemon_box}>
                    <Image source={require('../../assets/jigglypuff.png')} style={styles.pokemon_image} />
                    <Text style={styles.pokemon_name}>Jigglypuff</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pokemon_box1}>
                    <Image source={require('../../assets/bulbasaur.png')} style={styles.pokemon_image}/>
                    <Text style={styles.pokemon_name}>Bulbasaur</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 25,
        opacity: 0.5,
        fontWeight: 'bold',
    },
    pokemon_name:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pokemon_image: {
        width: 125,
        height: 135,
    },
    pokemon_box1: {
        backgroundColor: '#17A427',
        padding: 20,
        borderRadius: 20,
    },
    pokemon_box: {
        backgroundColor: '#F6B4D1',
        padding: 20,
        borderRadius: 20,
    },
})