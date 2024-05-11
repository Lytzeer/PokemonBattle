import { StyleSheet, Text, View } from 'react-native';

export default function Navbar({title}) {
    return (
        <View>
            <Text style={styles.maintitle}>{title}</Text>
            <Text style={styles.subtitle}>Welcome Back!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    maintitle: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        paddingTop: 40,
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 20,
        fontSize: 25,
        opacity: 0.5,
        fontWeight: 'bold',
    },
});  