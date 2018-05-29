import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Comfirm = ({ visible, children, acceptAction, rejectAction }) => {
  const { containerStyle, textStyle, cardStyle } = styles;
  return(
    <Modal
      visible={visible}
      transparent
      animationType={'slide'}
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardStyle}>
          <Text style={textStyle}>{ children }</Text>
        </CardSection>
        <CardSection style={cardStyle}>
          <Button onPress={ acceptAction }> Yes </Button>
          <Button onPress={ rejectAction }> No </Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  cardStyle: {
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
}

export { Comfirm };
