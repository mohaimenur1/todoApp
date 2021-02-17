import cuid from "cuid";
import React, { Component } from "react";
import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    task: "",
  };

  formSubmitHandler = (evt) => {
    evt.preventDefault();
    const newTodo = { ...this.state, id: cuid() };
    this.props.createNewTodoHandler(newTodo);
    this.setState({
      task: "",
    });
  };

  inputChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.formSubmitHandler}>
        <input
          type="text"
          placeholder="new task"
          id="task"
          value={this.state.task}
          onChange={this.inputChangeHandler}
          name="task"
          autoComplete="off"
        />
        <button className="todo--button--add">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
