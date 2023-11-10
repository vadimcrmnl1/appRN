import {Button, FlatList, Image, Text, View} from "react-native";
import {styles} from "../../App";


const Item = ({avatar, firstName, lastName}: any) => {

    return (
        <View style={styles.userShort} >
            <Image style={styles.avaSmall} source={{uri: avatar.toString()}}/>
            <Text style={{fontSize: 20, marginRight: 5}}>{firstName}</Text>
            <Text style={{fontSize: 20}}>{lastName}</Text>
        </View>
        )

}
export const Profile = ({route, navigation}: any) => {
    const {data} = route.params
    console.log(data)

    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <Text style={styles.titleScreen}>Profile Screen</Text>
            <FlatList onTouchEnd={() => navigation.navigate('User', {data})}
                data={data}
                renderItem={({item}) => <Item firstName={item.firstName} lastName={item.lastName} avatar={item.avatar}/>}
                keyExtractor={item => item.id}
            />

            <Button title={'Jump to User'} onPress={() => navigation.navigate('User', {data})}/>
        </View>
    );
};