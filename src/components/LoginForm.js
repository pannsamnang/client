import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, LoginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {

  componentWillMount() {
    const { language } = this.props;
  }

  onEmailChanged(text) {
    // emailChanged is an action creator
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onPressLoginBtn() {
    const { email, password, navigator} = this.props;
    this.props.LoginUser({email, password, navigator});
  }

  renderButton() {
    if (this.props.spinner) {
      return <Spinner color='red'/>
    };
    return(
     <Button onPress={this.onPressLoginBtn.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card style={styles.cardStyle}>
        <CardSection>
          <Input
            inputName="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={this.onEmailChanged.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            inputName="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
};

const mapStateToProps = state => {
  const { email, password, error, spinner } = state.auth;
  return {
    email,
    password,
    error,
    spinner
  };
}

const styles = {
  cardStyle: {
    marginTop: 40
  },
  errorTextStyle: {
    fontSize: 14,
    color: 'red'
  },
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, LoginUser})(LoginForm);
