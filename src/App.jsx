import React from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import TaskListContainer from './components/TaskListContainer';

function App() {
  const [tasks, setTasks] = React.useState([]);

  const savedTask = (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
  };

  return (
    <div>
      <TaskContainer onSavedTask={savedTask} />
      <TaskListContainer taskList={tasks} />
    </div>
  );
}

export default App;
