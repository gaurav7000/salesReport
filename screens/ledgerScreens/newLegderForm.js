import React from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import LegderFlatButton from '../../shared/ledgerButton';

// const reviewSchema = yup.object({

//     // MsPrice: yup.string()
//     //   .required('MS Price Required'),
//     // HsdPrice: yup.string()
//     //   .required('HSD Price Required'),

// });

export default function NewLedgerForm({ addNewLegder, modalCloses }) {

    return (

        <View>
            <Formik
                initialValues={{
                    key: '',
                    createdDate: '',
                    legderName: '',
                    ledgerPhoneNumber: '',
                    ledgerAddress: '',
                }}
                // validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addNewLegder(values);
                }}
            >
                {props => (
                    <View >
                        <ScrollView showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}>
                            <View style={globalStyles.modalView}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                    <Text style={globalStyles.ledgerHeader}>Create a New Legder Account</Text>
                                    <MaterialIcons
                                        name='close'
                                        size={24}
                                        style={{
                                            position: 'absolute',
                                            right: 1,
                                            color: '#fff'
                                        }}
                                        onPress={() => modalCloses()}
                                    />
                                </View>
                                <View style={globalStyles.ledgerInput}>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Full Name'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('legderName')}
                                        onBlur={props.handleBlur('legderName')}
                                        value={props.values.legderName}
                                    />
                                </View>
                                <View style={globalStyles.ledgerInput}>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Phone Number'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('ledgerPhoneNumber')}
                                        onBlur={props.handleBlur('ledgerPhoneNumber')}
                                        value={props.values.ledgerPhoneNumber}
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={globalStyles.ledgerInput}>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Address'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('ledgerAddress')}
                                        onBlur={props.handleBlur('ledgerAddress')}
                                        value={props.values.ledgerAddress}
                                    />

                                </View>
                                {/* <Text style={globalStyles.errorText}>{props.touched.MsPrice && props.errors.MsPrice || props.touched.HsdPrice && props.errors.HsdPrice}</Text> */}

                                <LegderFlatButton onPress={props.handleSubmit} text='submit' />

                            </View>
                        </ScrollView>
                    </View>
                )}
            </Formik>
        </View>

    );
}