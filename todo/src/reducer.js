import { ADD_TODO } from './actions';

const initialState = {
  todos: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...initialState,
        
      }
  }
}