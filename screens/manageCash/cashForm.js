import React from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import AddExistLedgerButton from '../../shared/addExistLedgerButton';


// const reviewSchema = yup.object({

//     // MsPrice: yup.string()
//     //   .required('MS Price Required'),
//     // HsdPrice: yup.string()
//     //   .required('HSD Price Required'),

// });


export default function CashForm({ addCashInfo, modalCloses }) {

  return (

    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          TransactionDate: '', TAmount: '', TransactionType: '', Note:'', Category: '', PaymentWay:''
        }}
        // validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addCashInfo(values);
        }}
      >
        {props => (
          <View style={globalStyles.legderContainer}>
            <ScrollView showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <View style={globalStyles.modalView}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                  <Text style={globalStyles.ledgerHeader}>Add transaction</Text>
                  <MaterialIcons
                    name='close'
                    size={24}
                    style={{
                      position: 'absolute',
                      right: 1,
                    }}
                    onPress={() => modalCloses()}
                  />
                </View>
                <View style={globalStyles.ledgerInput}>
              
                </View>
                <View style={globalStyles.ledgerInput}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Date'
                    onChangeText={props.handleChange('TransactionDate')}
                    onBlur={props.handleBlur('TransactionDate')}
                    value={props.values.TransactionDate}
                  />
                </View>
                <View style={globalStyles.ledgerInput}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Amount'
                    onChangeText={props.handleChange('TAmount')}
                    onBlur={props.handleBlur('TAmount')}
                    value={props.values.TAmount}
                    keyboardType='numeric'
                  />
                </View>


                <View style={globalStyles.ledgerInput}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Type'
                    onChangeText={props.handleChange('TransactionType')}
                    onBlur={props.handleBlur('TransactionType')}
                    value={props.values.TransactionType}

                  />
                </View>
                <View style={globalStyles.ledgerInput}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Category'
                    onChangeText={props.handleChange('Category')}
                    onBlur={props.handleBlur('Category')}
                    value={props.values.Category}
                
                  />
                </View>
                <View style={globalStyles.ledgerInput}>
                  <TextInput
                    style={globalStyles.input}
                    placeholder='Rate'
                    onChangeText={props.handleChange('Note')}
                    onBlur={props.handleBlur('Note')}
                    value={props.values.Note}
                   
                  />
                </View>

                {/* <Text style={globalStyles.errorText}>{props.touched.MsPrice && props.errors.MsPrice || props.touched.HsdPrice && props.errors.HsdPrice}</Text> */}

                <AddExistLedgerButton onPress={props.handleSubmit} text='submit' />
              </View>
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>

  );
}