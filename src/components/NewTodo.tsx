import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (enteredText: string) => void }> = (
  props
) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // Throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
