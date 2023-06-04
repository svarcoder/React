/**
 * The FlushSyncExe function is a React component that renders a list of todos and allows the user to
 * add new tasks using the AddTodo component.
 * @returns The code exports a React component called `FlushSyncExe`, which renders a list of todos and
 * an input form to add new todos. It also imports and uses a mock data file called `mockTodos`.
 * Additionally, it exports a separate component called `AddTodo` which is used within `FlushSyncExe`
 * to render the input form.
 */
import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { v4 as uuid } from "uuid";
import mockTodos from "./mockTodos";

const FlushSyncExe = () => {
  const [todos, setTodos] = useState(mockTodos);
  const listRef = useRef();

  const onAdd = (newTask) => {
    flushSync(() => {
      setTodos([...todos, { id: uuid(), task: newTask }]);
    });
    listRef.current.scrollTop = listRef.current.scrollHeight;
  };

  return (
    <>
      <section>
        <h1>Todos</h1>
        <ul ref={listRef} style={{ height: 200, overflowY: "auto" }}>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
        <AddTodo onAdd={onAdd} />
      </section>
    </>
  );
};

export default FlushSyncExe;

const AddTodo = ({ onAdd }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskInput.trim()) return;
    setTaskInput("");
    onAdd(taskInput.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
};
