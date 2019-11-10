import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Places extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center'}}>
        <Text>I am in {this.props.place} </Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 300}}>
        <Places place='Amsterdam'></Places>
        <Places place='New York'></Places>
        <Places place='Beijing'></Places>
      </View>
    );
  }
}

export default App;