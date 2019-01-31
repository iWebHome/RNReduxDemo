/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// 引入入口文件
import AppStep0 from './app_step0';
import AppStep1 from './app_step1';
import AppStep2 from './app_step2';
import AppStep3 from './app_step3';
import AppStep4 from './app_step4';
import AppStep5 from './app_step5';
import AppStep6 from './app_step6';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppStep6 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
