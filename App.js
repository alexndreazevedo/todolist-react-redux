import React, { PropTypes, Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const App = () => (
	<div>
		<header>
			<TodoHeader />
		</header>
		<main>
			<TodoList />
		</main>
	</div>
);

export default App;