import React, { Component } from 'react';
import {
  Dimensions,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';


export default class TodoFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: null,
    };
  }

  addTodo() {
    this.props.addTodo && this.props.addTodo(this.state.todo);    // 调用父组件方法
  }

  setTodo(text) {
    this.setState({
      todo: text
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput style={styles.input} onChangeText={(text) => { this.setTodo(text) }} />
        <Button title="添加" onPress={() => this.addTodo()} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    width: Dimensions.get('window').width
  },
  input: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },
});