import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  biggie: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  }
});

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    
    return (
      <Text style={{alignItems: 'center'}} style={styles.biggie}>{this.props.text}</Text>
    );
  }
}

export default class Blinker extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 200}}>
        <Blink text="ok Boomer"></Blink>
      </View>
    );
  }
}