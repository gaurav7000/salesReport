import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
    TouchableWithoutFeedback,  Keyboard 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../../shared/card';
import DailySalesForm from './dailySalesForm';
import moment from 'moment'
export default function DailySalesReport({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        // { 
        //   Local: '',

        //   MsPrice: '' , HsdPrice: '',

        //   MsOpening1: '', MsClosing1: '', MsSaleRupee1: '', MsSaleInLitre1: '', MsTesting1:'',
        //   MsOpening2: '', MsClosing2: '', MsSaleRupee2: '', MsSaleInLitre2: '', MsTesting2:'',

        //   HsdOpening1: '', HsdClosing1: '', HsdSaleRupee1: '', HsdSaleInLitre1: '', HsdTesting1: '',  
        //   HsdOpening2: '', HsdClosing2: '', HsdSaleRupee2: '', HsdSaleInLitre2: '', HsdTesting2: '',

        //   // TAR = Total Amount Recieved , EAR = Expected amount to recieve

        //   SalesMan1: '', SalesManCollection1: '', EPay1: '', SPay1: '', Expenditure1: '', OtherExpendiure1: '', Legder1: '', TAR1: '', EATR1: '', OutStanding1: '', Lubricate1: '',
        //   SalesMan2: '', SalesManCollection2: '', EPay2: '', SPay2: '', Expenditure2: '', OtherExpendiure2: '', Legder2: '', TAR2: '', EATR2: '', OutStanding2: '', Lubricate2: '',

        //   // Total MS and HSD Sale in Litres and Rupee
        //   MsSaleInLitre: '', HsdSaleInLitre: '',
        //   MsSaleRupee: '', HsdSaleRupee: '',

        //   TodaysCollection: '',

        //   key: '' 
        // }
    ]);
 
    const addReview = (review) => {
        
        review.key = Math.random().toString();

        review.MsSaleInLitre1 = ((parseFloat(review.MsClosing1) - parseFloat(review.MsOpening1)) - parseFloat(review.MsTesting1)).toFixed(2);
        review.MsSaleRupee1 = (parseFloat(review.MsSaleInLitre1) * parseFloat(review.MsPrice)).toFixed(2);

        review.MsSaleInLitre2 = ((parseFloat(review.MsClosing2) - parseFloat(review.MsOpening2)) - parseFloat(review.MsTesting2)).toFixed(2);
        review.MsSaleRupee2 = (parseFloat(review.MsSaleInLitre2) * parseFloat(review.MsPrice)).toFixed(2);

        review.HsdSaleInLitre1 = ((parseFloat(review.HsdClosing1) - parseFloat(review.HsdOpening1)) - parseFloat(review.HsdTesting1)).toFixed(2);
        review.HsdSaleRupee1 = (parseFloat(review.HsdSaleInLitre1) * parseFloat(review.HsdPrice)).toFixed(2);

        review.HsdSaleInLitre2 = ((parseFloat(review.HsdClosing2) - parseFloat(review.HsdOpening2)) - parseFloat(review.HsdTesting2)).toFixed(2);
        review.HsdSaleRupee2 = (parseFloat(review.HsdSaleInLitre2) * parseFloat(review.HsdPrice)).toFixed(2);

        review.TAR1 = parseFloat(review.SalesManCollection1) + parseFloat(review.EPay1) + parseFloat(review.SPay1) + parseFloat(review.Lubricate1) + parseFloat(review.Legder1) + parseFloat(review.Expenditure1) + parseFloat(review.OtherExpendiure1);
        review.TAR2 = parseFloat(review.SalesManCollection2) + parseFloat(review.EPay2) + parseFloat(review.SPay2) + parseFloat(review.Lubricate2) + parseFloat(review.Legder2) + parseFloat(review.Expenditure2) + parseFloat(review.OtherExpendiure2);

        review.EATR1 = (parseFloat(review.MsSaleRupee1) + parseFloat(review.HsdSaleRupee1) + parseFloat(review.Lubricate1)).toFixed(2);
        review.EATR2 = (parseFloat(review.MsSaleRupee2) + parseFloat(review.HsdSaleRupee2) + parseFloat(review.Lubricate2)).toFixed(2);

        review.OutStanding1 = (parseFloat(review.TAR1) - parseFloat(review.EATR1)).toFixed(2);
        review.OutStanding2 = (parseFloat(review.TAR2) - parseFloat(review.EATR2)).toFixed(2);

        review.MsSaleInLitre = (parseFloat(review.MsSaleInLitre1) + parseFloat(review.MsSaleInLitre2)).toFixed(2);
        review.HsdSaleInLitre = (parseFloat(review.HsdSaleInLitre1) + parseFloat(review.HsdSaleInLitre2)).toFixed(2);

        review.MsSaleRupee = (parseFloat(review.MsSaleRupee1) + parseFloat(review.MsSaleRupee2)).toFixed(2);
        review.HsdSaleRupee = (parseFloat(review.HsdSaleRupee1) + parseFloat(review.HsdSaleRupee2)).toFixed(2);
        review.Lubricate = (parseFloat(review.Lubricate1) + parseFloat(review.Lubricate2));

        review.TodaysCollection = parseFloat(review.MsSaleRupee) + parseFloat(review.HsdSaleRupee) + parseFloat(review.Lubricate);

        review.Local = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
        
        review.newDateReview = moment().format('LL');
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    };

    const deleteReview= (id) => {
        const newReviews = reviews.filter(review => {
            return review.id !== id
        });
        setReviews({
            newReviews
        });
    }

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('Gaurav', JSON.stringify(reviews))
            // alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    const readData = async () => {
        try {
            const existingProducts = await AsyncStorage.getItem('Gaurav')
            const newReviews = JSON.parse(existingProducts);
            if (newReviews !== null) {
                // alert('Data loaded')
                setReviews(newReviews)
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
        readData()
    }, [])

    useEffect(() => {
        saveData()

    }, [reviews])

    const modalDClose = (() => { setModalOpen(false) });
     
    {return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='fade' 
            transparent={true}
             onRequestClose={() => {
                setModalOpen(false);
            }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <DailySalesForm addReview={addReview} modalDClose={modalDClose} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {navigation.navigate('DailySalesDetails', item)}}>
                    <Card>
                        <View style={globalStyles.flexm}>
                        <Text style={globalStyles.titleText}>{item.shiftt}</Text>
                            <Text style={globalStyles.titleText}>{item.newDateReview}</Text>
                        </View>
                      
                        <View style={globalStyles.flexN}>
                            <Text style={globalStyles.reviewFont}>Price : MS :- ₹{item.MsPrice} , HSD :- ₹{item.HsdPrice}</Text>
                        </View> 

                        <View style={globalStyles.flexN}>
                            <Text style={globalStyles.reviewFont}>Total Sale :  MS : {item.MsSaleInLitre}L , HSD : {item.HsdSaleInLitre}L</Text>
                        </View>

                        <View style={globalStyles.flexN}>
                            <Text style={globalStyles.titleText}>Total Collection : </Text>
                            <Text style={globalStyles.titleText}>₹ {item.TodaysCollection}</Text>
                        </View>
                    </Card>
                </TouchableOpacity>
            )} />
             
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
        </View>
    );}
}

const styles = StyleSheet.create({
    modalToggle: {
        position: 'absolute',
        right: 16,         
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#fca311',
        padding: 15,
        borderRadius: 50,
        backgroundColor:'#fca311',         
        color: '#fff',
        bottom:0
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,        
    }
});