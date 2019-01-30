import { combineReducers } from 'redux';

import { TOGGLE_TODO_STATUS, ADD_NEW_TODO, SET_FILTER } from '../actions/index';    // 引入 action ，使用 action 类型常量

function todoList(state = [], action) {
  switch (action.type) {                                  // 匹配响应 action，创建并返回新的 state (注意，不能修改state)
    case TOGGLE_TODO_STATUS:
      var todo = state[action.index];
      return [
        ...state.slice(0, action.index),
        Object.assign({}, todo, {
          status: !todo.status
        }),
        ...state.slice(action.index + 1)
      ];
    case ADD_NEW_TODO:                                // 定义了新的匹配类型，以响应新的 action
      return [
        ...state,
        {
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