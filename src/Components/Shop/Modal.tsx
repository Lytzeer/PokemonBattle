import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, StyleProp, ImageStyle } from 'react-native'

interface ModalProps {
    visible: number
    setVisible: (visible: string) => void
    data: any
    username: string
}

const imagesTab = {
    "pokeball": require('../../assets/pokeball.png'),
    "greatball": require('../../assets/greatball.png'),
    "ultraball": require('../../assets/ultraball.png'),
    "masterball": require('../../assets/masterball.png'),
    "egg": require('../../assets/greenegg.png'),
}

const Modal = ({
    visible,
    setVisible,
    data,
    username
}: ModalProps) => {

    const [number, setNumber] = useState(1);

    console.log(data);
    console.log(username);

    const handleNumber = (sign: string) => {
        if (sign === "+" && number < data.max_amount) {
            setNumber(number + 1);
        } else if (sign === "-" && number > 1) {
            setNumber(number - 1);
        }
    }

    const handleBuy = async ({ name, price, number }: { name: string, price: number, number: number }) => {
        console.log(name, price, number);
        try {
            const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_URL}:5000/buy/${username}/${name}/${number}/${price}`);
            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {visible !== -1 && (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => setVisible("")}
                        style={styles.cross}
                    >
                        <Text style={styles.text}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.name}
                    >
                        {data.name}
                    </Text>
                    <Image
                        source={imagesTab[data.name.toLowerCase()]}
                        style={styles.image as StyleProp<ImageStyle>}
                    />
                    <Text style={styles.price}
                    >
                        {data.price}
                    </Text>

                    <View style={styles.containerBuy}>
                        {data.name !== "Egg" &&
                            <>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => handleNumber("-")}
                                >
                                    <Text style={styles.text}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.count}>{number}</Text>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={() => handleNumber("+")}
                                >
                                    <Text style={styles.text}>+</Text>
                                </TouchableOpacity>
                            </>
                        }
                    </View>

                    <TouchableOpacity
                        style={styles.btnBuy}
                        onPress={() => handleBuy({ name: data.name, price: data.price, number })}
                    >
                        <Text style={styles.text}>Buy</Text>
                    </TouchableOpacity>

                </View>
            )}
        </>
    )
}

export default Modal

const styles = StyleSheet.create({
    cross: {
        position: "absolute",
        top: 10,
        right: 15,
    },
    container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -150 }, { translateY: -150 }],
        width: 300,
        height: 300,
        backgroundColor: "#373737",
        borderRadius: 20,
        alignItems: "center",
    },
    name: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    price: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    containerBuy: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center",
        gap: 10,
    },
    btn: {
        width: 30,
        height: 30,
        backgroundColor: "#48d0b0",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    count: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    btnBuy: {
        width: 100,
        height: 30,
        backgroundColor: "#48d0b0",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    }
})