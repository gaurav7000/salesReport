import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Modal, Keyboard, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import LegderFlatButton from '../../shared/ledgerButton';
import AddingNewEntries from './addingNewEntries';

 

// import * as Print from 'expo-print';
// import * as Sharing from 'expo-sharing';

export default function NewLedgerEnteries({ route }) {

    const [ledgerModalOpen, setLedgerModalOpen] = useState(false);
    const modalCloses = () => {
        setLedgerModalOpen(false);
    };

    const ledgerData = route.params

    //Ledger Data
    const [ledgerDataOfSale, setLedgerDataOfSale] = useState([])

    // Sorted LEdger Data
    const [sortListOfLederReview, setSortListOfLederReview] = useState([])


    const sortedFunctionCall = async () => {
        try {
            let LedgerSortedList = ledgerDataOfSale.filter(sortList => sortList.ExistingLedgerName = ledgerData.legderName);
            if (LedgerSortedList !== null) {
                // alert('Data loaded')
                setSortListOfLederReview(LedgerSortedList)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const addingExistingEntries = (newEntries) => {
       
        newEntries.id = Math.random().toString();
        newEntries.BillAmount = newEntries.FuleInLitres * newEntries.PriceOfSale;
        newEntries.ExistingLedgerName = ledgerData.legderName;
        setLedgerDataOfSale((currentUser) => {
            return [newEntries, ...currentUser];
         
        });
        setSortListOfLederReview((currentData) => {
            return [newEntries, ...currentData];
        });
        console.log(ledgerDataOfSale);
        setLedgerModalOpen(false);
    };

    // const saveExistingDataOfLedger = async () => {
    //     try {
    //         await AsyncStorage.setItem('existingLedgerData', JSON.stringify(ledgerDataOfSale))
    //         // alert('Data successfully saved')
    //     } catch (e) {
    //         alert('Failed to save the data to the storage')
    //     }
    // }

    // const readExistingDataOfLedger = async () => {
    //     try {
    //         const existingSalesDataOfLedger = await AsyncStorage.getItem('existingLedgerData')
    //         const existingData = JSON.parse(existingSalesDataOfLedger);
    //         if (existingData !== null) {
    //             // alert('Data loaded')
    //             setReviews(existingData)
    //         }
    //     } catch (e) {
    //         alert('Failed to fetch the data from storage')
    //     }
    // }

    // const clearStorage = async () => {
    //     try {
    //         await AsyncStorage.clear()
    //         // alert('Storage successfully cleared!')
    //     } catch (e) {
    //         alert('Failed to clear the async storage.')
    //     }
    // }

    // useEffect(() => {
    //     readExistingDataOfLedger()
    // }, [])

    return (

        <View style={globalStyles.container}>
 
                <Card>
                    <Text style={globalStyles.headerMSHSD}>Ledger Details</Text>
                    <Text style={globalStyles.reviewFont}>Account Created On : {ledgerData.createdDate}</Text>
                    <Text style={globalStyles.reviewFont}>Party Name : {ledgerData.legderName}</Text>
                    <Text style={globalStyles.reviewFont}>Phone Number : {ledgerData.ledgerPhoneNumber}</Text>
                    <Text style={globalStyles.reviewFont}>Address : {ledgerData.ledgerAddress}</Text>
                </Card>
                <Card>
                    <Text style={globalStyles.headerMSHSD}>Bill Details</Text>
                    <Text style={globalStyles.reviewFont}>Pendings Bills : {ledgerData.createdDate}</Text>
                    <Text style={globalStyles.reviewFont}>Bills Amount : {ledgerData.legderName}</Text>
                </Card>

                <Modal visible={ledgerModalOpen} animationType='fade' transparent={true} onRequestClose={() => {
                    setLedgerModalOpen(false);
                }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={globalStyles.modalContent}>
                            <AddingNewEntries modalCloses={modalCloses} addingExistingEntries={addingExistingEntries} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <LegderFlatButton text='Add New Entries' onPress={() => { setLedgerModalOpen(true); }} />

                <FlatList data={sortListOfLederReview} renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card>
                        <Text style={globalStyles.reviewFont}>Bill Date : {item.BillDate}</Text>
                            <Text style={globalStyles.reviewFont}>Driver Name : {item.DriverName}</Text>
                            <Text style={globalStyles.reviewFont}>Vehicle No. : {item.VehicleNumber}</Text>
                            <Text style={globalStyles.reviewFont}>Type of Fuel : {item.TypeOfFuel}</Text>
                            <View style={globalStyles.flexR}>
                                <Text style={globalStyles.reviewFont}>Rate : ₹{item.PriceOfSale}</Text>
                                <Text style={globalStyles.reviewFont}>In Litres : {item.FuleInLitres} L</Text>
                            </View>
                            <View style={globalStyles.flexR}>
                                <Text style={globalStyles.reviewFont}>Bill Amount : ₹{item.BillAmount}</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )} />    
        </View>
    );
}