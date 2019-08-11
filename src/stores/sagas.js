import { GET_MY_LIST } from "./actionTypes";
import {takeEvery,put} from 'redux-saga/effects';
import axios from 'axios';
import {getListAction} from './actionCreators';

// 需要用generator函数
function* mySaga() {
 // 等待捕获action
 yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
  //   const data = res.data;
  //   const action = getListAction(data);
  //   put(action);
  // })  
  const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList');
  const action = getListAction(res.data);
  yield put(action)
}
export default mySaga;
