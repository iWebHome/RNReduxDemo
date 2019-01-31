import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';    // 引入 react-redux
import { initTodoList, changeTodoStatus, addNewTodo, filterTodoList } from '../actions/index';  // 引入 action  

import { FILITER_KEYS } from '../config/enum';             // 引用变量

import TodoFormComponent from '../components/todo-form.component';
import TodoListComponent from '../components/todo-list.component';
import TodoFilterComponent from '../components/todo-filter.component';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {                // 组件 mount 之后调用数据
    let { dispatch } = this.props;
    dispatch(initTodoList());          // 执行调用方法
  }

  addTodo(text) {
    let { dispatch } = this.props;             // 从 props 里解构出 dispatch
    dispatch(addNewTodo(text));                // 执行 dispatch(action)
  }

  toggleTodo(id) {
    let { dispatch } = this.props;              // 从 props 里解构出 dispatch
    dispatch(changeTodoStatus(id));          // 执行 dispatch(action)
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
        <TodoListComponent todoList={this.props.todoList} toggleTodo={(id) => { this.toggleTodo(id) }} />
        <TodoFilterComponent filter={this.props.currentFilter} filterTodo={(filter) => { this.filterTodo(filter) }} />
      </View>
    );
  }
}

const getFilterTodos = (todos, filter) => {               // 定义 TODO 过滤方法，返回新的数据
  switch (filter) {
    case FILITER_KEYS.ALL:
      return todos;
    case FILITER_KEYS.UNDO:
      return todos.filter(todo => !todo.status);
    case FILITER_KEYS.FINISH:
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