import * as React from 'react';
let { Component } = React;

import * as RN from 'react-native';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = RN;

// import * as _ from 'lodash';

interface CardProps {
  text : string;
  flipped : boolean;
  onFlip : () => void;
}

class Card extends Component<CardProps, {}> {
  render() {
    return (
      <View style={{
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        backgroundColor:this.props.flipped ? "white" : "gray"
      }}
        onTouchEnd={() => {
          this.props.onFlip();
        }}
      >
        <Text style={{fontSize:30}}>
          {this.props.flipped ? this.props.text : ""}
        </Text>
      </View>
    )
  }
}

const rows = 5;
const columns = 4;
interface CardMatchState {
  cards ?: Array<string>;
  flipped ?: Array<boolean>;
}

class CardMatch extends Component<{}, CardMatchState> {
  state = {
    cards: new Array<string>(rows * columns),
    flipped: new Array<boolean>(rows * columns)
  }

  componentDidMount() {
    let cards = new Array<string>(rows * columns);
    let flipped = new Array<boolean>(rows * columns);
    for (var i = 0; i < rows * columns; i++) {
      cards[i] = String.fromCharCode(65 + i / 2);
      flipped[i] = false;
    }
    cards = _.shuffle(cards);
    this.setState({cards, flipped});
  }

  flip(index : number) {
    let flipped = this.state.flipped.slice(0);
    flipped[index] = !flipped[index];
    this.setState({flipped});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          marginTop:20,
          flexDirection:'row',
          flexWrap:'wrap'
        }} >
          {this.state.cards.map((text, index) => {
            return <Card key={index} text={text} flipped={this.state.flipped[index]} onFlip={() => {
              this.flip(index);
            }} />
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  } as RN.ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as RN.TextStyle,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as RN.TextStyle,
});