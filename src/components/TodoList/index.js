import React, { Component } from 'react';
import { Input, Button,List } from 'antd';
import store from '../../stores/index';
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from '../../stores/actionTypes'
import { changeInputAction, addItemAction, deleteItemAction ,getListAction, getTodoList,getMyListAction} from '../../stores/actionCreators';
import TodoListUI from '../TodoListUI/index';
import axios from 'axios';

// const data =[
//   '早上八点而是出门，吃早饭',
//   '九点半到公司上班',
//   '晚上七点回家回家'
// ]
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    // this.storeChange = this.storeChange.bind(this);  //转变this指向
    store.subscribe(this.storeChange); // 订阅Redux的状态
  }

  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
    console.log(action)
    // const action = getTodoList();
    // store.dispatch(action);
  // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
  //   const data = res.data;
  //   const action = getListAction(data);
  //   store.dispatch(action)
  // })
  }
  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value)
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    store.dispatch(action);
    // console.log(e.target.value)
  }
  storeChange = () => {
    this.setState(
      store.getState()
    )
  }

  clickBtn = () => {
    const action = addItemAction();
    store.dispatch(action);
    // console.log('asfa') 
  }

  deleteItem(index) {
    const action = deleteItemAction(index);
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // };
    store.dispatch(action);
    // console.log(index)
  }
  render() { 
    return ( 
      <TodoListUI
      inputValue = {this.state.inputValue}
      changeInputValue={this.changeInputValue}
      clickBtn = {this.clickBtn}
      list = {this.state.list}
      deleteItem = {this.deleteItem}
      />
     );
  }
}
 
export default TodoList;