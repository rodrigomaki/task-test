import React from 'react';
import ListItem from './ListItem';

const TaskList = (props) => {
  const taskIterator = (el, id) => {
    return <ListItem key={id} id={id} item={el} />;
  };

  return <ul>{props.taskList.map(taskIterator)}</ul>;
};

export default TaskList;
