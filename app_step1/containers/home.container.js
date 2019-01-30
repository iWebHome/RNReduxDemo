import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';    // 引入 react-redux

import TodoListComponent from '../components/todo-list.component';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View>
        {/**注意，这里的 todoList 是 mapStateToProps 返回的 key  （运行时，注释会报错，请删除注释） */}
        <TodoListComponent todoList={this.props.todoList} />
      </View>
    );
  }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state) {
  return {
    todoList: state.todos,  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
  }
}

export default connect(mapStateToProps)(HomeContainer);  // 连接组件并export