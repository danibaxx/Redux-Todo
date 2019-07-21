import { 
  ADD_TODO, 
  COMPLETE_TODO,
} from '../actions';

const initialState = {
  todos: [
    {
      text: 'Do Laundry',
      completed: false,
      id: 0
    }
  ],
  name: 'Danielle'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      };

    case COMPLETE_TODO:
      const id = action.payload;
      const todos = state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });

      return {
        ...state, 
        todos: todos
      };

    default: 
      return state;
  }
}