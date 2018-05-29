import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}> {children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#f99f99',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#f99f99',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
