const { createStore } = require("redux")

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


// action creator
const addToDo = text => {
  return {
    type: ADD_TODO, 
    text
  }
}

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ""
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    li.id = toDo.id
    li.innerText = toDo.text
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteToDo)
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
} 

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id
  store.dispatch(deleteToDo(id))
}

const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  input.value = ""
  dispatchAddToDo(toDo)
}

form.addEventListener("submit", onSubmit)