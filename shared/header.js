import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
 

export default function Header({ title }) {  

  return (
    <ImageBackground source={require('../assets/game_bg.jpg')} style={styles.header}>
 
      <View style={styles.headerTitle}>
           <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color: 'white'
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});