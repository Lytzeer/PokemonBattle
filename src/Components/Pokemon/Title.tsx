import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View>
            <Text style={styles.maintitle}>What Are You Looking For?</Text>
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
});  