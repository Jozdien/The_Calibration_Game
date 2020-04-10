import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import ShadowView from 'react-native-simple-shadow-view'
import styles from './styles';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      qno: 1,
      total: 0,
      avg: 0,
      avglast: 0,
      scorestrue: {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99},
      scoresfalse: {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564},
      prob: 0,
      score: 0,
      correct: 0,
      responseRight50: "You're right, for all the good it does you.",
      responseRight: "You're right, and that's good.",
      responseWrong50: "You're wrong, for all the bad that does you.",
      responseWrong: "You're wrong, and you will suffer for it.",
      trigger: 0,
    }
  }

  log = () => {
    console.log(this.state.prob);
  };

  updatescorewin = (p) => {
    const scorestrue = {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99};
    this.setState({score: scorestrue[p]}, this.log());
  };
  updatescoreloss = (p) => {
    const scoresfalse = {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564};
    this.setState({score: scoresfalse[p]});
  };

  updatetotal = (t, a, al, q) => {
    this.setState({total: t+this.state.score}, this.updateavg(a, al, t, q));
  };

  updateavg = (a, al, t, q) => {
    this.setState({avg: (t)/(q)}, this.updateavglast(al, t, q));
  }; 

  updateavglast = (al, t, q) => {
    this.setState({avglast: (t)/(q)}, this.setState({trigger: 1}));
  }; 

  updatescore = (c, p, q, t, a, al) => {
    if(c == 1)
    {
      this.updatescorewin(p);
    }
    else
    {
      this.updatescoreloss(p);
    };
    this.updatetotal(t, a, al, q);
  };

  update = (c, p, q, t, a, al) => {
    this.setState({correct: c, prob: p, qno: q}, this.updatescore(c, p, q, t, a, al));
  };

  componentDidMount () {
    const { navigation } = this.props;  
    const correct = navigation.getParam('correct', 0);
    const prob = navigation.getParam('prob', 50);
    const qno = navigation.getParam('qno', 0);
    const total = navigation.getParam('total', 0);
    const avg = navigation.getParam('avg', 0);  
    const avglast = navigation.getParam('avglast', 0);
    this.update(correct, prob, qno, total, avg, avglast);
  };

  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        {
          this.state.trigger == 1 ?
            <View style={{flex: 1}}>
              <View style={styles.secondheader}>
                <View style={styles.secondprofileView}>
                  <TouchableOpacity style={styles.secondprofileButton} onPress={() => {this.props.navigation.navigate('Profile')}}>
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
                        <Text style={styles.secondBodyText}>{this.state.responseRight}{"\n\n"}You gained +{this.state.scorestrue[this.state.prob]} points.</Text>
                    :
                      this.state.prob == 50 ?
                        <Text style={styles.secondBodyText}>{this.state.responseWrong50}{"\n\n"}You lost 0 points.</Text>
                      :
                        <Text style={styles.secondBodyText}>{this.state.responseWrong}{"\n\n"}You lost {this.state.scoresfalse[this.state.prob]} points.{"\n"}(Don{"'"}t mention the double negative.)</Text>
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
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.setState({choice: '', prob: 0, qno: this.state.qno+1})}}>
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