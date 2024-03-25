import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Navbar from '../Components/Home/Navbar';
import Title from '../Components/Home/Title';
import Info from '../Components/Home/Info';
import Choices from '../Components/Home/Choices';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Navbar />
            <Title />
            <Info />
            <Choices />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        flex: 1,
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 30,
    },
});  