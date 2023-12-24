import React, { useState } from 'react';
import { Button, Label, TextInput,Datepicker } from 'flowbite-react';
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');

  const addTask = () => {
    if (!taskInput || !deadlineInput) return;
    const newTask = {
      name: taskInput,
      deadline: new Date(deadlineInput),
      state: 'pending',
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setDeadlineInput('');
  };

  const toggleTaskState = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].state =
      updatedTasks[index].state === 'completed' ? 'pending' : 'completed';
    setTasks(updatedTasks);
  };

  const calculateTaskStyle = (deadline, state) => {
    const currentDate = new Date();

    if (deadline < currentDate && state !== 'completed') {
      return 'late';
    } else if (state === 'completed') {
      return 'completed';
    } else {
      return 'pending';
    }
  };

  return (
    
      <div className="App">
        <h1 className="mb-2 text-center">TASK MANAGEMENT APP</h1>
        <div className="mx-auto max-w-md">
          <div className="mb-4">
            <Label htmlFor="task" value="Enter Task:" />
            <TextInput
              id="task"
              type="text"
              placeholder="Reckon new task... 🖊"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              sizing="sm"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="deadline" value="Set Deadline:" />
            <TextInput
              id="deadline"
              type="datetime-local"
              value={deadlineInput}
              onChange={(e) => setDeadlineInput(e.target.value)}
              sizing="sm"
            />
          </div>
          <div className="flex justify-center">
            <Button onClick={addTask} color="success">
              Add task
            </Button>
          </div>
        </div>
        <ul className="mx-auto mt-4 max-w-md">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`cursor-pointer border p-2 mb-2 rounded-xl ${calculateTaskStyle(
                task.deadline,
                task.state
              )}`}
              onClick={() => toggleTaskState(index)}
            >
              {task.name} - Deadline: {task.deadline.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App
