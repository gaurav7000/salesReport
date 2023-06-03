import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import CashReport from '../screens/manageCash/cashReport';
import CashDetails from '../screens/manageCash/cashDetails';

const Stack = createStackNavigator();

export default function CashStack() {
  return (
    <Stack.Navigator initialRouteName={CashReport} screenOptions={{
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#111', height: 70, elevation: 0 }
    }}>
      <Stack.Screen name="Cash Manager" component={CashReport} options={({ navigation }) => {
        return {
          headerTitle: () => <Header title='Cash Manager' navigation={navigation} />
        }
      }}
      />
      <Stack.Screen name="All transcations" component={CashDetails} />
    </Stack.Navigator>
  )
}