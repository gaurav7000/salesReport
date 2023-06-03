import React,{ useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Row from '../calculatorComponents/components/Row'
import Button from '../calculatorComponents/components/Button'
import { Ionicons } from '@expo/vector-icons';
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111113",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
});

export default function CalculatorScreen(){ 

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const handleInput = (btnPressed) => {
    if (btnPressed === '+' || btnPressed === '-' || btnPressed === '*' || btnPressed === '/') {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      
      case "posneg": 

        setCurrentNumber((currentReviews) => {
            return [parseFloat(currentReviews) * -1];
        });         
        return
      case "percentage":
        setCurrentNumber((currentReviews) => {
          return [parseFloat(currentReviews) * 0.01];
        });
        return
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return
      case '=':
        setLastNumber(currentNumber + '=');
        calculate()
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber);
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

    return (
      <View style={styles.container}>
         
        <SafeAreaView>
          <Text style={styles.value}>
            <Text style={styles.historyText}>{lastNumber}</Text>
           
          </Text>
          <Text style={styles.value}>
             
            <Text style={styles.resultText}>{currentNumber} 
              <Ionicons name="ios-backspace" style={{ padding: 8 }} size={40} color="white" onPress={() => handleInput('DEL')} /></Text>
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() =>   handleInput('C')}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => handleInput('posneg')}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() =>  handleInput('percentage')}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() =>   handleInput('/')}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() =>   handleInput(7)} />
            <Button text="8" onPress={() =>   handleInput(8)} />
            <Button text="9" onPress={() =>   handleInput(9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() =>   handleInput('*')}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() =>   handleInput(4)} />
            <Button text="5" onPress={() =>   handleInput(5)} />
            <Button text="6" onPress={() =>   handleInput(6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() =>  handleInput('-')}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() =>  handleInput(1)} />
            <Button text="2" onPress={() => handleInput(2)} />
            <Button text="3" onPress={() => handleInput(3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => handleInput('+')}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() =>   handleInput(0)}
            />
            <Button text="." onPress={() =>  handleInput('.')} />
            <Button
              text="="
              theme="accent"
              onPress={() =>   handleInput('=')}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
 