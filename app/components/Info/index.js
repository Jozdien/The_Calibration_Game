import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { LinearTextGradient } from "react-native-text-gradient";
import LinearGradient from 'react-native-linear-gradient';
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
              <Text>You get a question.</Text>
            </LinearTextGradient>
            <LinearTextGradient style={styles.infoHead} locations={[0, 1]} colors={["#C4C4CB", "#9D9DFF"]}>
              <Text>You get two answers.</Text>
            </LinearTextGradient>
            <LinearTextGradient style={styles.infoHead} locations={[0, 1]} colors={["#C4C4CB", "#9D9DFF"]}>
              <Text> You decide how sure you are of your choice. </Text>
            </LinearTextGradient>
          </View>
          <View style={styles.infoTable}>
            <View>
              <Text style={styles.infoTableText}> Your Choice </Text>
              <Text style={styles.infoTableText}> Score if correct </Text>
              <Text style={styles.infoTableText}> Score if incorrect </Text>
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
        <View style={styles.options}>
        { 
          this.state.why == 0 ?
            <View>
              <View style={styles.optionsView}>
                <TouchableOpacity style={styles.why} onPress={() => {this.setState({why: 0})}}>
                  <Text style={styles.whyTextActive}> {"Why does this exist?"} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whyScore} onPress={() => {this.setState({why: 1})}}>
                  <Text style={styles.whyScoreText}> {"Why these numbers?"} </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.optionsTextView}>
                <Text style={styles.optionsText}>
                  If Joe is only right 60% of time when he says he’s 90% sure, Joe is said to be overconfident. {"\n"} 
                  As it turns out, most people are overconfident in this way: 
                  their success rates are far lower than how sure they are of their predictions. {"\n"}
                  Being well-calibrated is cool.
                </Text>
              </View>
            </View>
          :
            <View>
              <View style={styles.optionsView}>
                <TouchableOpacity style={styles.why} onPress={() => {this.setState({why: 0})}}>
                  <Text style={styles.whyText}> {"Why does this exist?"} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.whyScore} onPress={() => {this.setState({why: 1})}}>
                  <Text style={styles.whyScoreTextActive}> {"Why these numbers?"} </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.optionsTextView}>
                <Text style={styles.optionsText}>
                  Call it incentive to see just how strong a 99% confidence is. 
                  The difference between 98% and 99% is not the same as 50% and 51%. {"\n"}
                </Text>
                <View style={{flexDirection: 'row', marginTop: '-4.5%', alignSelf: 'center'}}>
                  <Text style={styles.optionsText}>80% is 2</Text><Text style={styles.super}>0.68</Text>
                  <Text style={styles.optionsText}> of 50%. {"\n"}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: '-4%', alignSelf: 'center'}}>
                  <Text style={styles.optionsText}>20% is 2</Text><Text style={styles.super}>-1.32</Text>
                  <Text style={styles.optionsText}> of 50%. {"\n"}</Text>
                </View>
                <View style={{marginTop: '-4%', alignSelf: 'center'}}>
                  <Text style={styles.optionsText}>Get it now?</Text>
                </View>
              </View>
            </View>
        }
        </View>
        <View style={styles.playView}>
          <TouchableOpacity style={styles.play} onPress={() => {this.props.navigation.navigate('Main')}}>
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
      </View>
    );
  }
}
