import fetchData from '../utils/fetch-data';            // 引入 fetch 工具

/*********************************** action 类型常量 *************************************/

export const INIT_TODO_LIST = 'INIT_TODO_LIST';         // 定义新的 action 类型

/**
 * 更改 TODO 状态
 * @type {String}
 */
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const SET_FILTER = 'SET_FILTER';         // 添加新的 action 类型

/*********************************** action 创建函数 *************************************/

export function initTodoList() {                       // 定义新的 action creator
  return function (dispatch) {
    fetchData('list_message').then((data) => {      // 使用 fetch 调用远程数据
      dispatch({                                // 执行 dispatch(action)
        type: INIT_TODO_LIST,
        list: data,
      })
    });
  }
}

/**
 * 更改 TODO 状态
 * @param  {Number} id TODO索引
 * @return {Object}       action
 */
export function changeTodoStatus(id) {
  return function (dispatch) {                        // return 一个 function
    fetchData('toggle_message_status', { id: id }, 'PUT').then((data) => {        // 把 setTimeout 修改为 fetchData
      if (data.code === 0) {
        dispatch({ type: TOGGLE_TODO_STATUS, status: data.status, id })  
      }
    });
    // setTimeout(() => {                               // 延迟执行
    //   dispatch({ type: TOGGLE_TODO_STATUS, id });  // action 内部 dispatch 了 action
    // }, 2000);
  }
  // return { type: TOGGLE_TODO_STATUS, id };
}

export function addNewTodo(text) { // 定义 action 创建函数
  return { type: ADD_NEW_TODO, text };
}

export function filterTodoList(filter) { // 添加新的 action 创建函数
  return { type: SET_FILTER, filter };
};