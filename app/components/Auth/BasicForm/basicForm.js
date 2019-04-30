import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { func, bool, string } from 'prop-types';
import { styles } from './styles';
import Logo from '../../../../assets/icons/Logo';

class BasicFormContainer extends Component {
  state = { name: '', email: '', password: '' };

  handleNameChange = name => this.setState({ name });

  handleEmailChange = email => this.setState({ email });

  handlePasswordChange = password => this.setState({ password });

  handleButtonPress = () =>
    this.props.onButtonPress({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

  render() {
    const { name, email, password } = this.state;
    return (
      <View>
        <Logo/>
        
          
        {this.props.isSignUp && (
          <TextInput
            style={styles.textInput}
            placeholder="Nickname"
            returnKeyType="next"
            autoCapitalize="words"
            onChangeText={this.handleNameChange}
            value={name}
            underlineColorAndroid={'transparent'}
          />
        )}


        <TextInput
          style={styles.textInput}
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={this.handleEmailChange}
          value={email}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="done"
          onChangeText={this.handlePasswordChange}
          value={password}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>
          
        {!this.props.isSignUp && (
        <TouchableOpacity style={styles.signUpButton} onPress={this.props.onSignUpButtonOPress}>
          <Text style={styles.title}>Create account</Text>
        </TouchableOpacity>
        )}
        
      </View>
    );
  }
}

BasicFormContainer.defaultProps = {
  isSignUp: false,
  onSignUpButtonOPress: () => {}
};

BasicFormContainer.propTypes = {
  onButtonPress: func.isRequired,
  isSignUp: bool,
  title: string.isRequired,
  onSignUpButtonOPress: func
};

export default BasicFormContainer;
