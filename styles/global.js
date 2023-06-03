import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,    
    color: '#fff',
    alignContent: 'center',
    justifyContent:'center',
     fontFamily: 'roboto-Bold'
  }, 
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    backgroundColor: '#111113',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5   
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    color: '#fff',
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  formMSnHSD: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 18,
    paddingBottom: 8,
    fontFamily: 'roboto-Bold'
     
  },
  headerMSHSD: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    paddingBottom: 8,
    fontFamily: 'roboto-Bold'
  },
  reviewFont : {
    color: '#fff',
    fontSize: 16,
    padding: 2
  },
  modalFont: { 
    color: '#fff',
    textAlign: 'center', 
    fontWeight: 'normal', 
    fontSize: 18 ,
    paddingBottom: 8,
  },
  flexR: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexN: {
    flexDirection: 'row',    
  },
  flexm: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  //  legderform Styles
  legderContainer:{
    display:'flex',   
    justifyContent: 'center',
  },
  ledgerInput:{
    paddingBottom: 10,
  },  
  ledgerHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 16,
    color: '#fff',
  }, 
  modalToggle: {
    position: 'absolute',
    right: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2a9d8f',
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#2a9d8f',
    color: '#fff',
    bottom: 0
  },
  modalContent: {
    flex: 1,
     backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modalView: {
    margin: 20,
    backgroundColor: '#222224',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 1
  },
  modalDView: {
    marginTop:10,
   marginBottom:20,
    backgroundColor: '#222224',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  },
  optionText:{
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 18,
    padding : 7,
    borderBottomWidth: 0.5,
    borderColor: '#333334',
    color: '#fff'
  },
  optionBottomText: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 18,
    padding: 7,
    color: '#fff'
     
  },
  optionHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 4,
    paddingBottom:16,
    borderBottomWidth: 0.5,
    borderColor: '#333334',
    color: '#fff'
  },
});