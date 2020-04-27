import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default class Launch extends React.Component {
  constructor() {
    super()
    this.state = {
      screen: 1,
      why: 0,
    }
  }
  static navigationOptions={
    headerShown: false
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <View style={styles.info}>
          <View style={{flex: 7, justifyContent: 'center'}}>
            <LinearTextGradient style={styles.infoHead} locations={[0, 1]} colors={["#C4C4CB", "#9D9DFF"]}>
              <Text>You get a question and two answers.</Text>
            </LinearTextGradient>
            <LinearTextGradient style={styles.infoHead} locations={[0, 1]} colors={["#C4C4CB", "#9D9DFF"]}>
              <Text>If you{"'"}re 90% sure of answer A, pick 90 on A, and so on.</Text>
            </LinearTextGradient>
            <LinearTextGradient style={styles.infoHead} locations={[0, 1]} colors={["#C4C4CB", "#9D9DFF"]}>
              <Text>This is not a test of what you know, but how sure you are of it.</Text>
            </LinearTextGradient>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.why} onPress={() => {this.setState({visibilityExist: true})}}>
            <Text style={styles.whyText}> {"Why does this exist?"} </Text>
          </TouchableOpacity>
          <View style={{flex: 1}}/>
          <TouchableOpacity style={styles.whyScore} onPress={() => {this.setState({visibilityNumbers: true})}}>
            <Text style={styles.whyScoreText}> {"How do the scores work?"} </Text>
          </TouchableOpacity>
          <View style={{flex: 1}}/>
        </View>
        <View style={styles.playView}>
          <TouchableOpacity style={styles.play} onPress={() => {this.props.navigation.navigate("Main")}}>
            <LinearTextGradient
              style={styles.playText}
              locations={[0, 1]}
              colors={["#B2CCB2", "#9D9DFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text>Play</Text>
            </LinearTextGradient>
          </TouchableOpacity>
        </View>
        <Modal isVisible={this.state.visibilityExist}>
          <View style={{flex: 1}}>
            <View style={{flex: 2}}/>
            <View style={styles.modalWhyExist}>
              <View style={{flex: 4}}>
                <Text style={styles.modalWhyExistHead}>Overconfidence</Text>
              </View>
              <View style={{flex: 13}}>
                <Text style={styles.modalWhyExistText}>
                  If Jose is only right 60% of time when he says he’s 90% sure, Jose is said to be overconfident. {"\n"} 
                  As it turns out, most people are overconfident in this way: 
                  their success rates are far lower than how sure they are of their predictions. {"\n"}
                  Being well-calibrated is cool.
                </Text>
              </View>
              <View style={styles.modalWhyExistOKView}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.setState({visibilityExist: false})}}>
                  <Text style={styles.modalWhyExistOKText}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 2}}/>
          </View>
        </Modal>
        <Modal isVisible={this.state.visibilityNumbers}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}/>
            <View style={styles.modalWhy}>
              <View style={{flex: 4}}>
                <Text style={styles.modalWhyExistHead}>Scoring</Text>
              </View>
              <View style={{flex: 8}}>
                <View style={{flex: 1}}/>
                <View style={styles.infoTable}>
                  <View>
                    <Text style={styles.infoTableText}>Choice</Text>
                    <Text style={styles.infoTableText}>Correct</Text>
                    <Text style={styles.infoTableText}>Wrong</Text>
                  </View>
                  <View>
                    <View style={styles.infoTableScoreView}>
                      <Text style={styles.infoTableNumber}> 50% </Text>
                      <Text style={styles.infoTableNumber}> 60% </Text>
                      <Text style={styles.infoTableNumber}> 70% </Text>
                      <Text style={styles.infoTableNumber}> 80% </Text>
                      <Text style={styles.infoTableNumber}> 90% </Text>
                      <Text style={styles.infoTableNumber}> 99% </Text>
                    </View>
                    <View style={styles.infoTableScoreView}>
                      <Text style={styles.infoTableScore}> 0 </Text>
                      <Text style={styles.infoTableScore}> +26 </Text>
                      <Text style={styles.infoTableScore}> +49 </Text>
                      <Text style={styles.infoTableScore}> +68 </Text>
                      <Text style={styles.infoTableScore}> +85 </Text>
                      <Text style={styles.infoTableScore}> +99 </Text>
                    </View>
                    <View style={styles.infoTableScoreView}>
                      <Text style={styles.infoTableScoreN1}> 0 </Text>
                      <Text style={styles.infoTableScoreN2}> -32 </Text>
                      <Text style={styles.infoTableScoreN3}> -74 </Text>
                      <Text style={styles.infoTableScoreN4}> -132 </Text>
                      <Text style={styles.infoTableScoreN5}> -232 </Text>
                      <Text style={styles.infoTableScoreN6}> -564 </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flex: 4}}>
                <Text style={styles.modalWhyExistHead}>Why these numbers?</Text>
              </View>
              <View style={{flex: 16}}>
                <View style={{flex: 2}}>
                  <Text style={styles.modalWhyExistText}>
                    Call it incentive to see just how strong a 99% confidence is. 
                    The difference between 98% and 99% is not the same as 50% and 51%. {"\n"}
                  </Text>
                </View>
                <View style={{flex: 2, alignSelf: 'center'}}>
                  <View style={{flex: 1, flexDirection: 'row', width: '20%'}}>
                    <Text style={styles.modalWhyExistText}>80% is 2</Text><Text style={styles.super}>0.68</Text>
                    <Text style={styles.modalWhyExistText}> of 50%. {"\n"}</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', width: '20%'}}>
                    <Text style={styles.modalWhyExistText}>20% is 2</Text><Text style={styles.super}>-1.32</Text>
                    <Text style={styles.modalWhyExistText}> of 50%. {"\n"}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.modalWhyOKView}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => {this.setState({visibilityNumbers: false})}}>
                  <Text style={styles.modalWhyExistOKText}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}}/>
          </View>
        </Modal>
      </View>
    );
  }
}
