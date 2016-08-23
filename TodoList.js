import React, { Component } from 'react';
import todolist from './Reducers';

const ItemList = (props) => (
	<li>
		<a
			href="#"
			onClick={ props.onToggle.bind(this, props.item.id) }
			style={ props.item.completed ? { textDecoration: 'line-through' } : {} }
		>
			{ props.item.text }
		</a>
	</li>
);

const List = (props) => (
	<ul>
		{props.list.map(item => (

			<ItemList
				onToggle={ props.onToggle }
				key={ item.id }
				item={ item }
			/>

		))}
	</ul>
);

class TodoList extends Component {

	constructor() {
		super();

		this.state = {
			text: '',
			list: todolist.getState(),
		}

		this.onChange = this.onChange.bind(this);
		this.onToggle = this.onToggle.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e) {
		this.setState({
			text: e.target.value,
		});
	}

	onToggle (id, e) {
		e.preventDefault();

		todolist.toggle(id);

		this.setState({
			list: todolist.getState(),
		});
	}

	onAdd (e) {
		e.preventDefault();

		const { id, text } = this.state;

		if(text !== '') {

			todolist.add(id, text);

			this.setState({
				text: '',
				list: todolist.getState(),
			});

			this.refs.text.focus();
		}

	}

	render () {
		return (
			<div>
				<header>
					<form onSubmit={ this.onAdd } >
						<input ref="text" type="text" value={ this.state.text } onChange={ this.onChange } />
						<input disabled={ this.state.text === '' } type="submit" value="Add" />
					</form>
				</header>
				<main>
					<List list={ this.state.list } onToggle={ this.onToggle } />
				</main>
			</div>
		);
	}

	componentDidMount() {
		this.refs.text.focus();
	}
}

export default TodoList;