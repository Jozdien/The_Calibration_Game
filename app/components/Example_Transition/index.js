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
      responseRight50: "You're right, but are you sure you weren't more sure of it?",
      responseRight: "You're right. Good, you get the points.",
      responseWrong50: "You're wrong, but you wouldn't lose any points.",
      responseWrong: "You're wrong, and you'd lose a lot of points right now.",
      trigger: 1,
    }
  }

  update = (c, p) => {
    const scorestrue = {50: 0, 60: 26, 70: 49, 80: 68, 90: 85, 99: 99};
    const scoresfalse = {50: 0, 60: -32, 70: -74, 80: -132, 90: -232, 99: -564};
    this.setState({correct: c, prob: p});
  };

  componentDidMount () {
    const { navigation } = this.props;  
    const c = navigation.getParam('correct', 0);
    const p = navigation.getParam('prob', 50);
    this.update(c, p);
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
                <View style={{flex: 2}}/>
                <View style={styles.secondnumberView}>
                  <LinearTextGradient
                      style={styles.secondnumber}
                      locations={[0, 1]}
                      colors={["#9D9DFF", "#B2CCB2"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                    <Text>Question 0</Text>
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
                          {this.state.responseRight}{"\n\n"}You gained 0 points.
                        </Text>
                    :
                      this.state.prob == 50 ?
                        <Text style={styles.secondBodyText}>{this.state.responseWrong50}{"\n\n"}You lost 0 points.</Text>
                      :
                        <Text style={styles.secondBodyText}>
                          {this.state.responseWrong}{"\n\n"}You lost 0 points.{"\n"}
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
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.props.navigation.navigate("Main")}}>
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