import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <Text>I go back.</Text>
        </View>
        <View style={styles.profile}>
          <Text>I know myself.</Text>
        </View>
        <View style={styles.stats}>
          <Text>I know how good I am.</Text>
        </View>
        <View style={styles.footer}>
          <Text>I clear everything.</Text>
        </View>
      </View>
    );
  }
}
