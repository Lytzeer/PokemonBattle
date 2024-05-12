import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const WildPokes = ({route}) => {
    const { username } = route.params;
    console.log("WildPokes",username);

    const [pokeballs, setPokeballs] = useState([]) as any[];
    const [catched, setCatched] = useState([]) as any[];
    const [catchedPokemon, setCatchedPokemon] = useState([]) as any[];
    const [adversary, setAdversary] = useState({
        name: ""
    });
    const getPokeballs = async () => {
        console.log(username);
        const response = await fetch(`http://192.168.1.25:5000/battle/pokeball/${username}`);
        const data = await response.json();
        setPokeballs(data);
        console.log(data);
        await getAdversary();
    }

    const getAdversary = async () => {
        const response = await fetch(`http://192.168.1.25:5000/random_opponent`);
        const data = await response.json();
        console.log("Data Result",data["result"]);
        setAdversary(data);
    }

    const catchPokemon = async (pokeball: string) => {
        console.log(pokeball);
        const response = await fetch(`http://192.168.1.25:5000/battle/${pokeball}`);
        const data = await response.json();
        console.log(data.result);
        setCatched(data.result);
        if (!data.result) {
            console.log("You failed to catch the pokemon");
        } else {
            console.log("You catched the pokemon");
            catchedPoke();
        }
    }

    const catchedPoke = async () => {
        const response = await fetch(`http://192.168.1.25:5000/battle/catched/${username}/${adversary.name}`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getPokeballs();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WildPokes</Text>
            <TouchableOpacity
                style={[styles.pokemon, { backgroundColor: "#ff0000" }]}
                disabled={true}
            >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                    {adversary.name.charAt(0).toUpperCase() + adversary.name.slice(1)}
                </Text>
            </TouchableOpacity>
            {pokeballs.map((pokeball, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.pokemon}
                    onPress={() => catchPokemon(pokeball.name)}
                >
                    <Text style={{ color: '#fff', fontSize: 20 }}>
                        {pokeball.name.charAt(0).toUpperCase() + pokeball.name.slice(1)} x{pokeball.amount}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default WildPokes;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
    },
    title: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        paddingTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
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
});