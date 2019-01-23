import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import HomeContainer from './containers/home.container';  // 引入容器组件

export default class RootWrapper extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <HomeContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 80,
  },
});