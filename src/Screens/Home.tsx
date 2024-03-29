import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navbar from '../Components/Home/Navbar';
import Title from '../Components/Home/Title';
import Info from '../Components/Home/Info';
import Choices from '../Components/Home/Choices';
import Lpokemon from '../Components/Home/Lpokemon';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Navbar />
            <Title />
            <Info />
            <Choices />
            <Lpokemon />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    
});  