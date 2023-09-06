import React from 'react';
import './list.css'; // Import the CSS file for List

export default function List(props) {
  return (
    <div>
      <li className="list-item">
        <span
          className={props.done ? 'list-text done-text' : 'list-text'}
        >
          {props.text}
        </span>
        <button onClick={props.remove} className="remove-button">
          Remove
        </button>
        <button onClick={props.toggle} className="toggle-button">
          {props.done ? 'Undo' : 'Done'}
        </button>
      </li>
    </div>
  );
}
