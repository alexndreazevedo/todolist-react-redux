const SET_VISIBILITY = 'SET_VISIBILITY';

const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';

const initialTodo = SHOW_ALL;

const visibility = (state = initialTodo, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const showAll = () => ({
	type: SET_VISIBILITY,
  filter: SHOW_ALL,
});

export const showActive = () => ({
	type: SET_VISIBILITY,
  filter: SHOW_ACTIVE,
});

export const showCompleted = () => ({
	type: SET_VISIBILITY,
  filter: SHOW_COMPLETED,
});

export default visibility;
