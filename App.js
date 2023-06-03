import React, {useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import MyTabs from './routes/tabs';
import { StatusBar } from 'expo-status-bar';

const getFonts = () => Font.loadAsync({
  'roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
  'roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
  'roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
  'roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-ThinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),

  });

export default function App() { 

  const [fontsLoaded, setFontsLoaded] = useState(false);

 if(fontsLoaded){
   return (
     <NavigationContainer theme={DarkTheme}>
       <StatusBar style="light" backgroundColor='#111113'/>
       <MyTabs/>      
     </NavigationContainer>
   );
 } else {
   return (
     <AppLoading
       startAsync={getFonts}
       onFinish={() => setFontsLoaded(true)}
       onError={console.warn}
     />   
   ) 
 }
}