import {createStore,applyMiddleware,compose} from 'redux'; // 引入createStore方法
import reducer from './reducer'; // 引入reducer到store中
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore( // thunk放在createStore的第二个参数
  reducer,
  enhancer
  // applyMiddleware(thunk)
  );  //创建数据存储仓库
export default store;   // 暴露出去
