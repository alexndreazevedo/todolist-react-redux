import { createStore } from 'redux';

let id = 0;

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const initialTodo = {
	id: 0,
	text: '',
	completed: false,
};

const todo = (state = initialTodo, action) => {
	switch (action.type) {

		case ADD_TODO:
			return Object.assign({}, state, {
				id: id++,
				text: action.text,
			});

		case TOGGLE_TODO:

			if (state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				completed: !state.completed
			});

		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {

		case ADD_TODO:
			return state.concat([todo(undefined, action)]);

		case TOGGLE_TODO:
			return state.map(_todo => todo(_todo, action));

		default:
			return state;
	}
};

const store = createStore(todos);

store.add = (_id, _text) => {
  store.dispatch({
    type: ADD_TODO,
    id: _id,
    text: _text,
  });
};

store.toggle = (_id) => {
  store.dispatch({
    type: TOGGLE_TODO,
    id: _id,
  });
};

export default store;
