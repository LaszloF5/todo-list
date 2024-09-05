import React, { useState } from "react";
import Form from "./Components/Form/Form";
import TheList from "./Components/TheList/TheList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function App() {
  const [taskContainer, setTaskContainer] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [modifiedValue, setModifiedValue] = useState("");

  const handleTasks = (newValue) => {
    setCurrentValue(newValue);
  };

  const toTheTaskContainer = () => {
    if (currentValue.length === 0) {
      alert("You must fill in this field!");
    } else {
      const newTask = { id: uuidv4(), text: currentValue };
      setTaskContainer([...taskContainer, newTask]);
      setCurrentValue("");
    }
  };

  const handleDelete = (id) => {
    const newtoDoList = taskContainer.filter((task) => task.id !== id);
    setTaskContainer(newtoDoList);
  };

  const handleModify = (e) => {
    setModifiedValue(e.target.value);
  };
  return (
    <div className="App">
      <section className="Main-container">
        <Form
          handleTasks={handleTasks}
          currentValue={currentValue}
          toTheTaskContainer={toTheTaskContainer}
        />
        <TheList
          taskContainer={taskContainer}
          handleDelete={handleDelete}
          handleModify={handleModify}
          setModifiedValue={setModifiedValue}
          modifiedValue={modifiedValue}
          setTaskContainer={setTaskContainer}
        />
      </section>
    </div>
  );
}
