import { View, StyleSheet, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { pokeImages } from "../../data/PokePics";

interface LastPokemonName {
    name: string;
    pokemon_id: number;
}

export default function Lpokemon({navigation, lasts, username }: { navigation:any, lasts: LastPokemonName[], username:string }) {
    console.log(lasts);
    console.log(pokeImages);
    return (
        <View>
            <Text style={styles.subtitle}>Your Last Pokemon</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>
                {lasts.map((last, index) => (
                    <TouchableOpacity key={index} style={index % 2 === 0 ? styles.pokemon_box : styles.pokemon_box1} onPress={() => navigation.navigate('Stats', { last: last, username: username })}>
                        <Image 
                        source={pokeImages.find(poke => poke.id === last.pokemon_id)?.url as ImageSourcePropType}
                         style={styles.pokemon_image} />
                        <Text style={styles.pokemon_name}>{last.name}</Text>
                    </TouchableOpacity>
                ))}
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