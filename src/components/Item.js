import React, { useState } from 'react';
import List from './list'; // Import the List component
import './Item.css'; // Import the CSS file for Item

export default function Item() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const clickHandler = () => {
    if (text !== '') {
      setItems([...items, { text, done: false }]);
      setText('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const toggleDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index].done = !updatedItems[index].done;
    setItems(updatedItems);
  };

  return (
    <div className="item-container">
      <form className="form-container">
        <input
          type="text"
          onChange={changeHandler}
          value={text}
          className="input-field"
        />
        <button type="button" onClick={clickHandler}  className="button" placeholder="Enter your to-do item">
          Add
        </button>
      </form>

      <ul className="list-container">
        {items.map((item, index) => (
          <List
            key={index}
            text={item.text}
            done={item.done}
            remove={() => removeItem(index)}
            toggle={() => toggleDone(index)}
          />
        ))}
      </ul>
    </div>
  );
}
