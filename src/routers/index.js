import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from '../config/ConfigStore';

import LoginForm from '../components/LoginForm';

var store = configureStore();

export function registerScreens() {
  Navigation.registerComponent('client.LoginForm', () => LoginForm, store, Provider);
};
