import { ADD_TODO } from './actions'

const initialState = {
  todo: '',
  todoList: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      const { todo, todoList } = action.payload
  }
}