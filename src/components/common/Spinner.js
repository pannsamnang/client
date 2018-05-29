import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => {
  return (
    <View style={styles.viewStyle}>
      <ActivityIndicator size={size || 'large'} color={color} />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { Spinner };
