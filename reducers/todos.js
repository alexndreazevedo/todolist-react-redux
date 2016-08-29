let nextId = 0;

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
				id: nextId++,
				text: action.text,
			});

		case TOGGLE_TODO:

			if (state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				completed: !state.completed,
			});

		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {

		case ADD_TODO:
			return state.concat([
				todo(undefined, action),
			]);

		case TOGGLE_TODO:
			return state.map(_todo => todo(_todo, action));

		default:
			return state;
	}
};

export default todos;

export const addTodo = (text) => ({
	type: ADD_TODO,
	text,
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id,
});