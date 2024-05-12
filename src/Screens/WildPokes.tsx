import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const WildPokes = ({navigation,route}) => {
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
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/battle/pokeball/${username}`);
        const data = await response.json();
        setPokeballs(data);
        await getAdversary();
    }

    const getAdversary = async () => {
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/random_opponent`);
        const data = await response.json();
        setAdversary(data);
    }

    const catchPokemon = async (pokeball: string) => {
        console.log(pokeball);
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/battle/${pokeball}`);
        const data = await response.json();
        console.log("Result",data.result);
        setCatched(data.result);
        if (!data.result) {
            console.log("You failed to catch the pokemon");
        } else {
            console.log("You catched the pokemon");
            catchedPoke();
        }
    }

    const catchedPoke = async () => {
        const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/battle/catched/${username}/${adversary.name}`);
        const data = await response.json();
        console.log(data);
        setCatchedPokemon(data);
    }

    useEffect(() => {
        setCatched(false);
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
            {pokeballs.length !== 0 ? pokeballs.map((pokeball, index) => (
                <>
                    <TouchableOpacity
                        key={index}
                        style={styles.pokemon}
                        onPress={() => catchPokemon(pokeball.name)}
                        disabled={catched}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 }}>
                            {pokeball.name.charAt(0).toUpperCase() + pokeball.name.slice(1)} x{pokeball.amount}
                        </Text>
                    </TouchableOpacity>
                    {catched && (
                        <>
                        <Text style={{ color: '#fff', fontSize: 20 }}>
                            You caught the pokemon!
                        </Text>
                        <TouchableOpacity
                            style={[styles.pokemon, { backgroundColor: "#ff0000" }]}
                            onPress={() =>  {
                                navigation.navigate('Home', { username: username });
                        }}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 }}>
                                Return to menu
                            </Text>
                        </TouchableOpacity>
                        </>
                    )}
                </>
            )) : 
            <>
            <Text style={{ color: '#fff', fontSize: 20 }}>
                You don't have any pokeball {pokeballs.length}
            </Text>
            <TouchableOpacity
                style={[styles.pokemon, { backgroundColor: "#ff0000" }]}
                onPress={() => navigation.navigate('Home', { username: username })}
            >
                <Text style={{ color: '#fff', fontSize: 20 }}>
                    Return to menu
                </Text>
            </TouchableOpacity>
            </>
            }
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