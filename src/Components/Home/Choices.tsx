import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Choices({navigation,username}) {

    console.log(username);

    return(
        <View>
            <View style={styles.choices_container}>
                <TouchableOpacity style={styles.pokemon_container} onPress={() => navigation.navigate('Pokemon', { username: username })}>
                    <Text style={styles.text}>Pokemon</Text>
                    <Image source={require('../../assets/poke-ball.png')} style={styles.pokeball_image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.fight_container} onPress={() => navigation.navigate('Fight', { username: username })}>
                    <Text style={styles.text}>Fight</Text>
                    <Image source={require('../../assets/fight.png')} style={styles.pokeball_image} />
                </TouchableOpacity>
            </View>
            <View style={styles.choices_container}>
                <TouchableOpacity style={styles.shop_container} onPress={() => navigation.navigate('Shop', { username: username })}>
                    <Text style={styles.text}>Shop</Text>
                    <Image source={require('../../assets/shop.png')} style={styles.pokeball_image} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 30,
    },
    choices_container: {
        height: "auto",
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        marginBottom: 5,
    },
    pokemon_container: {
        backgroundColor: '#E80101',
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fight_container: {
        backgroundColor: '#FFC122',
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shop_container: {
        backgroundColor: '#16A70A',
        height: '100%',
        flex: 1,
        paddingLeft: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pokeball_image: {
        width: 80,
        height: 80,
        marginTop: 10,
    },
});