import React from "react";
const Form = ({ input, setInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button type="submit">Add task</button>
    </form>
  );
};
export default Form;
