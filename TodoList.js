import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => (
  <ListGroup>
    {todos.map(todo => (
      <TodoItem key={ todo.id } todo={ todo } />
    ))}
  </ListGroup>
);

const mapStateToProps = (state) => ({
	todos: state.todos
});

export default connect(mapStateToProps, null)(TodoList);
