import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
    TouchableWithoutFeedback, Keyboard, Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import NewLedgerForm from './newLegderForm';
import Card from '../../shared/card';

export default function Ledger({ navigation }) {

    const [ledgerModalOpen, setLedgerModalOpen] = useState(false);
    const [newLegder, setNewLegder] = useState([
        // {
        //     legderName:'',
        //     ledgerPhoneNumber: '',
        //     ledgerAddress: '',
        // }
    ]);
    // const [ledgerReviews, setLedgerReviews] = useState([
    //     {
    //         Date:'',
    //         Credit:'', Debit: '', Balance:'',Deposit:'',
    //         VehicleNumber:'', DriverName: '',
    //         PriceOfSale:'',FuleInLitres:'',
    //         TypeOfFuel:'',
    //     }
    // ])

    const modalCloses = () => {
        setLedgerModalOpen(false);
    };

    const addNewLegder = (newuser) => {
        newuser.key = Math.random().toString();
        newuser.createdDate = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

        setNewLegder((currentUser) => {
            console.log(newuser);
            return [newuser, ...currentUser];
        });
        console.log(newLegder);
        setLedgerModalOpen(false);
    };

    const saveLedgerData = async () => {
        try {
            await AsyncStorage.setItem('newLedgerData', JSON.stringify(newLegder))
            // alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const readLedgerData = async () => {
        try {
            const existingLedger = await AsyncStorage.getItem('newLedgerData')
            const NewexistingLedger = JSON.parse(existingLedger);
            if (NewexistingLedger !== null) {
                // alert('Data loaded')
                setNewLegder(NewexistingLedger)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            // alert('Storage successfully cleared!')
        } catch (e) {
            alert('Failed to clear the async storage.')
        }
    }

    useEffect(() => {
        readLedgerData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <Modal visible={ledgerModalOpen} animationType='fade' transparent={true} onRequestClose={() => {
                setLedgerModalOpen(false);
            }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ backgroundColor:'rgba(0, 0, 0, 0.3)',flex:1}}>
                        {/* <MaterialIcons 
                  name='close'
                  size={24} 
                  style={{...styles.modalToggle, ...styles.modalClose}} 
                  onPress={() => setLedgerModalOpen(false)} 
                /> */}
                        <NewLedgerForm addNewLegder={addNewLegder} modalCloses={modalCloses} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
           
            <FlatList data={newLegder} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { navigation.navigate('Ledger Enteries', item) }}>
                    <Card>
                        <Text style={globalStyles.reviewFont}>Party Name : {item.legderName}</Text>
                        <Text style={globalStyles.reviewFont}>Contact no : {item.ledgerPhoneNumber}</Text>
                        <Text style={globalStyles.reviewFont}>Address : {item.ledgerAddress}</Text>
                    </Card>
                </TouchableOpacity>
            )} />

            <MaterialIcons
                name='add'
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setLedgerModalOpen(true)}
            />
        </View>
    );
}

