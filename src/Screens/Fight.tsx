import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Trainer from "../Components/Fight/Trainer";
import Wild from "../Components/Fight/Wild";

export default function Fight({navigation,route}) {

    const {username} = route.params;
    console.log(username);

    return (
        <View >
            <StatusBar style="light" />
            <Trainer navigation={navigation} username={username} />
            <Wild navigation={navigation} username={username} />
        </View>
    );
}