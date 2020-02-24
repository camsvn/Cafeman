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

class Task2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Amal</Text>
        <Text>Pillow</Text>
      </View>
    );
  }
}

export default Task2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
