import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
 import HomeScree from '../screens/home';
import About from '../screens/about'

const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={About}/>
           
        </Stack.Navigator>
    )
} 