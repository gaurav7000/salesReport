import React, { useState, useEffect}  from 'react';
import { TextInput, View, Text, ScrollView, Picker, Dimensions, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../styles/global'
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons, EvilIcons  } from '@expo/vector-icons';
import AddExistLedgerButton from '../../shared/addExistLedgerButton';
import DateTimePickerModal from "react-native-modal-datetime-picker";
  
// const reviewSchema = yup.object({
//     // MsPrice: yup.string()
//     //   .required('MS Price Required'),
//     // HsdPrice: yup.string()
//     //   .required('HSD Price Required'),

// });

export default function AddingNewEntries({ addingExistingEntries, modalCloses }) {

    useEffect(() => {
        const todayDate = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
        setNewdate(todayDate);
    }, [])     
   
    const [newdate, setNewdate] = useState('')

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
 

    const [selectedValue, setSelectedValue] = useState('');

    const screen = Dimensions.get("window");

    return (

        <View>
            <Formik
                initialValues={{
                    BillDate: '',
                    // Credit: '', Debit: '', Deposit: '',
                    ExistingLedgerName: '',
                    VehicleNumber: '', DriverName: '',
                    PriceOfSale: '', FuleInLitres: '',
                    TypeOfFuel: '',
                    BillAmount: ''
                }}
                // validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addingExistingEntries(values);
                }}
            >
    {props => (
        <View style>
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={globalStyles.modalView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                        <Text style={globalStyles.ledgerHeader}>Add New Entries{newdate}</Text>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{
                                position: 'absolute',
                                right: 1,
                                color:'#fff'
                            }}
                            onPress={() => modalCloses()}
                        />
                    </View>
                    <TouchableOpacity onPress={showDatePicker}>
                    <View style={globalStyles.ledgerInput}>
                    <View style={globalStyles.input} > 
                                    
                                <Text style={{ fontSize: 18, color: '#fff',padding:4}}>{newdate}</Text> 
                                <EvilIcons name="calendar" size={34} color="white" style={{
                                     paddingTop:12,
                                    position: 'absolute',
                                    right: 16,
                                }} />
                        <DateTimePickerModal
                            placeholder='select date'
                            textColor="#fff"
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={(date) => {  
                                const selectDate = (date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
                                setNewdate(selectDate);
                                props.values.BillDate = newdate;
                                hideDatePicker();
                                }}
                            onCancel={hideDatePicker}
                            
                        />
                    </View>
                    </View>
                    </TouchableOpacity>

                    <View style={globalStyles.ledgerInput}>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Driver Name'
                            onChangeText={props.handleChange('DriverName')}
                            placeholderTextColor='#fff'
                            onBlur={props.handleBlur('DriverName')}
                            value={props.values.DriverName}
                        />
                    </View>

                    <View style={globalStyles.ledgerInput}>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Vehicle Number'
                            placeholderTextColor='#fff'
                            onChangeText={props.handleChange('VehicleNumber')}
                            onBlur={props.handleBlur('VehicleNumber')}
                            value={props.values.VehicleNumber}

                        />
                    </View>
                       <View style={globalStyles.ledgerInput}>
                    <View style={globalStyles.input}>
                        <Picker
                            selectedValue={selectedValue}
                                style={{ height: 30, width: screen.width / 1, color: 'white' }}
                                onValueChange={(itemValue) => {setSelectedValue(itemValue); props.values.TypeOfFuel=itemValue}}>
                            <Picker.Item label="Select the Fuel type"/>
                            <Picker.Item label="MS" value="MS" />
                            <Picker.Item label="HSD" value="HSD"/>
                            <Picker.Item label="Lubricant" value="Lubricant" />
                        </Picker>
                    </View>
                    </View>
               
                    <View style={globalStyles.ledgerInput}>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='In Litres'
                            placeholderTextColor='#fff'
                            onChangeText={props.handleChange('FuleInLitres')}
                            onBlur={props.handleBlur('FuleInLitres')}
                            value={props.values.FuleInLitres}
                            keyboardType='numeric'
                        />
                    </View>
             
                    <View style={globalStyles.ledgerInput}>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rate'
                            placeholderTextColor='#fff'
                            onChangeText={props.handleChange('PriceOfSale')}
                            onBlur={props.handleBlur('PriceOfSale')}
                            value={props.values.PriceOfSale}
                            keyboardType='numeric'
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