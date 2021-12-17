import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

// reducer는 state를 modify하는 함수이다.
// reducer가 return하는건 내 어플리케이션의 state가 된다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count
  }
}

const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}

// state의 변화를 감지.
countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({ type: ADD })
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)