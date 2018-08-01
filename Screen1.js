import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen1 extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View><Text>Screen 1</Text></View>
    );
  }
}
