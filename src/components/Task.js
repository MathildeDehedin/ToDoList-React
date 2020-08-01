import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ tasks, handleClickCheck, handleClickTrash }) => {
  return (
    <div className="task">
      <ul>
        {" "}
        {tasks.map((task, index) => {
          return (
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                onChange={() => {
                  handleClickCheck(index);
                }}
              />
              <li className={tasks.isDone ? "done" : ""}>{task.title}</li>
              <span
                onClick={() => {
                  handleClickTrash(index);
                }}
              >
                <FontAwesomeIcon icon="trash" className="trash" />
              </span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Task;
