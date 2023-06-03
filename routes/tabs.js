import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from './homeStack'; 
import DailySalesStack from './dailySalesStack';
import LedgerStack from './ledgerStack';
import CalculatorStack from './calculatorStack'
import CashStack from './cashStack'
import { MaterialCommunityIcons, Ionicons, FontAwesome  } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
 
const Tab = createMaterialBottomTabNavigator();

export default function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Dash Board" shifting={false} 
            activeColor="#f2f2f2"
            inactiveColor="#666"
            barStyle={{ backgroundColor: '#222224' }}>
            <Tab.Screen 
            name="Daily Sales Report"
            component={DailySalesStack} 
            options={{
                tabBarLabel: 'Sales',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="salesforce" size={24} color={color} />
          ),
        }}/>
            <Tab.Screen name="Ledger Account and Details"
            component={LedgerStack} 
            options={{
                tabBarLabel: 'Ledger',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="book" size={22} color={color}  />
          ),
        }}/>
            <Tab.Screen
                name="Dash Board"
                component={HomeStack}
                options={{
                    tabBarLabel: 'DashBoard',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-dashboard" size={22} color={color}  />
                    ),
                }} />
            <Tab.Screen name="Calculator"
                component={CalculatorStack}
                options={{
                    tabBarLabel: 'Calculator',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="calculator" size={22} color={color}  />
          ),
        }}/>
            <Tab.Screen 
            name="Manage Cash"
            component={CashStack} 
            options={{
                tabBarLabel: 'Manage',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="cash-register" size={20} color={color} />
          ),
        }}/>
        </Tab.Navigator>
    )
}