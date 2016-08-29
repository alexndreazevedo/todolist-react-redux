import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTodo } from './reducers/todos';

class TodoHeader extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      text: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.text.trim()) {

      this.props.onAdd(this.state.text.trim());
      this.setState({
        text: '',
      });
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <InputGroup bsSize="large">
            <FormControl type="text" value={this.state.text} onChange={this.onChange} />
            <InputGroup.Button>
              <Button bsStyle="primary" type="submit" disabled={this.state.text === ''}>
                Add Todo
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
	onAdd: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoHeader);
