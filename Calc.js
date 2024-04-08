import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [isOff, setIsOff] = useState(false);

  const handlePress = (value) => {
    if (isOff) {
      setInput('');
      setIsOff(false);
    }

    if (['+', '-', 'X', '/', '%'].includes(value)) {
      setInput((prevInput) => prevInput + value);
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'Off') {
      // Turn off and disable further input
      setInput('');
      setIsOff(true);
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calcButtons = (value, buttonStyle) => (
    <TouchableOpacity onPress={() => handlePress(value)} style={buttonStyle}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input}</Text>
      <View style={styles.row}>
        {calcButtons('AC', styles.greyButton)}
        {calcButtons('Off', styles.greyButton)}
        {calcButtons('%', styles.greyButton)}
        {calcButtons('/', styles.yellowButton)}
      </View>
      <View style={styles.row}>
        {calcButtons('7', styles.roundedButton)}
        {calcButtons('8', styles.roundedButton)}
        {calcButtons('9', styles.roundedButton)}
        {calcButtons('X', styles.yellowButton)}
      </View>
      <View style={styles.row}>
        {calcButtons('4', styles.roundedButton)}
        {calcButtons('5', styles.roundedButton)}
        {calcButtons('6', styles.roundedButton)}
        {calcButtons('-', styles.yellowButton)}
      </View>
      <View style={styles.row}>
        {calcButtons('1', styles.roundedButton)}
        {calcButtons('2', styles.roundedButton)}
        {calcButtons('3', styles.roundedButton)}
        {calcButtons('+', styles.yellowButton)}
      </View>
      <View style={styles.row}>
        {calcButtons('0', styles.zeroButton)}
        {calcButtons('.', styles.roundedButton)}
        {calcButtons('=', styles.yellowButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 5,
    backgroundColor: '#1B1B1B',
  },
  display: {
    fontSize: 30,
    marginBottom: 20,
    marginLeft: 20,
    color: '#F5F5F5'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  roundedButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767', 
    color: '#F5F5F5',
    margin: 3,
  },
  zeroButton: {
    width: 160,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#676767',
    margin: 3,
  },
  greyButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    margin: 3,
  },
  yellowButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8860B',
    margin: 3,
  },
  buttonText: {
    fontSize: 28,
    color: '#F5f5f5'
  }
});

export default Calculator;
