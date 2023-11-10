import {Button, Text, View} from "react-native";
import {styles} from "../../App";
import {UsersData} from "../Data/UsersData";

export const Home = ({navigation}: any) => {
    const data = UsersData
    console.log(data)
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>Home Screen</Text>
            <Button title={'Jump to Profile'} onPress={() => navigation.navigate('Profile', {data})}/>
        </View>
    );
};