import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.handlerBtnClick = this.handlerBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handlerBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })

  }

  handlerInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {

  }

  handleDelete(index) {
    const list1 = [...this.state.list];
    list1.splice(index, 1);
    this.setState({
      list: list1
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index}
            content={item}
            index={index} />
        )
      })
    )
  }

  render() {
    console.log('TodoList render');
    return (
      <React.Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handlerInputChange} />
          <button className='red-btn' onClick={this.handlerBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </React.Fragment>
    )
  }
}

export default TodoList;
