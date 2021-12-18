import React, { useState } from "react"
import { connect } from "react-redux"
import ToDo from "../components/ToDo"
import { actionCreators } from "../store"

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("")
  function onChange(e) {
    setText(e.target.value)
  } 
  function onSubmit(e) {
    e.preventDefault()
    addToDo(text)
    setText("")
  }
  return  (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}/>)}
      </ul>
    </>
  )
}

// mapStateToProps => Redux의 state를 Component의 Props로 전달한다.
function mapStateToProps(state){
  // return된 것들은 component의 props로 추가된다
  // return { sexy: true }
  return { toDos: state }
}

function mapDispatchToProps(dispatch){
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)