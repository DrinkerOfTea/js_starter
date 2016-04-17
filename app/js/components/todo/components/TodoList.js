import React, { PropTypes } from 'react'
import Todo from './Todo'
import {List} from 'immutable'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
