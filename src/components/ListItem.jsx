import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
  const editTaskHandled = () => {
    console.log('edited');
  };
  const completeTaskHandled = () => {
    console.log('completed id');
  };

  return (
    <li className="list-item" id={props.id}>
      {props.item}
      <div>
        <a onClick={editTaskHandled}>
          <small>Edit</small>
        </a>
        <a onClick={completeTaskHandled}>
          <small>Complete</small>
        </a>
      </div>
    </li>
  );
};

export default ListItem;
