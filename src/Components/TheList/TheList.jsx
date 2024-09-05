import React, { useState } from "react";
import "./TheList.css";

export default function TheList({
  taskContainer,
  handleDelete,
  modifiedValue,
  setModifiedValue,
  handleModify,
  setTaskContainer,
}) {
  const TheListHeading = "Your todo list: ";
  const [basicState, setBasicState] = React.useState(null);

  const [isDone, setIsDone] = useState({});

  const handleToggleForm = (id) => {
    if (basicState === id) {
      setBasicState(null);
    } else {
      setBasicState(id);
      const task = taskContainer.find((task) => task.id === id);
      setModifiedValue(task.text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = taskContainer.map((task) =>
      task.id === basicState ? { ...task, text: modifiedValue } : task
    );
    setTaskContainer(updatedTask);
    setBasicState(null);
    setModifiedValue("");
  };

  const handleDone = (id) => {
    setIsDone((prevIsDone) => ({
      ...prevIsDone,
      [id]: !prevIsDone[id],
    }));
  };

  return (
    <>
      <h3>{TheListHeading}</h3>
      <ul>
        {taskContainer.map((task) => (
          <li
            key={task.id}
            className={`li-style ${isDone[task.id] ? "finishTask" : ""}`}
          >
            <img
              className="handler-icons"
              src="/Icons/done.png"
              alt="done"
              onClick={() => handleDone(task.id)}
            />
            {task.text}{" "}
            <div className="btn-container">
              <button
                className="handler-btn"
                onClick={() => handleToggleForm(task.id)}
              >
                {basicState === task.id ? (
                  <img
                    className="handler-icons"
                    src="/Icons/closeIcon.png"
                    alt="Close icon"
                  />
                ) : (
                  <img
                    className="handler-icons"
                    src="/Icons/modify.png"
                    alt="Modify icon"
                  />
                )}
              </button>

              <button
                className="handler-btn"
                onClick={() => handleDelete(task.id)}
              >
                <img
                  className="handler-icons"
                  src="/Icons/delete.png"
                  alt="delete"
                />
              </button>
            </div>
            {basicState === task.id && (
              <form method="GET" action="#" onSubmit={handleSubmit}>
                <input
                  className="form-input"
                  type="text"
                  name="currentValue"
                  value={modifiedValue}
                  onChange={handleModify}
                />
                <input
                  className="form-modify-btn"
                  type="submit"
                  value="Modify"
                />
              </form>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
