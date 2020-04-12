import React from 'react';
import {View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import styles from './styles';

export default class Splash extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions={
    headerShown: false
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <Text>Hello there.</Text>
      </View>
    );
  }
}
