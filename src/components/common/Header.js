import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
/* @flow */

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{ title }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ffddee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 15,
    shadowColor: '#3d3d3d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
});

export { Header };
