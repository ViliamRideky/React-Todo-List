import React, { useState } from "react";
import Task from "./components/Task";

const App = () => {

  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDeadline, setTaskDeadline] = useState("")
  const [taskList, setTaskList] = useState([])

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, description: taskDescription, deadline: taskDeadline }])
    setTaskName('')
    setTaskDescription('')
    setTaskDeadline('')
  }

  const isAddTaskDisabled = taskName === "" || taskDescription === "";
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="main">
      <h1>Todo List</h1>
      <label htmlFor="">Task name: </label>
      <input type="text" id="task" value={taskName} onChange={(e) => {
        setTaskName(e.target.value)
      }} />
      <label htmlFor="">Task Description: </label>
      <input type="text" id="description" value={taskDescription} onChange={(e) => {
        setTaskDescription(e.target.value)
      }} />
      <label htmlFor="">Task deadline: </label>
      <input type="date" name="" id="date" value={taskDeadline} onChange={(e) => {
        setTaskDeadline(e.target.value)
      }} min={today} />

      <button className="add-button" type="button" onClick={addTask} disabled={isAddTaskDisabled}>Add new Task</button>

      {taskList.map((task, index) => {
        const handleTaskComplete = () => {
          const newTaskList = [...taskList];
          newTaskList[index].completed = true;
          setTaskList(newTaskList);
        };

        const handleTaskDelete = () => {
          const newTaskList = [...taskList];
          newTaskList.splice(index, 1);
          setTaskList(newTaskList);
        };

        return (
          <Task
            key={index}
            taskName={task.task}
            description={task.description}
            deadline={task.deadline}
            onTaskComplete={handleTaskComplete}
            onTaskDelete={handleTaskDelete}
            completed={task.completed}
          />
        );
      })}


    </div>
  )

}
export default App