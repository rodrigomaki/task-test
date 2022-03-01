import React from 'react';
import Button from './Button';

import './TaskForm.css';

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = React.useState('');

  const inputHandled = (e) => {
    setEnteredTask(e.target.value);
  };

  const saveTask = (e) => {
    e.preventDefault();
    props.onSavedTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <form className="form" onSubmit={saveTask}>
      <div className="form-controls">
        <div className="form-control">
          <label htmlFor="task-name">Task:</label>
          <input
            type="text"
            id="task-name"
            onChange={inputHandled}
            value={enteredTask}
          />
        </div>
      </div>
      <Button type="submit" content="Save task" />
    </form>
  );
};

export default TaskForm;
