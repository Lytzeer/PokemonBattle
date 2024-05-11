import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const ChoosePokes = ({ navigation, route }) => {
    const { username } = route.params;
    console.log(username);

    const [pokemons, setPokemons] = useState([]) as any[];

    const [selected, setSelected] = useState<number[]>([]);
    const [adversary, setAdversary] = useState({
        id: 0,
        name: ""
    });

    const getPokemons = async () => {
        const response = await fetch(`http://192.168.0.34:5000/user_pokemon/${username}`);
        const data = await response.json();
        setPokemons(data);
        await getAdversary();
    }

    const getAdversary = async () => {
        const response = await fetch(`http://192.168.0.34:5000/random_opponent`);
        const data = await response.json();
        console.log(data);
        setAdversary(data);
    }

    useEffect(() => {
        getPokemons();
    }, []);

    const handlePokemonSelection = (index: number) => {
        if (selected.includes(index)) {
            setSelected(selected.filter((item) => item !== index));
        } else {
            setSelected([...selected, index]);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 20, marginTop: '10%' }}>Choose your Pokemon in order you want to use them</Text>

            <View style={styles.pokemonContainer}>
                <Text style={styles.title}>
                    Opponent
                </Text>
                <TouchableOpacity
                    style={[styles.pokemon, { backgroundColor: "#ff0000" }]}
                    disabled={true}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>
                        {adversary.name.charAt(0).toUpperCase() + adversary.name.slice(1)}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.title}>
                    Your team
                </Text>
                {pokemons.map((pokemon, index) => (
                    <TouchableOpacity
                        key={pokemon.id}
                        style={[styles.pokemon, { backgroundColor: selected.includes(index) ? '#17A427' : '#333' }]}
                        onPress={() => handlePokemonSelection(index)}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 }}>{pokemon[2]}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={[styles.pokemon, { backgroundColor: selected.length === 4 ? '#17A427' : '#333' }]}
                disabled={selected.length !== 4}>
                <Text style={{ color: '#fff', fontSize: 20 }}>
                    {selected.length === 4 ? 'Start Fight' : `Select ${4 - selected.length} more Pokemon`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChoosePokes

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    pokemonContainer: {
        display: 'flex',
        width: '100%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        marginTop: '10%',
        marginBottom: '2%',
    },
    pokemon: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 50,
        marginBottom: 10,
    },
})