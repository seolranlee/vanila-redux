import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   }
// }

// createReducer의 두가지 선택지
// 1. 새로운 state를 return하기
// 2. state를 mutatae하기 => redux 툴킷이 immer아래에서 동작하기 때문.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // 2. push: state를 mutate: return하지 않는다.
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) => {
    // 1. filter: 새로운 state를 return
    return state.filter(toDo => toDo.id !== action.payload)
  }
})

// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state]
//     case deleteToDo.type:
//       return state.filter(toDo => toDo.id !== action.payload)
//     default:
//       return state
//   }
// }

const store = createStore(reducer)

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store