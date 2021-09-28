import React from 'react'


function TodoItem(props) {
  return (
    <li>
      <input
        checked={props.todo.completed}
        type="checkbox"
        onChange={() => {
          props.handleChangeProps(props.todo.id);
        }}
      />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>

      {props.todo.title}
    </li>
  );
}

export default TodoItem
