import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Task from "./components/Task";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCheck, faTrash);

function App() {
  const [tasks, setTasks] = useState([]);
  // Stocker la valeur de input
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ title: input, isDone: false });
    setTasks(newTasks);
    setInput("");
  };

  const handleClickCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  const handleClickTrash = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(newTasks.indexOf(newTasks[index]), 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <Task
        tasks={tasks}
        handleClickCheck={handleClickCheck}
        handleClickTrash={handleClickTrash}
      />
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default App;
