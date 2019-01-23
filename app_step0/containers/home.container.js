import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import TodoListComponent from '../components/todo-list.component';  // 引入子组件
import TodoFormComponent from '../components/todo-form.component';

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    // 初始状态 todoList
    this.state = {
      todoList: [
        { title: 'Eat', status: false },
        { title: 'Play', status: false },
        { title: 'Sleep', status: false }],
    };
  }

  toggleTodo(index) {    // 数据处理，切换 todo 状态，更新 state

    var todoList = this.state.todoList;
    var todo = todoList[index];
    if (todo) {
      todo.status = !todo.status;
      this.setState({
        todoList: todoList,
      })
    }
  }

  addTodo(text) {       // 执行添加方法，更新数据
    var todoList = this.state.todoList;
    todoList.push({
      title: text,
      status: false,
    });
    this.setState({
      todoList: todoList,
    })
  }

  render() {
    return (
      <View>
        <TodoFormComponent addTodo={(text) => { this.addTodo(text) }} />
        <TodoListComponent
          todoList={this.state.todoList}
          toggleTodo={(index) => { this.toggleTodo(index) }} />
      </View>
    );
  }
}
