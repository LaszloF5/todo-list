import React from "react";
import "./Form.css";

export default function Form({
  handleTasks,
  currentValue,
  toTheTaskContainer,
}) {
  const formHeading = "What is your plan for today?";
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    handleTasks(newValue);
  };
  return (
    <>
      <h2>{formHeading}</h2>
      <form action="#" method="get" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="currentValue"
          value={currentValue}
          onChange={handleChange}
          placeholder="Add a task..."
        />
        <input
          className="form-submit-btn"
          type="submit"
          value="Add"
          onClick={toTheTaskContainer}
        />
      </form>
    </>
  );
}
