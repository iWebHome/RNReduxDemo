/*********************************** action 类型常量 *************************************/

/**
 * 更改 TODO 状态
 * @type {String}
 */
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const SET_FILTER = 'SET_FILTER';         // 添加新的 action 类型

/*********************************** action 创建函数 *************************************/

/**
 * 更改 TODO 状态
 * @param  {Number} id TODO索引
 * @return {Object}       action
 */
export function changeTodoStatus(id) {
  // return { type: TOGGLE_TODO_STATUS, id };
  return function (dispatch) {                        // return 一个 function
    setTimeout(() => {                               // 延迟执行
      dispatch({ type: TOGGLE_TODO_STATUS, id });  // action 内部 dispatch 了 action
    }, 2000);
  }
}

export function addNewTodo(text) { // 定义 action 创建函数
  return { type: ADD_NEW_TODO, text };
}

export function filterTodoList(filter) { // 添加新的 action 创建函数
  return { type: SET_FILTER, filter };
};