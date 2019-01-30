import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';    // 引入 react-redux
import { changeTodoStatus, addNewTodo, filterTodoList } from '../actions/index';  // 引入 action  

import TodoFormComponent from '../components/todo-form.component';
import TodoListComponent from '../components/todo-list.component';
import TodoFilterComponent from '../components/todo-filter.component';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

  }

  addTodo(text) {
    let { dispatch } = this.props;             // 从 props 里解构出 dispatch
    dispatch(addNewTodo(text));                // 执行 dispatch(action)
  }

  toggleTodo(index) {
    let { dispatch } = this.props;              // 从 props 里解构出 dispatch
    dispatch(changeTodoStatus(index));          // 执行 dispatch(action)
  }
  
  filterTodo(filter) {
    let { dispatch } = this.props;              // 从 props 里解构出 dispatch
    dispatch(filterTodoList(filter));           // 执行过滤方法
  }

  render() {
    return (
      <View>
        <TodoFormComponent addTodo={(text) => { this.addTodo(text) }} />
        {/**注意，这里的 todoList 是 mapStateToProps 返回的 key  （运行时，注释会报错，请删除注释） */}
        <TodoListComponent todoList={this.props.todoList} toggleTodo={(index) => { this.toggleTodo(index) }} />
        <TodoFilterComponent filter={this.props.currentFilter} filterTodo={(filter) => { this.filterTodo(filter) }} />
      </View>
    );
  }
}

const getFilterTodos = (todos, filter) => {               // 定义 TODO 过滤方法，返回新的数据
  switch (filter) {
    case 'All':
      return todos;
    case 'Undo':
      return todos.filter(todo => !todo.status);
    case 'Finish':
      return todos.filter(todo => todo.status);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

// 基于全局 state ，哪些 state 是我们想注入的 props
function mapStateToProps(state) {
  return {
    todoList: getFilterTodos(state.todos, state.filter),  // 将全局的 state 的其中一个 key(即todos) 作为 props 注入
    currentFilter: state.filter,  // 注入新的 state 到 props
  }
}

export default connect(mapStateToProps)(HomeContainer);  // 连接组件并export