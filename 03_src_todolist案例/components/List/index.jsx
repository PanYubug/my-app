import React, { Component } from 'react'
import propTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {

  //对接收到额props进行必要性的限制
  static propTypes = {
    todos: propTypes.array.isRequired,
    updateTodo: propTypes.func.isRequired,
    deleteTodo: propTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
