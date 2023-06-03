import React,{useState} from 'react';
import { View, Text, ScrollView, Button, Modal, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import Card from '../../shared/card';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { MaterialIcons, EvilIcons  } from '@expo/vector-icons';
 
export default function DailySalesDetails({ route , navigation }) {

  
    const [confirmModal, setConfirmModal] = useState(false)
    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
              <View style={{flexDirection:'row'}}>
              <MaterialIcons name="delete" size={24} color="#fff" style={{
                    position: 'absolute',
                    right: 50,
                    padding:6
              }} onPress={() => (setConfirmModal(true))}/>

              <EvilIcons name="share-apple" size={30} color="#fff" style={{
                position: 'absolute',
                right: 6,
                padding: 6
              }} onPress={()=>( execute())}/>
                </View>
               
        ) 
        })
    },[navigation])

    const previewData = route.params;

    async function execute() {
        const html = `

  <html>
    <head>
      <meta charset="utf-8">
        <title>A simple, clean, and responsive HTML invoice template</title>

        <style>
          .invoice-box {
            max - width: 800px;
        margin: auto;
        padding: 20px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 14px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }

    .invoice-box table {
            width: 100%;
        line-height: inherit;
        text-align: left;
    }

    .invoice-box table td {
            padding: 5px;
        vertical-align: top;
    }

    .invoice-box table tr td:nth-child(2) {
            text - align: right;
    }

    .invoice-box table tr.top table td {
            padding - bottom: 6px;
    }

    .invoice-box table tr.top table td.title {
            font - size: 45px;
        line-height: 25px;
        color: #333;
    }

    .invoice-box table tr.information table td {
            padding - bottom: 40px;
    }

    .invoice-box table tr.heading td {
            background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
    }

    .invoice-box table tr.details td {
            padding - bottom: 2px;
    }


    .invoice-box table tr.item td{
            border - bottom: 1px solid #eee;
    }

    .invoice-box table tr.item.last td {
            border - bottom: none;
    }

    .invoice-box table tr.total td:nth-child(2) {
            border - top: 2px solid #eee;
        font-weight: bold;
    }

    @media only screen and (max-width: 600px) {
        .invoice - box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }

        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }

    /** RTL **/
    .rtl {
            direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }

    .rtl table {
            text - align: right;
    }

    .rtl table tr td:nth-child(2) {
            text - align: left;
    }
    </style>
</head>

      <body>
        <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
            <tr class="top">
              <td colspan="2">
                <table>
                  <tr>
                    <td class="title">
                      <img src="https://www.nayaraenergy.com/images/logo.png" style="width:100%; max-width:50px;">
                            </td>

                      <td>
                      Date:<b> ${previewData.Local}</b><br>
                          Shree Shyandhani Filling Station<br>                          
                            </td>
                        </tr>
                    </table>
                      </td>
            </tr>

                    <!-- <tr class="information">
                      <td colspan="2">
                        <table>
                          <tr>
                            <td>
                              Sparksuite, Inc.<br>
                                12345 Sunny Road<br>
                                  Sunnyville, CA 12345
                            </td>

                                <td>
                                  Acme Corp.<br>
                                    John Doe<br>
                                      john@example.com
                            </td>
                        </tr>
                    </table>
                </td>
            </tr> -->

            <tr class="heading">
                              <td>
                                Sales Man Of Nozzle 1
                </td>

                              <td>
                                Sales Man Of Nozzle 2
                </td>
                            </tr>

                            <tr class="details">
                              <td>
                              Name : ${previewData.SalesMan1}
                </td>

                              <td>
                              Name : ${previewData.SalesMan2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Amount in Hand :  ₹ ${previewData.SalesManCollection1}
                </td>

                              <td>
                              Amount in Hand :  ₹ ${previewData.SalesManCollection2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Digital Payment :  ₹ ${previewData.EPay1}
                </td>

                              <td>
                              Digital Payment :  ₹ ${previewData.EPay2}
                </td>
                            </tr>
                          <tr class="details">
                            <td>
                              Card Payments :  ₹ ${previewData.SPay1}
                            </td>

                            <td>
                              Card Payments  :  ₹ ${previewData.SPay2}
                            </td>
                          </tr>
                            <tr class="details">
                              <td>
                              Legder Amount :  ₹ ${previewData.Legder1}
                </td>

                              <td>
                              Legder Amount :  ₹ ${previewData.Legder2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Lubricate : ₹ ${previewData.Lubricate1}
                </td>

                              <td>
                              Lubricate : ₹ ${previewData.Lubricate2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Expenditure :  ₹ ${previewData.Expenditure1}
                </td>

                              <td>
                              Expenditure :  ₹ ${previewData.Expenditure2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Other Expenditure :  ₹ ${previewData.OtherExpendiure1}
                </td>

                              <td>
                              Other Expenditure :  ₹ ${previewData.OtherExpendiure2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Total Amount Recieved :  ₹ ${previewData.TAR1}
                </td>

                              <td>
                              Total Amount Recieved :  ₹ ${previewData.TAR2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              Expected Amount to recieve :  ₹ ${previewData.EATR1}
                </td>

                              <td>
                              Expected Amount to recieve :  ₹ ${previewData.EATR2}
                </td>
                            </tr>
                            <tr class="details">
                              <td>
                              OutStanding : ₹ ${previewData.OutStanding1}
                </td>

                              <td>
                              OutStanding : ₹ ${previewData.OutStanding2}
                </td>
                            </tr>

                            <tr class="heading">
                              <td>
                                MS - Nozzle 1
                </td>

                              <td>
                                MS - Nozzle 2
                </td>
                            </tr>

                            <tr class="item">
                              <td>
                              Closing Reading : ${previewData.MsClosing1}
                </td>

                              <td>
                              Closing Reading : ${previewData.MsClosing2}
                </td>

                            </tr>

                            <tr class="item">
                              <td>
                              Opening Reading : ${previewData.MsOpening1}
                </td>

                              <td>
                              Opening Reading : ${previewData.MsOpening2}
                </td>
                            </tr>
                            <tr class="item">
                              <td>
                              Testing : ${previewData.MsTesting1} L
                </td>

                              <td>
                              Testing : ${previewData.MsTesting2} L
                </td>

                            </tr>

                            <tr class="item">
                              <td>
                              Sale (in Litres) : ${previewData.MsSaleInLitre1} L
                </td>

                              <td>
                              Sale (in Litres) : ${previewData.MsSaleInLitre2} L
                </td>
                            </tr>
                            <tr class="item last">
                              <td>
                              Sale (in Rupee) : ₹ ${previewData.MsSaleRupee1}
                </td>

                              <td>
                              Sale (in Rupee) : ₹ ${previewData.MsSaleRupee2}
                </td>
                            </tr>


                            <tr class="heading">
                              <td>
                                Hsd - Nozzle 1
                </td>

                              <td>
                                Hsd - Nozzle 2
                </td>
                            </tr>

                            <tr class="item">
                              <td>
                              Closing Reading : ${previewData.HsdClosing1}
                </td>

                              <td>
                              Closing Reading : ${previewData.HsdClosing2}
                </td>

                            </tr>

                            <tr class="item">
                              <td>
                              Opening Reading : ${previewData.HsdOpening1}
                </td>

                              <td>
                              Opening Reading : ${previewData.HsdOpening2}
                </td>
                            </tr>
                            <tr class="item">
                              <td>
                              Testing: ${previewData.HsdTesting1} L
                </td>

                              <td>
                              Testing: ${previewData.HsdTesting2} L
                </td>

                            </tr>

                            <tr class="item">
                              <td>
                              Sale (in Litres) : ${previewData.HsdSaleInLitre1} L
                </td>

                              <td>
                              Sale (in Litres) : ${previewData.HsdSaleInLitre2} L
                </td>
                            </tr>
                            <tr class="item last">
                              <td>
                              Sale (in Rupee) : ₹ ${previewData.HsdSaleRupee1}
                </td>

                              <td>
                              Sale (in Rupee) : ₹ ${previewData.HsdSaleRupee2}
                </td>
                            </tr>

                            <tr class="heading">
                              <td>
                                Total Sale Of MS
                </td>

                              <td>
                                Total Sale Of Hsd
                </td>
                            </tr>

                            <tr class="item">
                              <td>
                              In Litres : ${previewData.MsSaleInLitre} L
                </td>

                              <td>
                              In Litres : ${previewData.HsdSaleInLitre} L
                </td>
                            </tr>

                            <tr class="item last">
                              <td>
                              In Rupee : ₹ ${previewData.MsSaleRupee}
                </td>

                              <td>
                              In Rupee : ₹ ${previewData.HsdSaleRupee}
                </td>
                            </tr>


                            <tr class="total">
                              <td>Lubricate :  ₹ ${previewData.Lubricate} </td>

                              <td>
                              
                              Total Collection : ₹ ${previewData.TodaysCollection}
                </td>
                            </tr>
        </table>
    </div>
</body>
</html>`;
        const { uri } = await Print.printToFileAsync({ html });
        Sharing.shareAsync(uri);
    }
    return (

        <View style={{backgroundColor:'#111'}}>
        <ScrollView showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
            
                <Modal visible={confirmModal} animationType='fade' transparent={true} onRequestClose={() => {
                    setConfirmModal(false);
                }}>
                    <View style={styles.modalContent}>
                        <View style={globalStyles.modalDView}>
                <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'roboto-Bold' ,padding:7}}>Delete this entry ?</Text>
                            <View style={globalStyles.flexm}>

                  <View></View>
                  <View style={globalStyles.flexm}>
                    <Text style={globalStyles.optionBottomText} onPress={() => { setConfirmModal(false) }}>CANCEL</Text>
                    <Text style={globalStyles.optionBottomText}>DELETE</Text></View>
                   </View>
                        </View>
                    </View>
                </Modal>

                <Card>
                    <Text style={globalStyles.formMSnHSD}>Date: {previewData.newDateReview}</Text>
                    <Text style={globalStyles.formMSnHSD}>SaleIn Price</Text>                    
                    <View style={globalStyles.flexR}>
                        <Text style={globalStyles.modalFont}>MS Price</Text>
                        <Text style={globalStyles.modalFont}>HSD Price</Text>
                    </View>
                    <View style={globalStyles.flexR}>
                        <Text style={globalStyles.modalFont}>₹ {previewData.MsPrice}</Text>
                        <Text style={globalStyles.modalFont}>₹ {previewData.HsdPrice}</Text>
                    </View>
                </Card>

                <Card>
                  <Text style={globalStyles.headerMSHSD}>Sale's Man Of Nozzle 1</Text>
                  <Text style={globalStyles.reviewFont}>Sale's man Name : {previewData.SalesMan1}</Text>
                  <Text style={globalStyles.reviewFont}>  Amount in Hand : ₹ {previewData.SalesManCollection1}</Text>
                  <Text style={globalStyles.reviewFont}>   Digital Payment : ₹{previewData.EPay1}</Text>
                  <Text style={globalStyles.reviewFont}>    Card Payments : ₹ {previewData.SPay1}</Text>
                  <Text style={globalStyles.reviewFont}>    Legder Amount : ₹ {previewData.Legder1}</Text>
                  <Text style={globalStyles.reviewFont}>           Expenditure : ₹ {previewData.Expenditure1}</Text>
                  <Text style={globalStyles.reviewFont}> Other Expendiure : ₹{previewData.OtherExpendiure1}</Text>
                  <Text style={globalStyles.reviewFont}>                Lubricate : ₹ {previewData.Lubricate1}</Text>
                  <Text style={globalStyles.reviewFont}>        Total Amount-</Text>
                  <Text style={globalStyles.reviewFont}>                  recieved : ₹ {previewData.TAR1}</Text>
                  <Text style={globalStyles.reviewFont}>Expected Amount-</Text>
                  <Text style={globalStyles.reviewFont}>                  recieved : ₹ {previewData.EATR1}</Text>
                  <Text style={globalStyles.reviewFont}>          Out Standing : ₹ {previewData.OutStanding1}</Text>
                </Card>


                <Card>
                  <Text style={globalStyles.headerMSHSD}>Sale's Man Of Nozzle 2</Text>
                  <Text style={globalStyles.reviewFont}>Sale's man Name : {previewData.SalesMan2}</Text>
                  <Text style={globalStyles.reviewFont}>  Amount in Hand : ₹ {previewData.SalesManCollection2}</Text>
                  <Text style={globalStyles.reviewFont}>   Digital Payment : ₹{previewData.EPay2}</Text>
                  <Text style={globalStyles.reviewFont}>    Card Payments : ₹ {previewData.SPay2}</Text>
                  <Text style={globalStyles.reviewFont}>    Legder Amount : ₹ {previewData.Legder2}</Text>
                  <Text style={globalStyles.reviewFont}>           Expenditure : ₹ {previewData.Expenditure2}</Text>
                  <Text style={globalStyles.reviewFont}> Other Expendiure : ₹{previewData.OtherExpendiure2}</Text>
                  <Text style={globalStyles.reviewFont}>                Lubricate : ₹ {previewData.Lubricate2}</Text>
                  <Text style={globalStyles.reviewFont}>       Total Amount-</Text>
                  <Text style={globalStyles.reviewFont}>                  recieved : ₹ {previewData.TAR2}</Text>
                  <Text style={globalStyles.reviewFont}>Expected Amount-</Text>
                  <Text style={globalStyles.reviewFont}>                to recieve : ₹ {previewData.EATR2}</Text>
                  <Text style={globalStyles.reviewFont}>          Out Standing : ₹ {previewData.OutStanding2}</Text>
                </Card>
                
                <Card>
                  <Text style={globalStyles.headerMSHSD}>MS - Nozzle 1</Text>
                  <Text style={globalStyles.reviewFont}> Closing Reading : {previewData.MsClosing1}</Text>
                  <Text style={globalStyles.reviewFont}>Opening Reading : {previewData.MsOpening1}</Text>
                  <Text style={globalStyles.reviewFont}>                  Testing : {previewData.MsTesting1} L</Text>
                  <Text style={globalStyles.reviewFont}>        Sale (in Ltrs) : {previewData.MsSaleInLitre1} L</Text>
                  <Text style={globalStyles.reviewFont}>    Sale (in Rupee) :  ₹{previewData.MsSaleRupee1}</Text>
                </Card>

                <Card>
                  <Text style={globalStyles.headerMSHSD}>HSD - Nozzle 1</Text>
                  <Text style={globalStyles.reviewFont}> Closing Reading : {previewData.HsdClosing1}</Text>
                  <Text style={globalStyles.reviewFont}>Opening Reading : {previewData.HsdOpening1}</Text>
                  <Text style={globalStyles.reviewFont}>                  Testing : {previewData.HsdTesting1} L</Text>
                  <Text style={globalStyles.reviewFont}>        Sale (in Ltrs) : {previewData.HsdSaleInLitre1} L</Text>
                  <Text style={globalStyles.reviewFont}>    Sale (in Rupee) :  ₹{previewData.HsdSaleRupee1}</Text>
                </Card>

                <Card>
                    <Text style={globalStyles.headerMSHSD}>MS - Nozzle 2</Text>
                    <Text style={globalStyles.reviewFont}> Closing Reading : {previewData.MsClosing2}</Text>
                    <Text style={globalStyles.reviewFont}>Opening Reading : {previewData.MsOpening2}</Text>
                    <Text style={globalStyles.reviewFont}>                  Testing : {previewData.MsTesting2} L</Text>
                    <Text style={globalStyles.reviewFont}>        Sale (in Ltrs) : {previewData.MsSaleInLitre2} L</Text>
                    <Text style={globalStyles.reviewFont}>    Sale (in Rupee) :  ₹ {previewData.MsSaleRupee2}</Text>
                </Card>

                <Card>
                    <Text style={globalStyles.headerMSHSD}>HSD - Nozzle 2</Text>
                    <Text style={globalStyles.reviewFont}> Closing Reading : {previewData.HsdClosing2}</Text>
                    <Text style={globalStyles.reviewFont}>Opening Reading : {previewData.HsdOpening2}</Text>
                    <Text style={globalStyles.reviewFont}>                  Testing : {previewData.HsdTesting2} L </Text>
                    <Text style={globalStyles.reviewFont}>        Sale (in Ltrs) : {previewData.HsdSaleInLitre2} L</Text>
                    <Text style={globalStyles.reviewFont}>    Sale (in Rupee) :  ₹ {previewData.HsdSaleRupee2}</Text>
                </Card>

                <Card>
                    <Text style={globalStyles.reviewFont}>Total sale of MS in Litres : {previewData.MsSaleInLitre} L</Text>
                    <Text style={globalStyles.reviewFont}>Total sale of HSD in Litres : {previewData.HsdSaleInLitre} L</Text>
                </Card>

                <Card>
                    <Text style={globalStyles.reviewFont}>Total sale of MS in Rupee : ₹ {previewData.MsSaleRupee}</Text>
                    <Text style={globalStyles.reviewFont}>Total sale of HSD in Rupee : ₹ {previewData.HsdSaleRupee}</Text>
                    <Text style={globalStyles.reviewFont}>Total sale of Lubricate : ₹ {previewData.Lubricate}</Text>
                </Card>

                <Card>
                    <Text style={globalStyles.headerMSHSD}>Today's Total Collection</Text>
                    <Text style={globalStyles.headerMSHSD}> ₹ {previewData.TodaysCollection} </Text>
                </Card>

                {/* <Button
                    title="Print and Share"
                    onPress={() => execute()}
                /> */}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },    
    modalContent: {
        flex: 1,
        paddingRight:50,
        paddingLeft: 50,
        justifyContent:'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
});