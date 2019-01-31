import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


export default class TodoListComponent extends Component {
  constructor(props) {
    super(props);
  }

  toggleTodo(id) {      // 修改执行方法，index => id ，本来可以不用修改参数，但为了统一起见，我们还是修改。
    this.props.toggleTodo && this.props.toggleTodo(id);    // index => id
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.todoList.map((todo, index) => {
          var finishStyle = { textDecorationLine: 'line-through', color: 'gray' };
          return (
            <TouchableOpacity key={index} onPress={() => { this.toggleTodo(todo.id) }}>
              <Text style={[styles.todo, todo.status && finishStyle]}>{todo.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  todo: {
    paddingVertical: 5,
  },
});