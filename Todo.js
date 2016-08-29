import React from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => (
	<div>
		<header>
			<Row>
				<Col md={12}>
					<PageHeader>To-do List</PageHeader>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<TodoForm />
				</Col>
			</Row>
		</header>
		<main>
			<Row>
				<Col md={12}>
					<TodoList />
				</Col>
			</Row>
		</main>
	</div>
);

export default Todo;