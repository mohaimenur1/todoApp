import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        {/* <button className="todo--button--edit">Edit Todo</button> */}
        <li className="todo-list">{this.props.task}</li>
        {/* <button onClick={this.props.removeTodoHandler}>
          <img src="./close.png" alt="close icon" />
        </button> */}
        <i
          onClick={this.props.removeTodoHandler}
          class="fas fa-times fa-3x"
        ></i>
      </div>
    );
  }
}

export default Todo;
