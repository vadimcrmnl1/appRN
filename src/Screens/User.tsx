import React from 'react';
import {Button, FlatList, Image, Text, View} from "react-native";
import {styles} from "../../App";
import {UserType} from "../Data/UsersData";
import {UserProps} from "../types/types";

const SkillItem = ({skill}) => {
    return (
        <View>
            <Text style={styles.description}>{skill}</Text>
        </View>
    )
}

const ItemFull = ({avatar, skills, lastName, firstName, role, location}: UserType) => {

    return (
        <View>
            <Image style={[styles.avaLarge]} source={{uri: avatar.toString()}}/>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                <Text style={styles.description}>{firstName}</Text>
                <Text style={styles.description}>{lastName}</Text>
            </View>
            <Text style={styles.description}>Role: {role}</Text>
            <Text style={styles.description}>Location: </Text>
            <Text style={styles.description}>Country: {location.country}</Text>
            <Text style={styles.description}>City: {location.city}</Text>
            <FlatList data={skills} renderItem={({item}) => <SkillItem skill={item}/>} keyExtractor={item => item}/>
        </View>
    )

}
export const User = ({route, navigation}: UserProps) => {
    const {data} = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.titleScreen}>User Screen</Text>
            <View style={{flex: 1, alignItems: 'center'}}>
                <FlatList
                    data={data}
                    renderItem={({item}) => <ItemFull avatar={item.avatar} lastName={item.lastName}
                                                      firstName={item.firstName} role={item.role}
                                                      location={item.location} skills={item.skills} id={item.id}/>}
                    keyExtractor={item => item.id}
                />
            </View>
            <Button title={'Jump to Home'} onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};
