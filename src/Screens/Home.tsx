import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../Components/Home/Title';
import Info from '../Components/Home/Info';
import Choices from '../Components/Home/Choices';
import Lpokemon from '../Components/Home/Lpokemon';
import { Navbar } from '../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';

export interface UserInfos {
    last_pokemon: LastPokemon[];
    money: number;
    standing_position: number;
    username: string;
}

export interface LastPokemon {
    height: number;
    name: string;
    pokedex_id: number;
    pokemon_id: number;
    types: Array<Type[]>;
    weight: number;
}

export interface Type {
    name: string;
    type_id: number;
}

export default function Home({ navigation, route }) {

    const { username } = route.params;
    console.log(username);

    const [userInfos, setUserInfos] = useState({} as UserInfos);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserInfos = async () => {
        try {
            const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/user_info/${username}`);
            const data = await response.json();
            console.log(data);
            setUserInfos(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUserInfos();
    }, []);

    if (isLoading) {
        return (
            <View>
                <Text>Loading... Home</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Navbar
                navigation={navigation}
                username={username}
            />
            <Title
                title={`Hi! ${userInfos.username} 👋`}
            />
            <Info
                navigation={navigation}
                money={userInfos.money}
                standing_position={userInfos.standing_position}
                username={userInfos.username}
            />
            <Choices
                navigation={navigation}
                username={username}
            />
            <Lpokemon
                username={username}
                navigation={navigation}
                lasts={userInfos.last_pokemon.map((pokemon) => {
                    return {
                        name: pokemon.name
                    }
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000',
    },

});  