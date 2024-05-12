import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Battle = ({navigation,route}) => {

    const [colors, setColors] = useState({
        1: "#919AA2",
        2: "#CE416B",
        3: "#8FA9DE",
        4: "#AA6BC8",
        5: "#D97845",
        6: "#C5B78C",
        7: "#91C12F",
        8: "#5269AD",
        9: "#5A8EA2",
        10: "#FF9D55",
        11: "#5090D6",
        12: "#63BC5A",
        13: "#F4D23C",
        14: "#FA7179",
        15: "#73CEC0",
        16: "#0B6DC3",
        17: "#5A5465",
        18: "#EC8FE6"
    });

    
    const {username,adversary,selected}=route.params;
    const [selectedHealth, setSelectedHealth] = useState(selected.stats.health);
    const [adversaryHealth, setAdversaryHealth] = useState(adversary.stats.health);
    const [finished, setFinished] = useState(false);
    const [winner, setWinner] = useState("");
    const handleAttack = async (move) => {
        if (move.power === null) {
            console.log("This move has no power or accuracy. this feature is not implemented yet");
            return;
        }else{
            const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/battle/${username}/${move.name}/${selectedHealth}/${adversary.name}/${adversaryHealth}`);
            const data = await response.json();
            console.log(data);
            if (data.winner){
                console.log("Winner is",data.winner);
                setFinished(true);
                if (data.winner === "Player"){
                    setWinner(username);
                }else{
                    setWinner(data.winner);
                }
            }
            setSelectedHealth(data.pokemon_health);
            setAdversaryHealth(data.opponent_health);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Battle</Text>
            <Text style={styles.subtitle}>{username} vs Trainer</Text>
            <Text style={styles.text}>{adversary.name} {adversaryHealth}/{adversary.stats.health}</Text>
            <Text style={styles.text}>{selected.name} {selectedHealth}/{selected.stats.health}</Text>
            <Text style={styles.text}>{finished ? "The battle has finished Winner is "+winner : "Select a move"}</Text>
            {selected.stats.moves.map((move) => (
                    <TouchableOpacity
                        key={move.id}
                        style={[styles.pokemon, { backgroundColor: colors[move.type_id]}]}
                        disabled={finished}
                        onPress={() => handleAttack(move)}
                    
                    >
                        <Text style={{ color: '#fff', fontSize: 20 }}>{move.name} {move.power}</Text>
                    </TouchableOpacity>
                ))}
            {finished ? 
            <TouchableOpacity
            style={[styles.pokemon, { backgroundColor: "#ff0000" }]}
            onPress={() => navigation.navigate('Home', { username: username })}
        >
            <Text style={{ color: '#fff', fontSize: 20 }}>
                Return to menu
            </Text>
        </TouchableOpacity>
        :<></>}
        </View>
    )
}

export default Battle

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
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 20,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontSize: 20,
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