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
      last: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      common: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_right: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      common_wrong: {50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 99: 0},
      question: 'Non est salvatori salvator neque defensori dominus nec pater nec mater nihil supernum',
      a: 'Magis',
      b: 'Nihil Supernum',
      answer: 'a',
      choice: '',
      prob: 0,
    }
  }

  update = (c, p) => {
    this.setState({choice: c, prob: p});
    let com = this.state.common;
    let comr = this.state.common_right;
    let comw = this.state.common_wrong;
    com[p] = com[p] + 1;
    let correct = 0;
    if(c == this.state.answer)
    {
      correct = 1;
      comr[p] = comr[p] + 1;
    }
    else
    {
      comw[p] = comw[p] + 1;
    }
    this.props.navigation.navigate('Transition', {correct: correct, prob: p, qno: this.state.qno, total: this.state.total, 
                                                  avg: this.state.avg, avglast: this.state.avglast, last: this.state.last, 
                                                  returnData: this.returnData.bind(this), common: com, common_right: comr,
                                                  common_wrong: comw});
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

  returnData(q, t, a, al, l, com, comr, comw){
    this.setState({qno: q+1, total: t, avg: a, avglast: al, last: l, common: com, common_right: comr, common_wrong: comw});
  };

  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <View style={styles.profileView}>
              <TouchableOpacity style={styles.profileButton} onPress={() => {this.toProfile()}}>
                <Text style={styles.profile}>Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numberView}>
              <LinearTextGradient
                  style={styles.number}
                  locations={[0, 1]}
                  colors={["#9D9DFF", "#B2CCB2"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                <Text>Question {this.state.qno}</Text>
              </LinearTextGradient>
            </View>
            <View style={styles.totalView}>
              <Text style={styles.totalLabel}>Score</Text>
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