import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")


// reducer는 data를 modify하는 함수이다.
const countModifier = (count = 0) => {
  return count
}

const countStore = createStore(countModifier)

console.log(countStore.getState())