import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text, Image, ImageSourcePropType } from 'react-native'
import { NavbarFull } from '../Components/Navbar/Navbar'
import Title from '../Components/Classement/Title'

interface StandingProps {
    username: string
    money: number
    image: string
}


const Classement = ({ navigation, route }) => {

    const { username } = route.params;

    const [standings, setStandings] = useState<StandingProps[]>([]);

    useEffect(() => {
        const fetchStandings = async () => {
            try {
                const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/standing`);
                let data = await response.json();
                data = data.map((standing: StandingProps) => {
                    return {
                        ...standing,
                        image: require('../assets/profile.png'),
                    }
                });
                setStandings(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchStandings();
    }, [])

    return (
        <View style={styles.container}>
            <NavbarFull username={username} navigation={navigation} />
            <Title />

            <View style={styles.standings}>
                <FlatList
                    data={standings}
                    renderItem={({ item, index }) => (
                        <View 
                        style={[
                            styles.standing,
                            index === 0 ? 
                            { backgroundColor: '#eebc0a' } 
                            : [index === 1 ? { backgroundColor: '#97a5a1' } 
                            : index === 2 ? { backgroundColor: '#BA8161' } 
                            : { backgroundColor: '#333' }]
                        ]}
                        >
                            <Image
                                source={item.image as ImageSourcePropType}
                                style={styles.standingImage}
                            />
                            <View style={styles.standingInfo}>
                                <Text style={styles.standingName}>
                                    {item.username.charAt(0).toUpperCase() + item.username.slice(1)}
                                </Text>
                                <Text style={styles.standingPoints}>
                                    {item.money} ₽
                                </Text>
                            </View>
                            <Text style={styles.standingPosition}>
                                #{index + 1}
                            </Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default Classement

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    standings: {
        marginTop: 25,
        width: '100%',
    },
    standing: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 50,
        marginBottom: 10,
    },
    standingImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    standingInfo: {
        position: 'absolute',
        left: 60,
        display: 'flex',
        flexDirection: 'column',
    },
    standingName: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        fontWeight: 'bold',
    },
    standingPoints: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        fontWeight: 'bold',
    },
    standingPosition: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        fontWeight: 'bold',
    },
});