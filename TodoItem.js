import React from 'react';
import { ListGroupItem, Checkbox } from 'react-bootstrap';

import { connect } from 'react-redux';
import { toggleTodo } from './reducers/todos';

const TodoItem = ({ todo, onToggle }) => (
  <ListGroupItem
    onClick={() => onToggle(todo.id)}
    bsStyle={ todo.completed ? 'success' : 'danger' }>
    <Checkbox
      value={todo.completed}
      checked={todo.completed}>
      { todo.text }
    </Checkbox>
  </ListGroupItem>
);

const mapDispatchToProps = (dispatch) => ({
	onToggle: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
