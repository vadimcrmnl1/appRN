import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from 'react-native';
import {Home} from "./src/Screens/Home";
import {Profile} from "./src/Screens/Profile";
import {User} from "./src/Screens/User";


const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Profile' component={Profile}/>
                <Tab.Screen name='User' component={User}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleScreen: {
        fontSize: 22,

    },
    userShort: {
        width: 300,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'red',
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avaSmall: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20
    },
    avaLarge: {
        width: 150,
        height: 150,
        borderRadius: 50,
    },
    description: {
        fontSize: 20,
    }
});
