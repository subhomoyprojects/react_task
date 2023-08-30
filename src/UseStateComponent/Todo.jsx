import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });
  const [todoStore, setTodoStore] = useState([]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodo = () => {
    setTodoStore((prevState) => [...prevState, todo]);
    setTodo({
      title: "",
      content: "",
    });
  };

  const resetTodo = () => {
    setTodo({
      title: "",
      content: "",
    });
  };

  const deleteCurrent = (index) => {
    setTodoStore((prevElement) => prevElement.filter((item, i) => i !== index));
  };

  return (
    <div className="container common-gap">
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div className="todo-message-card">
        <input name="title" value={todo.title} type="text" placeholder="Title" onChange={onChangeHandler} />
        <textarea name="content" value={todo.content} placeholder="Message" onChange={onChangeHandler}></textarea>
        <div className="btn-holder">
          <button type="button" onClick={addTodo}>
            Add
          </button>
          <button type="button" className="reset" onClick={resetTodo}>
            Reset
          </button>
        </div>
      </div>

      <ul className="todo-items-holder">
        {todoStore.map((item, index) => {
          return (
            <li className="todo-item" key={index}>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
              <button type="button" className="reset" onClick={() => deleteCurrent(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
