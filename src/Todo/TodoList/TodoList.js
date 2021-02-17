import React, { Component } from "react";
import "./TodoList.css";
import Todo from "../Todo";
import TodoForm from "../TodoForm/TodoForm";

class TodoList extends Component {
  state = {
    todos: [],
  };

  createNewTodoHandler = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  removeTodoHandler = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        task={todo.task}
        id={todo.id}
        key={todo.id}
        removeTodoHandler={() => {
          this.removeTodoHandler(todo.id);
        }}
      />
    ));
    return (
      <div className="todo--list">
        <h1>Todo List!</h1>
        <div>
          <TodoForm createNewTodoHandler={this.createNewTodoHandler} />
          <ul className="todo--list--items">{todos}</ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
