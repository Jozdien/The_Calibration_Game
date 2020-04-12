import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import ShadowView from 'react-native-simple-shadow-view';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      qno: 1,
      total: 0,
      avg: 0,
      avglast: 0,
      last: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      common: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_right: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_wrong: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      scorestrue: {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99},
      scoresfalse: {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564},
      prob: 0,
      score: 0,
      correct: 0,
      responseRight50: "You're right, for all the good it does you.",
      responseRight: "You're right, and that's good.",
      responseWrong50: "You're wrong, for all the bad that does you.",
      responseWrong: "You're wrong, and you will suffer for it.",
      trigger: 1,
    }
  }

  setData = async (q) => {
    try {
      await AsyncStorage.setItem('qno', (q+1).toString());
      await AsyncStorage.setItem('total', this.state.total.toString());
      await AsyncStorage.setItem('avg', this.state.avg.toString());
      await AsyncStorage.setItem('avglast', this.state.avglast.toString());
      await AsyncStorage.setItem('last', JSON.stringify(this.state.last));
    } catch (e) {
      Alert.alert(
        'Someone messed up',
        'Try again.'
      )
    }
  };

  updatescorewin = (p) => {
    const scorestrue = {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99};
    this.setState({score: scorestrue[p]});
  };
  updatescoreloss = (p) => {
    const scoresfalse = {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564};
    this.setState({score: scoresfalse[p]});
  };

  updatetotal = (t, a, al, q, l) => {
    this.setState((state) => ({total: t+state.score}));
    this.updateavg(a, al, t, q, l);
  };

  updateavg = (a, al, t, q, l) => {
    this.setState((state) => ({avg: state.total/q}));
    this.updateavglast(al, t, q, l);
  }; 

  updateavglast = (al, t, q, l) => {
    let lsum = l.reduce((a, b) => a + b, 0)
    if(q > 10)
    { 
      this.setState({avglast: lsum/10});
    }
    else
    {
      this.setState({avglast: lsum/q});
    }
    this.setData(q);
  }; 

  updatescore = (c, p, q, t, a, al, l) => {
    if(c == 1)
    {
      this.updatescorewin(p);
    }
    else
    {
      this.updatescoreloss(p);
    };
    this.updatetotal(t, a, al, q, l);
  };

  update = (c, p, q, t, a, al, l) => {
    const scorestrue = {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99};
    const scoresfalse = {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564};
    let qno = 0;
    if(q%10 == 0)
    {
      qno = 9;
    }
    else{
      qno = (q % 10) - 1;
    }
    if(c == 1)
    {
      l[qno] = scorestrue[p];
    }
    else
    {
      l[qno] = scoresfalse[p];
    }
    this.setState({correct: c, prob: p, last: l}, this.updatescore(c, p, q, t, a, al, l));
  };

  toProfile = () => {
    this.props.navigation.navigate('Profile', { qno: this.state.qno, total: this.state.total, avg: this.state.avg, 
                                                avglast: this.state.avglast, last: this.state.last, 
                                                returnProfile: this.returnProfile.bind(this), common: this.state.common, 
                                                common_right: this.state.common_right, common_wrong: this.state.common_wrong});
  };
  returnProfile(q, t, a, al, l, com, comr, comw){
    this.setState({qno: q, total: t, avg: a, avglast: al, last: l, common: com, common_right: comr, common_wrong: comw});
  };

  return = () => {
    this.props.navigation.state.params.returnData(this.state.qno, this.state.total, this.state.avg, this.state. avglast, this.state.last, 
                                                  this.state.common, this.state.common_right, this.state.common_wrong);
    this.props.navigation.goBack();
  };

  componentDidMount () {
    const { navigation } = this.props;  
    const c = navigation.getParam('correct', 0);
    const p = navigation.getParam('prob', 50);
    const q = navigation.getParam('qno', 0);
    const t = navigation.getParam('total', 0);
    const a = navigation.getParam('avg', 0);  
    const al = navigation.getParam('avglast', 0);
    const l = navigation.getParam('last', [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const com = navigation.getParam('common', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    const comr = navigation.getParam('common_right', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    const comw = navigation.getParam('common_wrong', {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0});
    this.setState({qno: q, common: com, common_right: comr, common_wrong: comw});
    this.update(c, p, q, t, a, al, l);
  };

  static navigationOptions={
    headerShown: false
  }
  render(){ 
    return(
      <View style={styles.parent}>
        {
          this.state.trigger == 1 ?
            <View style={{flex: 1}}>
              <View style={styles.secondheader}>
                <View style={styles.secondprofileView}>
                  <TouchableOpacity style={styles.secondprofileButton} onPress={() => {this.toProfile()}}>
                    <Text style={styles.secondprofile}>Profile</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.secondnumberView}>
                  <LinearTextGradient
                      style={styles.secondnumber}
                      locations={[0, 1]}
                      colors={["#9D9DFF", "#B2CCB2"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                    <Text>Question {this.state.qno}</Text>
                  </LinearTextGradient>
                </View>
                <View style={styles.secondtotalView}>
                  <Text style={styles.secondtotalLabel}>Score</Text>
                  <Text style={styles.secondtotal} numberOfLines={1}>{this.state.avg}</Text>
                </View>
              </View>
              <View style={styles.secondBody}>
                <View style={styles.secondBodyTextView}>
                  {
                    this.state.correct == 1 ? 
                      this.state.prob == 50 ?
                        <Text style={styles.secondBodyText}>{this.state.responseRight50}{"\n\n"}You gained 0 points.</Text>
                      :
                        <Text style={styles.secondBodyText}>
                          {this.state.responseRight}{"\n\n"}You gained +{this.state.scorestrue[this.state.prob]} points.
                        </Text>
                    :
                      this.state.prob == 50 ?
                        <Text style={styles.secondBodyText}>{this.state.responseWrong50}{"\n\n"}You lost 0 points.</Text>
                      :
                        <Text style={styles.secondBodyText}>
                          {this.state.responseWrong}{"\n\n"}You lost {this.state.scoresfalse[this.state.prob]} points.{"\n"}
                          <Text style={{fontSize: 13,}}>(Don{"'"}t mention the double negative.)</Text>
                        </Text>
                  }
                </View>
                <View style={styles.secondBodyStatsView}>
                  <View style={styles.secondTotal}>
                    <View style={{flex: 1}}/>
                    <View style={styles.secondStatsBorder}>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.secondLabel}>Total</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.secondText}>{this.state.total}</Text>
                      </View>
                    </View>
                    <View style={{flex: 1}}/>
                  </View>
                  <View style={styles.secondAverage}>
                    <View style={{flex: 1}}/>
                    <View style={styles.secondStatsBorder}>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.secondLabel}>Average</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center', width: '75%', alignSelf: 'center'}}>
                        <Text style={styles.secondText} numberOfLines={1}>{this.state.avg}</Text>
                      </View>
                    </View>
                    <View style={{flex: 1}}/>
                  </View>
                  <View style={styles.secondAverageLast}>
                    <View style={{flex: 1}}/>
                    <View style={styles.secondStatsBorder}>
                      <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.secondLabel}>Last 10 Avg</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center', width: '75%', alignSelf: 'center'}}>
                        <Text style={styles.secondText} numberOfLines={1}>{this.state.avglast}</Text>
                      </View>
                    </View>
                    <View style={{flex: 1}}/>
                  </View>
                </View>
                <View style={{flex: 2}}/>
              </View>
              <View style={styles.secondFooter}>
                <ShadowView style={styles.secondNext}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.return()}}>
                    <LinearTextGradient
                      style={styles.secondNextText}
                      locations={[0, 1]}
                      colors={["#9D9DFF", "#D8FFD8"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text>Next</Text>
                    </LinearTextGradient>
                  </TouchableOpacity>
                </ShadowView>
              </View>
            </View>
          :
            null
        }
      </View>
    );
  }
}