import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './routers';

registerScreens();

class App extends Component {

  constructor(props) {
    super(props);
    debugger;
    this.startApplication();
  }

  startApplication () {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'client.LoginForm',
        title: 'Login'
      }
    })
  }
};

export default App;
