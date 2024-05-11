import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import Title from '../Components/Shop/Title'
import { NavbarFull } from '../Components/Navbar/Navbar'
import ViewMore from '../assets/ViewMore'
import Modal from '../Components/Shop/Modal'

type ShopProps = {
    title: string
    items: Pokeball[]
}

type Pokeball = {
    max_amount: number
    name: string
    price: number
    image: string
    color?: string
}

const Shop = ({ navigation, route }) => {

    const { username } = route.params;

    const [pokeballs, setPokeballs] = useState<Pokeball[]>([]);
    const [eggs, setEggs] = useState<Pokeball[]>([]);
    const [buyModal, setBuyModal] = useState<string>("");

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const response = await fetch('http://192.168.0.34:5000/shop/Lytzeer');
                let data = await response.json();
                data.pokeballs = data.pokeballs.map((pokeball: Pokeball) => {
                    return {
                        ...pokeball,
                        image: pokeball.name === "Pokeball" ? require('../assets/pokeball.png') : pokeball.name === "Greatball" ? require('../assets/greatball.png') : pokeball.name === "Ultraball" ? require('../assets/ultraball.png') : require('../assets/masterball.png'),
                        color: pokeball.name === "Pokeball" ? "#FF0000" : pokeball.name === "Greatball" ? "#0000FF" : pokeball.name === "Ultraball" ? "#fdd23d" : "#7e2e8e"
                    }
                });
                data.eggs = data.eggs.map((egg: Pokeball) => {
                    return {
                        ...egg,
                        image: require('../assets/greenegg.png'),
                        color: "#93b16b"
                    }
                });
                setPokeballs(data.pokeballs);
                setEggs(data.eggs);
            } catch (error) {
                console.error(error);
            }
        }

        fetchShop();
    }, [])

    const shopData: ShopProps[] = [
        {
            title: "Pokeballs",
            items: pokeballs
        },
        {
            title: "Eggs",
            items: eggs
        }
    ]

    return (
        <View style={styles.container}>
            <NavbarFull username={username} navigation={navigation} />
            <Title />

            <View style={styles.shop}>
                {shopData.map((shop, index) => (
                    <View key={index} style={styles.shopSection}>
                        <Text style={styles.shopTitle}>
                            {shop.title}
                        </Text>

                        <View style={styles.shopItems}>
                            <FlatList
                                data={shop.items}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={[styles.shopItem, { backgroundColor: item.color }]}
                                        onPress={() => setBuyModal(item.name)}
                                    >
                                        <Image
                                            source={item.image as ImageSourcePropType}
                                        />
                                        <View style={styles.shopItemBottom}>
                                            <Text style={styles.shopItemTitle}>
                                                {item.name}
                                            </Text>
                                            <ViewMore color='#fff' />
                                        </View>

                                    </TouchableOpacity>
                                )}
                                horizontal
                            />
                        </View>
                    </View>
                ))}
            </View>

            {buyModal !== "" &&
                <Modal
                    visible={buyModal !== "" ? 1 : 0}
                    setVisible={setBuyModal}
                    data={
                        shopData.find(shop => shop.title === "Pokeballs")?.items.find(item => item.name === buyModal) ||
                        shopData.find(shop => shop.title === "Eggs")?.items.find(item => item.name === buyModal)
                    }
                />
            }
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    shop: {
        width: '100%',
        height: '100%',
    },
    shopSection: {
        marginTop: 20,
    },
    shopTitle: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    shopItems: {
        width: '100%',
        height: 200,
    },
    shopItem: {
        position: 'relative',
        width: 125,
        height: 145,
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shopItemBottom: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
        left: 35,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: -10,
    },
    shopItemTitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})