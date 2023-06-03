import React  from 'react';
import {  View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {
    return (
        <SafeAreaView style={globalStyles.container}>
        <View >
            <Text style={{color: 'white'}}>Home Screen</Text>             
            </View></SafeAreaView>
    );
}