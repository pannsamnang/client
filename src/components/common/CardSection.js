import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.cardSectionStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
