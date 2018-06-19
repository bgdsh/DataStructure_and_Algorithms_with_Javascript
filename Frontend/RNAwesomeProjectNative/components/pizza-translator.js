import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput 
          onChangeText={(text) => this.setState({text})}
          style={styles.textInput} 
          placeholder='Type Here to translate.'>
        </TextInput>
        <Text style={styles.text}>{this.state.text.split(' ').map(word => word && '🍉').join(' ')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 10
  },
  textInput: {
    height: 40
  },
  text: {
    padding: 10,
    fontSize: 42
  }
});