import React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
// import {Provider} from 'mobx-react';
// import todoStore from './stores/todo'
// import App from './app'
// import ToDoContext from './stores/index'

// let store = {todoStore};
ReactDOM.render(
   <TodoList/>,
  document.getElementById('root')
)