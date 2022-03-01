import React from 'react';
import TaskForm from './TaskForm';

import './TaskContainer.css';

const TaskContainer = (props) => {
  const saveTask = (task) => {
    props.onSavedTask(task);
  };

  return (
    <div className="container-tasks">
      <h3>Insert your task here:</h3>
      <TaskForm onSavedTask={saveTask} />
    </div>
  );
};

export default TaskContainer;
