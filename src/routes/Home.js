import React, { useState } from "react"
import { connect } from "react-redux"

function Home({toDos}) {
  const [text, setText] = useState("")
  function onChange(e) {
    setText(e.target.value)
  } 
  function onSubmit(e) {
    e.preventDefault()
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
        {JSON.stringify(toDos)}
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

export default connect(mapStateToProps)(Home)