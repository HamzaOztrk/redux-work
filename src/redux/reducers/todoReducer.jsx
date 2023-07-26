import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOOGLE_TODO } from "../types/todoTypes"

const initialState = {
    // todoList:[ {id:1, text:"", completed:false } ],
  todoList: [],
}

const todoReducer = (state = initialState, {type,payload}) => {
  switch (type) {

  case ADD_TODO:
    return { 
        todoList : [...state.todoList,
             {id:new Date().getTime(),text: payload, completed:false }]
     }

  case CLEAR_TODO:
     return {
      todoList:[]
     }

  case DELETE_TODO:
      return {
        todoList: state.todoList.filter((item)=> item.id !== payload)
      }

  case TOOGLE_TODO:
    return {
      todoList : state.todoList.map((item)=> item.id === payload ? 
      {  ...item,completed: !item.completed } : item) 
    }    

  default:
    return state
  }
}

export default todoReducer