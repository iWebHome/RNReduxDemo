import { combineReducers } from 'redux';

// 这是一个空的 reducer , 不做任何处理，返回原始 state
function todoList(state = [], action) {
  return state;
}

const reducers = combineReducers({
  todos: todoList           // 这里的 key 要与初始数据的 key 一致
});

export default reducers;