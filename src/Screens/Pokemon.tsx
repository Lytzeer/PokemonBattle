import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {NavbarFull} from "../Components/Navbar/Navbar";
import Title from "../Components/Pokemon/Title";

export default function Pokemon({navigation, route }) {

    const { username } = route.params;

    return (
        <View style={styles.container}>
            <NavbarFull username={username} navigation={navigation} />
            <Title />
            <View style={{ flexDirection: 'column'}}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
                    <TouchableOpacity style={styles.pokemon_box}>
                        <Image source={require('../assets/jigglypuff.png')} style={styles.pokemon_image} />
                        <Text style={styles.pokemon_name}>Jigglypuff</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pokemon_box1}>
                        <Image source={require('../assets/bulbasaur.png')} style={styles.pokemon_image}/>
                        <Text style={styles.pokemon_name}>Bulbasaur</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
                    <TouchableOpacity style={styles.pokemon_box3}>
                        <Image source={require('../assets/pikachu.png')} style={styles.pokemon_image} />
                        <Text style={styles.pokemon_name}>Pikachu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pokemon_box1}>
                        <Image source={require('../assets/bulbasaur.png')} style={styles.pokemon_image}/>
                        <Text style={styles.pokemon_name}>Bulbasaur</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
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
    pokemon_box3: {
        backgroundColor: '#FADA69',
        padding: 20,
        borderRadius: 20,
    },
});