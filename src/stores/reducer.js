import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from '../stores/actionTypes';
const defaultState = {
  inputvalue: 'write',
  list:[
    // '早上七点起来',
    // '中午十二点吃饭'
  ]
}; //默认数据
export default (state = defaultState, action) => { // 一个方法函数
  console.log('state',state, 'action',action);  // state是原始仓库的状态  action指的是action新传递的状态
  if(action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)); // 深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue) //push新的内容到列表中去
    newState.inputValue = '';
    return newState
  }

  if(action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1); // 删除数组中对应的值
    return newState;
  }

  if(action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }
  return state;
}