import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Ledger from '../screens/ledgerScreens/ledger';
import NewLedgerEnteries from '../screens/ledgerScreens/newLedgerEnteries';

const Stack = createStackNavigator();

export default function LedgerStack() {
    return (
        <Stack.Navigator initialRouteName={Ledger} screenOptions={{
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#111', height: 70, elevation: 0 }
        }}>
            <Stack.Screen name="Ledger" component={Ledger} options={({ navigation }) => {
                return {
                    headerTitle: () => <Header title='Ledger Report' navigation={navigation} />
                }
            }}
            />
            <Stack.Screen name="Ledger Enteries" component={NewLedgerEnteries} />
        </Stack.Navigator>
    )
}