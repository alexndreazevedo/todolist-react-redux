import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './reducers/todos';

const TodoHeader = ({ onAdd }) => {
  let input;

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      onAdd(input.value)
      input.value = ''
    }}>
      <input ref={(node) => {
        input = node
      } } />
      <button type="submit">
        Add Todo
      </button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
	onAdd: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoHeader);
