import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CalculatorScreen from '../screens/calculatorScreen'
// import Header from '../shared/header';


const Stack = createStackNavigator();

export default function CalculatorStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Calculator" component={CalculatorScreen} />
        </Stack.Navigator>
    )
}