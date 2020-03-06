/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import Modal from "react-native-modal";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { typeAlias } from '@babel/types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import TypeWriter from 'react-native-typewriter'
const { width, height } = Dimensions.get('window');
class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/f4/94/27/f49427eb3bbae129b7d8cc25b88fc946.jpg' }} style={{ width: '100%', height: '100%', marginTop: 0 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('QuizScreen')}>
            <View style={styles.marginview}>
              <Image
                style={styles.imagestyle}
                source={{ uri: 'https://www.pocoyo.com/img/Categorias/Adivinanzas/2018/02/thumb-easy-riddles.jpg' }}
              />
              <Text style={styles.textStyle}>Easy Riddles</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('QuizScreen')}>
            <View style={styles.marginview}>
              <Image
                style={styles.imagestyle}
                source={{ uri: 'https://www.pocoyo.com/img/Categorias/Adivinanzas/2018/02/thumb-short-riddles.jpg' }}
              />
              <Text style={styles.textStyle}>Hard Riddles</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('QuizScreen')}>
            <View style={styles.marginview}>
              <Image
                style={styles.imagestyle}
                source={{ uri: 'https://www.pocoyo.com/img/Categorias/Adivinanzas/2018/02/thumb-funny-riddles.jpg' }}
              />
              <Text style={styles.textStyle}>Really Hard Riddles</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ImageBackground >
    );
  }
};


var backgrounds = ['https://i.pinimg.com/564x/6b/02/84/6b0284d6f1ca18a21eef60b49f6b2adc.jpg',
  'https://i.pinimg.com/564x/61/6f/24/616f24c0386276d3a2ac1e0b3335f03d.jpg',
  'https://i.pinimg.com/564x/a4/7a/ec/a47aeccf9cfd9efb739c7e3667928141.jpg',
  'https://i.pinimg.com/564x/bb/4c/86/bb4c8671273b53270e67f54fa547ea8e.jpg',
  'https://i.pinimg.com/564x/a5/9d/fd/a59dfd57001fe0434353e57d25ad058a.jpg']


var riddles = ["I am so simple, that I can only point yet I guide men all over the world.",
  "Light as a feather, there's nothing in it, but the strongest man can't hold it much more than a minute.",
  "I have legs but not walk, a strong back but work not, two good arms but reach not, a seat but sit and tarry not.",
  "If you feed it, it lives, If you water it-it dies!",
  "There is a table with two people eating dinner. One is a boy and the other one is a girl. The boy has this long kept feeling that he wants to ask to this girl, and he thinks that this might be the right time, the time that he never thought he would have. So the boy asks the girl: Hi Tiffany, Will you be my Girlfriend? "]


var answers = ['compass', 'breath', 'chair', 'fire']
var choices = [{ q1: ['compass', 'clock', 'car'] },
{ q2: ['breath', 'egg', 'darkness'] },
{ q3: ['candle', 'chair', 'table'] },
{ q4: ['leaf', 'spring', 'fire'] },
{ q5: ['Yes', 'No', 'Not now'] },]

var q = ['q1', 'q2', 'q3', 'q4', 'q5']
var lasts = [73, 103, 112, 50, 320]
let delayMap = [
  [{ at: ',', delay: 300 },],
  [{ at: ',', delay: 300 },],
  [{ at: ',', delay: 300 },],
  [],
  [{ at: ',', delay: 300 }, { at: 47, delay: 800 }, { at: 89, delay: 800 }, { at: 253, delay: 800 },],
]
console.disableYellowBox = true;
class QuizScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  constructor(props) {
    super(props);
    this.state = {
      type: false,
      stage: 0,
      shows: false,
      isModalVisible: false,
      answer: '',
      score: 0,
      top:height / 4 + 50
    };
  }

  // componentDidMount(){
  //   alert(choices[0].q1)
  // }
  show(pre) {
    if (pre == lasts[this.state.stage]) {
      this.setState({ shows: true })
    }
  }
  type() {
    var s = this.state.stage + 1
    this.setState({ isModalVisible: !this.state.isModalVisible, stage: s, shows: false }, function () {
      if(this.state.stage == 4){
        this.setState({top: height / 4 + 90})
      }
    })
  }
  toggleModal = (ans) => {
    if (this.state.stage != 4) {
      if (ans == answers[this.state.stage]) {
        this.setState({ answer: 'CORRECT', score: this.state.score + 1 })
      } else {
        this.setState({ answer: ' WRONG' })
      }
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };
  }


  renderModalContent = () => (
    <View style={styles.content}>
      <Image source={{ uri: 'https://i.dlpng.com/static/png/1400092_preview_preview.png' }} style={{ width: 325, height: 220 }} />
      <Text style={styles.contentTitle}>{this.state.answer}</Text>
      <View style={styles.buttonNext}>
        <Button
          onPress={() => this.type()}
          title="NEXT"
        />
      </View>
      <Text style={styles.contentTitle1}>{'Answer: ' + answers[this.state.stage]}</Text>

    </View>
  );
  render() {
    return (
      <ImageBackground source={{ uri: backgrounds[4] }} style={{ width: '100%', height: '100%', }}>
        <Text style={{ position: 'absolute', top: 5, left: 20, fontFamily: 'GROBOLD', fontSize: 15, color: 'rgb(204,173,134)' }}>{"LEVEL " + (this.state.stage + 1)}</Text>
        <Text style={{ position: 'absolute', top: 5, right: 20, fontFamily: 'GROBOLD', fontSize: 15, color: 'rgb(204,173,134)' }}>{'SCORE: ' + this.state.score}</Text>
        <Image style={{ width: 80, height: 80, position: 'absolute', bottom: 5, right: 5 }} source={{ uri: 'https://i.kym-cdn.com/photos/images/original/000/358/493/3b2.gif' }} />
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 40, alignItems: 'center' }}>
          <TypeWriter style={{ fontFamily: 'GROBOLD', fontSize: 20, color: 'rgb(160,164,227)' }}
            delayMap={delayMap[this.state.stage]}
            maxDelay={200}
            typing={1}
            fixed={true}
            onTyped={(tok, pre) => this.show(pre)}>
            {riddles[this.state.stage]}
          </TypeWriter>
        </View>

        {this.state.shows &&

          <View style={{ position: 'absolute', top: this.state.top, alignSelf:'center' }}>
            {choices[this.state.stage][q[this.state.stage]].map((data) => {
              return (
                <TouchableOpacity onPress={() => this.toggleModal(data)}
                  style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                  <Image source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/14/16/57/scroll-34606_960_720.png' }} style={{ width: 190, height: 80 }} />
                  <View style={{ position: 'absolute' }}>
                    <Text style={{ fontFamily: 'GROBOLD', color: 'rgb(114,89,92)', fontSize: 25 }}>{data}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        }
        <Modal
          isVisible={this.state.isModalVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          {this.renderModalContent()}
        </Modal>
      </ImageBackground>
    );
  }
}






const styles = StyleSheet.create({
  imagestyle: {
    width: 300,
    height: 160
  },
  marginview: {
    margin: 7,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textStyle: {
    fontFamily: 'GROBOLD',
    margin: 5
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',

  },
  contentTitle: {
    fontFamily: 'GROBOLD',
    fontSize: 40,
    position: 'absolute',
    top: width / 10,
    alignSelf: 'center'
  },
  contentTitle1: {
    fontSize: 20,
    position: 'absolute',
    top: width / 4.5,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  buttonNext: {
    position: 'absolute',
    top: width / 3,
    alignSelf: 'center'
  },
});

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  QuizScreen: { screen: QuizScreen },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default createAppContainer(AppNavigator);