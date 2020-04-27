import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import ShadowView from 'react-native-simple-shadow-view';
import AsyncStorage from '@react-native-community/async-storage';
import {db} from './../../../src/config.js';
import questions from './../assets/questions.json';
import styles from './styles';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      questions: {},
      qno: 1,
      total: 0,
      avg: 0,
      avglast: 0,
      last: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      common: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_right: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_wrong: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      question: 'Which is greater of the two following number choices?',
      a: '200',
      b: '9000',
      answer: 'b',
      choice: '',
      prob: 0,
    }
  }

  update = (c, p) => {
    let correct = 0;
    if(c == this.state.answer)
    {
      correct = 1;
    }
    this.props.navigation.navigate('Example_Transition', {correct: correct, prob: p});
  };

  static navigationOptions={
    headerShown: false  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <View style={{flex: 2}}/>
            <View style={styles.numberView}>
              <LinearTextGradient
                  style={styles.number}
                  locations={[0, 1]}
                  colors={["#9D9DFF", "#B2CCB2"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                <Text>Question 0</Text>
              </LinearTextGradient>
            </View>
            <View style={styles.totalView}>
              <Text style={styles.totalLabel}>Avg</Text>
              <Text style={styles.total} numberOfLines={1}>{this.state.avg}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.question}>
              <Text style={styles.questionText}>{this.state.question}</Text>
            </View>
            <View style={styles.answers}>
              <View style={styles.a}>
                <View style={styles.answerLabelView}>
                  <Text style={styles.answerLabel}>A</Text>
                </View>
                <View style={styles.answerContentView}>
                  <Text style={styles.answerContent}>{this.state.a}</Text>
                </View>
              </View>
              <View style={styles.b}>
                <View style={styles.answerLabelView}>
                  <Text style={styles.answerLabel}>B</Text>
                </View>
                <View style={styles.answerContentView}>
                  <Text style={styles.answerContent}>{this.state.b}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}/>
          <View style={styles.choice}>
            <View style={styles.achoice}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={styles.achoiceLabelView}>
                  <Text style={styles.choiceLabel}>A</Text>
                </View>
                <View style={{flex: 2, backgroundColor: "#101010"}}/>
              </View>
              <View style={styles.aoptionsContainer}>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 50)}}>
                    <Text style={styles.option}>50%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 60)}}>
                    <Text style={styles.option}>60%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 70)}}>
                    <Text style={styles.option}>70%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 80)}}>
                    <Text style={styles.option}>80%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 90)}}>
                    <Text style={styles.option}>90%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.aoptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('a', 99)}}>
                    <Text style={styles.option}>99%</Text>
                  </TouchableOpacity>
                </ShadowView>
              </View>
            </View>
            <View style={styles.bchoice}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={styles.bchoiceLabelView}>
                  <Text style={styles.choiceLabel}>B</Text>
                </View>
                <View style={{flex: 2, backgroundColor: "#202030"}}/>
              </View>
              <View style={styles.boptionsContainer}>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 50)}}>
                    <Text style={styles.option}>50%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 60)}}>
                    <Text style={styles.option}>60%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 70)}}>
                    <Text style={styles.option}>70%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 80)}}>
                    <Text style={styles.option}>80%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 90)}}>
                    <Text style={styles.option}>90%</Text>
                  </TouchableOpacity>
                </ShadowView>
                <ShadowView style={styles.boptionButton}>
                  <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.update('b', 99)}}>
                    <Text style={styles.option}>99%</Text>
                  </TouchableOpacity>
                </ShadowView>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}