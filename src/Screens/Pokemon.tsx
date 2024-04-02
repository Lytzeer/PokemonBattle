import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";

export default function Pokemon({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Pokemon</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
    },
});