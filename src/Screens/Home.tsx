import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../Components/Home/Navbar';
import Title from '../Components/Home/Title';
import Info from '../Components/Home/Info';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Navbar />
            <Title />
            <Info />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
    },
});  