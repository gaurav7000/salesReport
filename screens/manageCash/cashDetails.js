import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';

export default function NewLedgerEnteries({ route }) {
 
  const cashData = route.params;

   return (

    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.headerMSHSD}>Ledger Details</Text>
         <Text style={globalStyles.reviewFont}>Account Created On : {cashData.TransactionDate}</Text>
         <Text style={globalStyles.reviewFont}>Party Name : {cashData.TAmount}</Text>
         <Text style={globalStyles.reviewFont}>Phone Number : {cashData.TransactionType}</Text>
         <Text style={globalStyles.reviewFont}>Address : {cashData.Note}</Text>
      </Card>
    </View>

  );
}