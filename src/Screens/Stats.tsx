import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

interface StatsProps {
    navigation: any;
    route: any;
}

const Stats = ({
    navigation,
    route
}: StatsProps) => {

    console.log(route.params);

    const [stats, setStats] = useState({
        attack: 0,
        defense: 0,
        health: 0,
        spe_attack: 0,
        spe_defense: 0,
        speed: 0,
        type1: "",
        type2: ""
    });

    const [colors, setColors] = useState({
        "normal": "#919AA2",
        "fighting": "#CE416B",
        "flying": "#8FA9DE",
        "poison": "#AA6BC8",
        "ground": "#D97845",
        "rock": "#C5B78C",
        "bug": "#91C12F",
        "ghost": "#5269AD",
        "steel": "#5A8EA2",
        "fire": "#FF9D55",
        "water": "#5090D6",
        "grass": "#63BC5A",
        "electric": "#F4D23C",
        "psychic": "#FA7179",
        "ice": "#73CEC0",
        "dragon": "#0B6DC3",
        "dark": "#5A5465",
        "fairy": "#EC8FE6"
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`http://192.168.1.25:5000/pokemon_stats/${route.params.name}`);
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchStats();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', { username: route.params.username })}>
                    <Image source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Stats
                </Text>
            </View>

            <Text style={{ color: '#fff', fontSize: 20, marginTop: '10%' }}>
                {route.params.name.charAt(0).toUpperCase() + route.params.name.slice(1)}
            </Text>

            <View style={[styles.image, {
                backgroundColor: colors[stats.type1] || '#000',
            }]}>
            </View>

            <View style={styles.stats}>
                <Text style={styles.statsText}>
                    Attack :
                    {stats.attack}
                </Text>
                <Text style={styles.statsText}>
                    Defense :
                    {stats.defense}
                </Text>
                <Text style={styles.statsText}>
                    Health :
                    {stats.health}
                </Text>
                <Text style={styles.statsText}>
                    Special Attack :
                    {stats.spe_attack}
                </Text>
                <Text style={styles.statsText}>
                    Special Defense :
                    {stats.spe_defense}
                </Text>
                <Text style={styles.statsText}>
                    Speed :
                    {stats.speed}
                </Text>
                <Text style={styles.statsText}>
                    Type 1 :
                    {stats.type1}
                </Text>
                {stats.type2 !== "" && <Text style={styles.statsText}>
                    Type 2 :
                    {stats.type2}
                </Text>}
            </View>
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '30%',
    },
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
    },
    image: {
        width: "100%",
        height: '40%',
    },
    stats: {
        width: '90%',
        height: '45%',
        justifyContent: 'center',
    },
    statsText: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})