import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello World!</Text>
        <Image source={pic} style={{ width: 193, height: 110 }}/>
      </View>
    );
  }
}
