import { StyleSheet, View, Text } from "react-native";

export default function Info() {
    return (
        <View style={styles.box}>
            <View style={styles.info_box}>
                <View style={styles.money_box}>
                    <Text style={styles.mtext}>You have:</Text>
                    <Text style={styles.stext}>974897654 ₽</Text>
                </View>
                <View style={styles.standing_box}>
                    <Text style={styles.mtext}>Your place:</Text>
                    <Text style={styles.stext}>#1</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    money_box: {
        flexDirection: 'row',
    },
    standing_box: {
        flexDirection: 'row',
    },
    info_box: {
        padding: 20,
        backgroundColor: '#1a1a1a',
        width: '80%',
        borderRadius: 20,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    mtext: {
        color: '#fff',
        marginRight: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    stext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.5,
    },
});