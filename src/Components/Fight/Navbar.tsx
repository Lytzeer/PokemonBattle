import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Navbar({navigation, username}) {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home', { username: username })}>
                <Image source={require('../../assets/back.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 55,
    },
});