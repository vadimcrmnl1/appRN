import {UserType} from "../Data/UsersData";
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigatorScreenParams} from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Profile: {data: UserType[]};
    User: {data: UserType[]} ;
};
export type ItemType = {
    avatar: string
    firstName: string
    lastName: string
}
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;
