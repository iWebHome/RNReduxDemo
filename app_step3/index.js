import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { createStore } from 'redux';        // 引入 redux 以创建 store
import { Provider } from 'react-redux';     // 引入 react-redux，使用 Provider
import reducers from './reducers/index';    // 引入 reducers

import HomeContainer from './containers/home.container';  // 引入容器组件

// 这是初始数据
const initState = {
  todos: [
    { id: 1, title: '吃早饭', status: true },    // 添加 id 属性
    { id: 2, title: '打篮球', status: false },   // 添加 id 属性
    { id: 3, title: '修电脑', status: false },   // 添加 id 属性
  ],
  filter: 'All', // 'All'|'Undo'|'Finish'    // 添加新的初始 `state`
};

let store = createStore(reducers, initState);  // 创建 store


export default class RootWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.wrapper}>
          <HomeContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 80,
  },
});