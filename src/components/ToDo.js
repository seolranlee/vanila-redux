import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id }){
  return (
    <li>
      <Link to={`/${id}`} >
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  const { id } = ownProps
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)