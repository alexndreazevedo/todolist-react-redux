import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

let TodoList = ({ todos, onToggle }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        key={ todo.id }
        todo={ todo }
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
	todos: state.todos
});

export default connect(mapStateToProps, null)(TodoList);
