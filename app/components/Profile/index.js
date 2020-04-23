import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

export default class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Player',
      qno: 1,
      total: 0,
      avg: 0,
      avglast: 0,
      last: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      common: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_right: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_wrong: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      c: 0,
      cr: 0,
      cw: 0,
    }
  }

  return = () => {
    this.props.navigation.state.params.returnProfile( this.state.qno, this.state.total, this.state.avg, this.state. avglast, this.state.last, 
                                                      this.state.common, this.state.common_right, this.state.common_wrong);
    this.props.navigation.goBack();
  };

  info = () => {
    this.props.navigation.navigate("Info");
  }

  clear = () => {
    Alert.alert(
      'Are you sure you want to clear your statistics?',
      'Doing this will erase your profile data and history',
      [
        {text: 'Yes', onPress: () => this.setState({qno: 1, total: 0, avg: 0, avglast: 0, last: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                                                    common: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}, c: "N/A",
                                                    common_right: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}, cr: "N/A",
                                                    common_wrong: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}, cw: "N/A"})},
        {text: 'No'},
      ],
      )
  };

  setName = async (text) => {
    await AsyncStorage.setItem('name', text);
  };
  getName = async () => {
    const name = await AsyncStorage.getItem('name');
    console.log(name);
    if(name != null)
    {
      this.setState({name: name});
    }
    else
    {
      this.setState({name: "Player"});
    }
  };

  componentDidMount () {
    const { navigation } = this.props;  
    const q = navigation.getParam('qno', 0);
    const t = navigation.getParam('total', 0);
    const a = navigation.getParam('avg', 0);  
    const al = navigation.getParam('avglast', 0);
    const l = navigation.getParam('last', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const com = navigation.getParam('common', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    const comr = navigation.getParam('common_right', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    const comw = navigation.getParam('common_wrong', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    this.getName();
    var c = 0;
    var cr = 0;
    var cw = 0;
    if(JSON.stringify(com) === JSON.stringify({50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}))
    {
      c = "N/A";
    }
    else
    {
      c = Object.keys(com).reduce(function(a, b){ return com[a] > com[b] ? a : b }) + "%";
    }
    if(JSON.stringify(comr) === JSON.stringify({50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}))
    {
      cr = "N/A";
    }
    else
    {
      cr = Object.keys(comr).reduce(function(a, b){ return comr[a] > comr[b] ? a : b }) + "%";
    }
    if(JSON.stringify(comw) === JSON.stringify({50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0}))
    {
      cw = "N/A";
    }
    else
    {
      cw = Object.keys(comw).reduce(function(a, b){ return comw[a] > comw[b] ? a : b }) + "%";
    }
    this.setState({qno: q, last: l, total: t, avg: a, avglast: al, common: com, common_right: comr, common_wrong: comw, c: c, cr: cr, cw: cw});
  };

  static navigationOptions={
    headerShown: false
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => {this.return()}}>
            <Icon name="chevron-left" color="#FFFFFF" size={40}/>
          </TouchableOpacity>
          <View style={{flex: 7}}/>
          <TouchableOpacity style={styles.back} onPress={() => {this.info()}}>
            <Icon2 name="question" color="#FFFFFF" size={30}/>
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <View style={styles.imageView}>
            <Image
              style={styles.avatar}
              source={require('../assets/Avatar.jpg')}
              resize="contain"
            />
          </View>
          <View style={styles.nameView}>
            <TextInput style={styles.name} placeholder={this.state.name} onChangeText={(text) => {this.setName(text)}} 
              placeholderTextColor="#F0F0F0" maxLength = {40}/>
          </View>
          <View style={{flex: 1}}/>
        </View>
        <View style={styles.stats}>
          <View style={styles.common}>
            <View style={{flex: 1}}/>
            <View style={styles.commonHeadView}>
              <Text style={styles.commonHead}>Choice Patterns</Text>
            </View>
            <View style={styles.commonContentView}>
              <View style={{flex: 1}}/>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.commonContent}>Most Common Choice</Text>
                <Text style={styles.commonNumber}>{this.state.c}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.commonContent}>Most Common Right Answer</Text>
                <Text style={styles.commonNumber}>{this.state.cr}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.commonContent}>Most Common Wrong Answer</Text>
                <Text style={styles.commonNumber}>{this.state.cw}</Text>
              </View>
            </View>
          </View>
          <View style={styles.taal}>
            <View style={{flex: 1}}/>
            <View style={styles.taalHeadView}>
              <Text style={styles.taalHead}>Scores</Text>
            </View>
            <View style={styles.taalContentView}>
              <View style={{flex: 1}}/>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.taalContent}>Total</Text>
                <Text style={styles.taalNumber}>{this.state.total}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.taalContent}>Average</Text>
                <Text style={styles.taalNumber} numberOfLines={1}>{this.state.avg}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.taalContent}>Average Last Ten</Text>
                <Text style={styles.taalNumber} numberOfLines={1}>{this.state.avglast}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{flex: 1}}/>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={{flex: 1}}/>
            <TouchableOpacity style={styles.clear} onPress={() => {this.clear()}}>
              <Text style={styles.clearText}>Clear Data</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}/>
          </View>
          <View style={{flex: 1}}/>
        </View>
      </View>
    );
  }
}
