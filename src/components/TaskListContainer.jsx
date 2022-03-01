import React from 'react';
import TaskList from './TaskList';

import './TaskListContainer.css';

const TaskListContainer = (props) => {
  return (
    <div className="task-list">
      <h3>Task List:</h3>
      <TaskList taskList={props.taskList} />
    </div>
  );
};

export default TaskListContainer;
