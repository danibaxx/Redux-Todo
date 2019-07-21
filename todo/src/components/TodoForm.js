import React from 'react';
import { connect } from 'react-redux';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    }
  }

  addItem = (event) => {
    event.preventDefault();
    const todo = this.state;
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.addItem}>
          <input 
            type="text" 
            name="add" 
            placeholder="Add Items..."
          />
          <button type="submit">
            Add Todo Item
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  todo: state.addItem,
  }
};

export default connect(
  mapStateToProps,
)(TodoForm);