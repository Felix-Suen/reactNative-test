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
      <View style={{flex: 1, top: 200}}>
        <Text style={styles.biggie} >{this.props.text}</Text>
      </View>
    );
  }
}

export default class Blinker extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', backgroundColor: 'powderblue', flex: 2}}>
        <Blink text="Skooma Pls"></Blink>
      </View>
    );
  }
}