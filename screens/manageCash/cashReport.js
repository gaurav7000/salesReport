import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import CashForm from './cashForm'
import Card from '../../shared/card';
 
export default function Ledger({ navigation }) {

  const [cashModalOpen, setCashModalOpen] = useState(false);
  const [currentCash, setCurrentCash] = useState('')
  const [currentSpending, setCurrentSpending] = useState('')
  const [cashData, setCashData] = useState([])

  const modalCloses = () => {
    setCashModalOpen(false);
  };

  const addCashInfo = (newCashData) => {
    newCashData.key = Math.random().toString();
 
    setCashData((currentCash) => {
      console.log(newCashData);
      return [newCashData, ...currentCash];
    });
    setCashModalOpen(false);
  };
{
  // const saveCashData= async () => {
  //   try {
  //     await AsyncStorage.setItem('newLedgerData', JSON.stringify(newLegder))
  //     // alert('Data successfully saved')
  //   } catch (e) {
  //     alert('Failed to save the data to the storage')
  //   }
  // }

  // const readCashData= async () => {
  //   try {
  //     const existingLedger = await AsyncStorage.getItem('newLedgerData')
  //     const NewexistingLedger = JSON.parse(existingLedger);
  //     if (NewexistingLedger !== null) {
  //       // alert('Data loaded')
  //       setNewLegder(NewexistingLedger)
  //     }
  //   } catch (e) {
  //     alert('Failed to fetch the data from storage')
  //   }
  // }

  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear()
  //     // alert('Storage successfully cleared!')
  //   } catch (e) {
  //     alert('Failed to clear the async storage.')
  //   }
  // }

  // useEffect(() => {
  //   readLedgerData()
  // }, [])

  }
  
  return (
    <View style={globalStyles.container}>
      
      <Modal visible={cashModalOpen} animationType='fade' transparent={true} onRequestClose={() => {
        setCashModalOpen(false);
      }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>           
            <CashForm addCashInfo={addCashInfo} modalCloses={modalCloses} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList data={cashData} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => { navigation.navigate('All transcations', item) }}>
          <Card>
            <Text style={globalStyles.titleText}>{item.TransactionDate}</Text>
            <Text style={globalStyles.titleText}>{item.TAmount}</Text>
            <Text style={globalStyles.titleText}>{item.Note}</Text>
            <Text style={globalStyles.titleText}>{item.TransactionDate}</Text>
          </Card>
        </TouchableOpacity>
      )} />

      <MaterialIcons
        name='add'
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setCashModalOpen(true)}
      />
    
    </View>
  );
}