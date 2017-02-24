import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export interface Props {
  count: number;
  onAddPress: () => {};
  onResetPress: () => {};
}

export class Counter extends React.Component<Props, void> {

  private styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    } as React.ViewStyle,
    count: {
      fontSize: 40,
    } as React.ViewStyle,
  });

  private handleAddButtonPress = () => {
    this.props.onAddPress();
  };

  private handleResetButtonPress = () => {
    return this.props.onResetPress();
  };

  render(): JSX.Element|any {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.count}>{this.props.count}</Text>
        <Button title="+1" onPress={this.handleAddButtonPress} />
        <Button title="Reset" color="#FF0000" onPress={this.handleResetButtonPress} />
      </View>
    );
  }
}

export default Counter;
