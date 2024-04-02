import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Trainer from "../Components/Fight/Trainer";
import Wild from "../Components/Fight/Wild";

export default function Fight({navigation}) {
    return (
        <View >
            <StatusBar style="light" />
            <Trainer navigation={navigation} />
            <Wild navigation={navigation} />
        </View>
    );
}