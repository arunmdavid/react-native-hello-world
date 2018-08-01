import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, margin: 20, marginTop: 40, borderRadius: 10, shadowColor: '#EEE', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 0, elevation: 5 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
              <Text style={{ textAlign: 'left' }} onPress={() => navigate('Screen1') }>1</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
              <Text style={{ textAlign: 'right' }}>2</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 15 }}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'flex-start', padding: 10 }}>
              <Text style={{ textAlign: 'left' }}>3</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
              <Text style={{ textAlign: 'right' }}>4</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card_container: {

  },
});
