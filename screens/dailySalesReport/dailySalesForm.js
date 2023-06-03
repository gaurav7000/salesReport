import React,{ useState } from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../../shared/button.js';
import Card from '../../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';


// const reviewSchema = yup.object({

//     shiftt: yup.string()
//         .required('choose the option'),
//     MsPrice: yup.string()
//       .required('MS Price Required'),
//     HsdPrice: yup.string()
//       .required('HSD Price Required'),

//     MsOpening1: yup.string()
//       .required('Opening Reading is required'),
//     MsClosing1: yup.string()
//       .required('Closing Reading is required'),
//     MsTesting1: yup.string()
//       .required('Testing is Required'),

//     MsOpening2: yup.string()
//       .required('Opening Reading is required'),
//     MsClosing2: yup.string()
//       .required('Closing Reading is required'),
//     MsTesting2: yup.string()
//       .required('Testing is Required'),

//     HsdOpening1: yup.string()
//       .required('Opening Reading is required'),
//     HsdClosing1: yup.string()
//       .required('Closing Reading is required'),
//     HsdTesting1: yup.string()
//       .required('Testing is Required'),

//     HsdOpening2: yup.string()
//       .required('Opening Reading is required'),
//     HsdClosing2: yup.string()
//       .required('Closing Reading is required'),
//     HsdTesting2: yup.string()
//       .required('Testing is Required'),

//     SalesMan1: yup.string()
//         .required('Box Empty'),
//     SalesManCollection1: yup.string()
//       .required('Box Empty'),
//     EPay1: yup.string()
//       .required('Box Empty'),
//     SPay1: yup.string()
//       .required('Box Empty'),
//     Legder1: yup.string()
//       .required('Box Empty'), 
//     Lubricate1: yup.string()
//       .required('Box Empty'),
//     Expenditure1: yup.string()
//       .required('Box Empty'),
//     OtherExpendiure1: yup.string()
//       .required('Box Empty'),

//     SalesMan2: yup.string()
//         .required('Box Empty'),
//     SalesManCollection2: yup.string()
//       .required('Box Empty'),
//     EPay2: yup.string()
//       .required('Box Empty'),
//     SPay2: yup.string()
//       .required('Box Empty'),
//     Legder2: yup.string()
//       .required('Box Empty'),
//     Lubricate2: yup.string()
//       .required('Box Empty'),
//     Expenditure2: yup.string()
//       .required('Box Empty'),
//     OtherExpendiure2: yup.string()
//       .required('Box Empty'),

// });

export default function DailySalesForm({ addReview, modalDClose }) {
    const [val, setVal] = useState('')
    return (

        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    Local: '', newDateReview: '', shiftt:'',
                    
                    MsPrice: '', HsdPrice: '',

                    MsOpening1: '', MsClosing1: '', MsSaleRupee1: '', MsSaleInLitre1: '', MsTesting1: '',
                    MsOpening2: '', MsClosing2: '', MsSaleRupee2: '', MsSaleInLitre2: '' , MsTesting2: '',

                    HsdOpening1: '', HsdClosing1: '', HsdSaleRupee1: '', HsdSaleInLitre1: '', HsdTesting1: '',
                    HsdOpening2: '', HsdClosing2: '', HsdSaleRupee2: '', HsdSaleInLitre2: '', HsdTesting2: '',

                    // TAR = Total Amount Recieved , EAR = Expected amount to recieve
                    SalesMan1: '', SalesManCollection1: '', EPay1: '', SPay1: '', Expenditure1: '', OtherExpendiure1: '', Legder1: '', TAR1: '', EATR1: '', OutStanding1: '', Lubricate1: '',
                    SalesMan1: '', SalesManCollection2: '', EPay2: '', SPay2: '', Expenditure2: '', OtherExpendiure2: '', Legder2: '', TAR2: '', EATR2: '', OutStanding2: '', Lubricate2: '',

                    // Total MS and HSD Sale in Litres and Rupee
                    MsSaleInLitre: '', HsdSaleInLitre: '',
                    MsSaleRupee: '', HsdSaleRupee: '',
                    Lubricate: '',

                    TodaysCollection: '',
                }}
                // validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {props => (
                    <View>
                        <View style={globalStyles.modalDView}>

                            <ScrollView showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                    <Text style={globalStyles.ledgerHeader}>Create a New Legder Account</Text>
                                    <MaterialIcons
                                        name='close'
                                        size={24}
                                        style={{
                                            position: 'absolute',
                                            right: 1,
                                            color: '#fff',
                                        }}
                                        onPress={modalDClose}
                                    />
                                </View>
                                {/* Input for Price : MS and HSD */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>Today's Rate</Text>
                                     
                                    <View style={globalStyles.flexR}>
                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder='MS Price'
                                            placeholderTextColor='#fff'
                                            onChangeText={props.handleChange('MsPrice')}
                                            onBlur={props.handleBlur('MsPrice')}
                                            value={props.values.MsPrice}
                                            keyboardType='numeric'
                                        />

                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder='HSD Price'
                                            placeholderTextColor='#fff'
                                            onChangeText={props.handleChange('HsdPrice')}
                                            onBlur={props.handleBlur('HsdPrice')}
                                            value={props.values.HsdPrice}
                                            keyboardType='numeric'
                                        />

                                    </View>
                                    <Text style={globalStyles.errorText}>{props.touched.MsPrice && props.errors.MsPrice || props.touched.HsdPrice && props.errors.HsdPrice}</Text>
                                </Card>
                                
                                <Card> 
                                    <Text style={globalStyles.formMSnHSD}>Select the Shift</Text>
                                     
                                        
                                        
                                    <RadioButton.Group onValueChange={(newValue) => { setVal(newValue); props.values.shiftt=newValue;}} value={props.values.shiftt}>
                                              <View style={globalStyles.flexR}>
                                            <View style={globalStyles.flexR}>
                                                    
                                                    <RadioButton name='shiftt' value="Morning Shift" uncheckedColor='#fff' color='#fff'/>
                                                    <Text style={globalStyles.formMSnHSD}>Morning</Text>
                                            </View>
                                            <View style={globalStyles.flexR}>
                                                
                                                <RadioButton name='shiftt' value="Night Shift" uncheckedColor='#fff'color='#fff'/>
                                                <Text style={globalStyles.formMSnHSD}>Night</Text>
                                            </View>
                                            
                                            </View>
                                        <Text style={globalStyles.errorText}>{props.touched.shiftt && props.errors.shiftt}</Text>
                                            </RadioButton.Group>
                                
                                </Card>
                               
                                {/* Input's for Nozzle 1 */}
                                {/* <Card> */}
                                {/* Ms: Nozzle 1 Card */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>MS : Nozzle 1</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Closing Reading'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('MsClosing1')}
                                        onBlur={props.handleBlur('MsClosing1')}
                                        value={props.values.MsClosing1}
                                        keyboardType='numeric'
                                    />
                                    {/* only if the left value is a valid string, will the right value be displayed */}
                                    <Text style={globalStyles.errorText}>{props.touched.MsClosing1 && props.errors.MsClosing1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Opening Reading'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('MsOpening1')}
                                        onBlur={props.handleBlur('MsOpening1')}
                                        value={props.values.MsOpening1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.MsOpening1 && props.errors.MsOpening1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Testing'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('MsTesting1')}
                                        onBlur={props.handleBlur('MsTesting1')}
                                        value={props.values.MsTesting1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.MsTesting1 && props.errors.MsTesting1}</Text>
                                </Card>

                                {/*Hsd : Nozzle 1 Card */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>HSD : Nozzle 1</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Closing Reading'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('HsdClosing1')}
                                        onBlur={props.handleBlur('HsdClosing1')}
                                        value={props.values.HsdClosing1}
                                        keyboardType='numeric'
                                    />
                                    {/* only if the left value is a valid string, will the right value be displayed */}
                                    <Text style={globalStyles.errorText}>{props.touched.HsdClosing1 && props.errors.HsdClosing1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Opening Reading'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('HsdOpening1')}
                                        onBlur={props.handleBlur('HsdOpening1')}
                                        value={props.values.HsdOpening1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.HsdOpening1 && props.errors.HsdOpening1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Testing'
                                        placeholderTextColor='#fff'
                                        onChangeText={props.handleChange('HsdTesting1')}
                                        onBlur={props.handleBlur('HsdTesting1')}
                                        value={props.values.HsdTesting1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.HsdTesting1 && props.errors.HsdTesting1}</Text>
                                </Card>
                                {/* </Card> */}

                                {/* Input's for Nozzle 2 */}
                                {/* <Card> */}
                                {/*Ms : Nozzle 2 Card */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>MS : Nozzle 2</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Closing Reading'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('MsClosing2')}
                                        onBlur={props.handleBlur('MsClosing2')}
                                        value={props.values.MsClosing2}
                                        keyboardType='numeric'
                                    />
                                    {/* only if the left value is a valid string, will the right value be displayed */}
                                    <Text style={globalStyles.errorText}>{props.touched.MsClosing2 && props.errors.MsClosing2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Opening Reading'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('MsOpening2')}
                                        onBlur={props.handleBlur('MsOpening2')}
                                        value={props.values.MsOpening2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.MsOpening2 && props.errors.MsOpening2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Testing'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('MsTesting2')}
                                        onBlur={props.handleBlur('MsTesting2')}
                                        value={props.values.MsTesting2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.MsTesting2 && props.errors.MsTesting2}</Text>
                                </Card>

                                {/*Hsd : Nozzle 2 Card */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>HSD : Nozzle 2</Text>
                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Closing Reading'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('HsdClosing2')}
                                        onBlur={props.handleBlur('HsdClosing2')}
                                        value={props.values.HsdClosing2}
                                        keyboardType='numeric'
                                    />
                                    {/* only if the left value is a valid string, will the right value be displayed */}
                                    <Text style={globalStyles.errorText}>{props.touched.HsdClosing2 && props.errors.HsdClosing2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Opening Reading'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('HsdOpening2')}
                                        onBlur={props.handleBlur('HsdOpening2')}
                                        value={props.values.HsdOpening2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.HsdOpening2 && props.errors.HsdOpening2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Testing'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('HsdTesting2')}
                                        onBlur={props.handleBlur('HsdTesting2')}
                                        value={props.values.HsdTesting2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.HsdTesting2 && props.errors.HsdTesting2}</Text>
                                </Card>
                                {/* </Card> */}

                                {/* Collection from Nozzle 1 */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>Sale's man from Nozzle 1</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder="Sale's Man Name"
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SalesMan1')}
                                        onBlur={props.handleBlur('SalesMan1')}
                                        value={props.values.SalesMan1}

                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SalesMan1 && props.errors.SalesMan1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder="Cash In Hand"
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SalesManCollection1')}
                                        onBlur={props.handleBlur('SalesManCollection1')}
                                        value={props.values.SalesManCollection1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SalesManCollection1 && props.errors.SalesManCollection1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='E-Pay (eg.PhonePay, PTYM..etc)'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('EPay1')}
                                        onBlur={props.handleBlur('EPay1')}
                                        value={props.values.EPay1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.EPay1 && props.errors.EPay1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Card Payments'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SPay1')}
                                        onBlur={props.handleBlur('SPay1')}
                                        value={props.values.SPay1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SPay1 && props.errors.SPay1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Legder Amount'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Legder1')}
                                        onBlur={props.handleBlur('Legder1')}
                                        value={props.values.Legder1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Legder1 && props.errors.Legder1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Lubricate'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Lubricate1')}
                                        onBlur={props.handleBlur('Lubricate1')}
                                        value={props.values.Lubricate1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Lubricate1 && props.errors.Lubricate1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Expenditure'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Expenditure1')}
                                        onBlur={props.handleBlur('Expenditure1')}
                                        value={props.values.Expenditure1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Expenditure1 && props.errors.Expenditure1}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Other Expendiure'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('OtherExpendiure1')}
                                        onBlur={props.handleBlur('OtherExpendiure1')}
                                        value={props.values.OtherExpendiure1}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.OtherExpendiure1 && props.errors.OtherExpendiure1}</Text>
                                </Card>

                                {/* Collection from Nozzle 2 */}
                                <Card>
                                    <Text style={globalStyles.formMSnHSD}>Sale's man from Nozzle 2</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder="Sale's Man Name"
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SalesMan2')}
                                        onBlur={props.handleBlur('SalesMan2')}
                                        value={props.values.SalesMan2}
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SalesMan2 && props.errors.SalesMan2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder="Cash In Hand"
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SalesManCollection2')}
                                        onBlur={props.handleBlur('SalesManCollection2')}
                                        value={props.values.SalesManCollection2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SalesManCollection2 && props.errors.SalesManCollection2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='E-Pay (eg.PhonePay, PTYM..etc)'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('EPay2')}
                                        onBlur={props.handleBlur('EPay2')}
                                        value={props.values.EPay2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.EPay2 && props.errors.EPay2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Card Payments'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('SPay2')}
                                        onBlur={props.handleBlur('SPay2')}
                                        value={props.values.SPay2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.SPay2 && props.errors.SPay2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Legder Amount'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Legder2')}
                                        onBlur={props.handleBlur('Legder2')}
                                        value={props.values.Legder2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Legder2 && props.errors.Legder2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Lubricate'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Lubricate2')}
                                        onBlur={props.handleBlur('Lubricate2')}
                                        value={props.values.Lubricate2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Lubricate2 && props.errors.Lubricate2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Expenditure'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('Expenditure2')}
                                        onBlur={props.handleBlur('Expenditure2')}
                                        value={props.values.Expenditure2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.Expenditure2 && props.errors.Expenditure2}</Text>

                                    <TextInput
                                        style={globalStyles.input}
                                        placeholder='Other Expendiure'
                                         placeholderTextColor='#fff' 
                                        onChangeText={props.handleChange('OtherExpendiure2')}
                                        onBlur={props.handleBlur('OtherExpendiure2')}
                                        value={props.values.OtherExpendiure2}
                                        keyboardType='numeric'
                                    />
                                    <Text style={globalStyles.errorText}>{props.touched.OtherExpendiure2 && props.errors.OtherExpendiure2}</Text>
                                </Card>

                                <FlatButton onPress={props.handleSubmit} text='submit' />
                            </ScrollView>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}