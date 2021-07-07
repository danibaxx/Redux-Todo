import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todo';

import { connect } from 'react-redux';

import { addTodo } from './actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Todo List...</h1>
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.todoText}
          addTodo={this.addTodo}
        />
        <div className="intro">
          <Todos todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    name: state.name
  }
}

export default connect(
  mapStateToProps, 
  { addTodo }
)(App);
