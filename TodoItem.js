import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from './reducers/todos';

let TodoItem = ({ todo, onToggle }) => (
  <li>
    <a
      href="#"
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      { todo.text }
    </a>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
	onToggle: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
