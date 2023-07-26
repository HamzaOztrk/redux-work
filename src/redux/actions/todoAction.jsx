import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOOGLE_TODO } from "../types/todoTypes";

export const addTodo = (payload) => ({  type: ADD_TODO,  payload})

export const clearTodo = ()=>({ type:CLEAR_TODO}) 

export const deleteTodo = (payload)=> ({ type: DELETE_TODO, payload})

export const toogleTodo = (payload)=> ({ type: TOOGLE_TODO, payload})