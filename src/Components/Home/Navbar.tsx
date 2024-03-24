import { StyleSheet, Text, View, Image } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Image source={require('../../assets/menu.png')} />
            <Image source={require('../../assets/profile.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 55,
        backgroundColor: '#000',
    },
});