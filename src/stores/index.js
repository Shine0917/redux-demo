import {createStore,applyMiddleware,compose} from 'redux'; // 引入createStore方法
import reducer from './reducer'; // 引入reducer到store中
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'; // 引入saga
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware(); // 创建saga中间件

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose

// const enhancer = composeEnhancers(applyMiddleware(thunk)); // 用thunk中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)); // 用saga中间件
const store = createStore( // thunk放在createStore的第二个参数
  reducer,
  enhancer
  // applyMiddleware(thunk)
  );  //创建数据存储仓库

  sagaMiddleware.run(mySagas);
  
export default store;   // 暴露出去
