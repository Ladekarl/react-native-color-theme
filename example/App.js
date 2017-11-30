import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import colors from './Colors';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme()
    };
  }

  changeTheme = () => {
    if(colors.getTheme() === 'redTheme') {
      colors.setTheme('blueTheme');
    } else {
      colors.setTheme('redColor');
    }
    this.setState({currentTheme: colors.getTheme()});
  };

  dynamicContainerStyle = () => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.backgroundColor,
    }
  };

  dynamicTitleStyle = () => {
    return {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: colors.titleColor
    };
  };

  dynamicTextStyle = () => {
    return {
      textAlign: 'center',
      margin: 10,
      color: colors.fontColor
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.staticContainer}>
          <Text style={styles.title}>
            This is static titleColor
          </Text>
          <Text style={styles.text}>
            This is static fontColor
          </Text>
          <Text style={styles.title}>{'Current Theme: ' + this.state.currentTheme}</Text>
          <Button title='Change Theme' onPress={() => this.changeTheme()}/>
        </View>
        <View style={this.dynamicContainerStyle()}>
          <Text style={this.dynamicTitleStyle()}>
            This is dynamic titleColor
          </Text>
          <Text style={this.dynamicTextStyle()}>
            This is a dynamic fontColor
          </Text>
          <Text style={this.dynamicTitleStyle()}>{'Current Theme: ' + this.state.currentTheme}</Text>
          <Button title='Change Theme' onPress={() => this.changeTheme()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  staticContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.titleColor
  },
  text: {
    textAlign: 'center',
    margin: 10,
    color: colors.fontColor
  }
});
