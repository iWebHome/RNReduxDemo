import { combineReducers } from 'redux';

import { INIT_TODO_LIST, TOGGLE_TODO_STATUS, ADD_NEW_TODO, SET_FILTER } from '../actions/index';    // 引入 action ，使用 action 类型常量

function todoList(state = [], action) {
  switch (action.type) {// 匹配响应 action，创建并返回新的 state (注意，不能修改state)
    case INIT_TODO_LIST:                             // 添加新的 action 类型分支，INIT_TODO_LIST
      return [
        ...state,
        ...action.list.map((todo) => {
          return {
            id: todo.id,
            title: todo.title,
            status: todo.status,
          }
        })
      ];
    case TOGGLE_TODO_STATUS:
      var index = state.findIndex((todo) => { return todo.id == action.id });
      var todo = state.find((todo) => { return todo.id == action.id });
      return [
        ...state.slice(0, index),
        Object.assign({}, todo, {
          status: action.status                    // action 所对应 id 的 TODO 状态(status)，修改为 action 数据中的 status
        }),
        ...state.slice(index + 1)
      ];
    case ADD_NEW_TODO:                                // 定义了新的匹配类型，以响应新的 action
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.text,
          status: false,
        }
      ];
    default:                                         // 在没有匹配到 action 时，返回原始state
      return state;
  }

}

function setFilter(state = '', action) {       // 定义了新的 reducer
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const reducers = combineReducers({
  todos: todoList, // 这里的 key 要与初始数据的 key 一致
  filter: setFilter, // 添加了新的 reducer combine
});

export default reducers;