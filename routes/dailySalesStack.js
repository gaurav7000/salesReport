import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import DailySalesReport from '../screens/dailySalesReport/dailySalesReport';
import DailySalesDetails from '../screens/dailySalesReport/dailySalesDetails';

const Stack = createStackNavigator();

export default function DailySalesStack() {
    return (
        <Stack.Navigator initialRouteName={DailySalesReport} screenOptions={{
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: '#111', height: 70, elevation: 0 }
        }}>
            <Stack.Screen name="DailySalesReport" component={DailySalesReport} options={({ navigation }) => {
                return {
                    headerTitle: () => <Header title='SalesReport' navigation={navigation} />
                }
            }}
            />
            <Stack.Screen name="DailySalesDetails" component={DailySalesDetails}  />
        </Stack.Navigator>
    )
}