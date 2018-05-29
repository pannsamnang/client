import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ value, inputName, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, inputStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{inputName}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        style={inputStyle}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 2,
    color: '#f33',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 20,
    width: 100
  },
  textStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
