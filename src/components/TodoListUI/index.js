import React from 'react';
import { Input, Button,List } from 'antd';

const TodoListUI = (props) => {
  return ( 
          <div style={{margin:'10px'}}>
          <div>
            <Input placeholder={props.inputValue} style={{width: '250px',marginRight:'10px'}}
            onChange={props.changeInputValue} value={props.inputValue}/>
            <Button type="primary" onClick={props.clickBtn}>增加</Button>
          </div>
          <div style={{margin:'10px', width:'300px'}}>
            <List bordered dataSource={props.list} renderItem={(item ,index)=> (
              <List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>
            )}/>
          </div>
        </div>
         );
        }
// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <div style={{margin:'10px'}}>
//       <div>
//         <Input placeholder={this.props.inputValue} style={{width: '250px',marginRight:'10px'}}
//         onChange={this.props.changeInputValue} value={this.props.inputValue}/>
//         <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
//       </div>
//       <div style={{margin:'10px', width:'300px'}}>
//         <List bordered dataSource={this.props.list} renderItem={(item ,index)=> (
//           <List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>
//         )}/>
//       </div>
//     </div>
//      );
//   }
// }
 
export default TodoListUI;