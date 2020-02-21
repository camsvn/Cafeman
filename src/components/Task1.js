import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Task1 extends Component {
  state = {
    email: '',
    password: '',
    hidePassword: true,
  };

  handleEmail = text => {
    this.setState({email: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  login = (email, pwd) => {
    const newLocal = '\n';
    alert('Email: ' + email + newLocal + '\nPassword: ' + pwd);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo.jpeg')}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            ref="email"
            placeholder="Email"
            onChangeText={this.handleEmail}
            autoCapitalize="none"
            onSubmitEditing={event => {
              this.refs.password.focus();
            }}
          />

          <TextInput
            style={styles.input}
            ref="password"
            secureTextEntry={this.state.hidePassword}
            placeholder="Password"
            onChangeText={this.handlePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchVisibility}
            onPress={this.setPasswordVisibility}>
            <Image
              style={styles.hidePassword}
              source={
                this.state.hidePassword
                  ? require('../assets/img/hidden.png')
                  : require('../assets/img/visibility.png')
              }
            />
          </TouchableOpacity>
          <View style={styles.submitDiv}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.login(this.state.email, this.state.password)}>
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Task1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2E8CD',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
  formContainer: {
    margin: 20,
    position: 'relative',
  },
  input: {
    margin: 20,
    paddingLeft: 30,
    opacity: 0.5,
    borderRadius: 50,
    color: '#3B3829',
    backgroundColor: '#fff',
    height: 60,
    fontSize: 20,
    fontFamily: 'OpenSans-Light',
  },
  touchVisibility: {
    position: 'absolute',
    height: 35,
    width: 35,
    right: 40,
    top: 133,
  },
  hidePassword: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#3B3829',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#F2E8CD',
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
  },

  boldText: {
    fontWeight: 'bold',
  },

  body: {
    marginTop: 10,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    padding: 20,
  },
});
