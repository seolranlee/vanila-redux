import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

// reducer는 data를 modify하는 함수이다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1
  } else if (action.type === 'MINUS') {
    return count - 1
  } else {
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
  countStore.dispatch({ type: "ADD" })
}

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" })
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)