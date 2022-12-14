import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import axios from "axios";

function TaskList(props) {
  //Array that holds the declared state value of 'listItems' which is the current state and 'setlistItems' which is a function that will update it.
  //Using local Storage to store the list items even when page is refreshed or closed out.
  const [listItems, setlistItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  //Using useEffect hook for local storage.
  useEffect(() => {
    // localStorage.setItem("listItems", JSON.stringify(listItems));
    console.log(props);
  }, [listItems]);

  //Adding a task/item to the list and returns if it is not text.
  const addlistItem = (listItem) => {
    if (!listItem.text) {
      return;
    }
    const newlistItems = [listItem, ...listItems];

    setlistItems(newlistItems);
    console.log(...listItems);
  };

  //Updating an task/item on the list
  const updatelistItem = (listItemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setlistItems((prev) =>
      prev.map((item) => (item.id === listItemId ? newValue : item))
    );
  };

  //Deleting a task/item on the list
  const removelistItem = (id) => {
    const removedItem = [...listItems].filter((listItem) => listItem.id !== id);

    setlistItems(removedItem);
  };

  //Completing a task/item on the list
  const completelistItem = (id) => {
    let updatedlistItems = listItems.map((listItem) => {
      if (listItem.id === id) {
        listItem.isComplete = !listItem.isComplete;
      }
      return listItem;
    });
    setlistItems(updatedlistItems);
  };

  //sort by alphabetical order
  const sortlistItemsAlpha = (text) => {
    const sortedlistItems = [...listItems].sort((a, b) =>
      a.text > b.text ? 1 : -1
    );
    setlistItems(sortedlistItems);
  };

  //sort by time order
  const sortlistItemsTime = (time) => {
    const sortedlistItems = [...listItems].sort((a, b) =>
      a.time > b.time ? 1 : -1
    );
    setlistItems(sortedlistItems);
  };

  //Returns the Task Form along with a title for the page and
  return (
    <>
      <div className="list-context">
        <h1>What to accomplish today?</h1>

        <TaskForm username={props.username} onSubmit={addlistItem} />
        {props.username && (
          <div>
            <div className="sort-container">
              <button
                className="order-button"
                onClick={() => sortlistItemsAlpha(listItems.text)}
              >
                Alphabetical Order
              </button>
              <button
                className="time-order"
                onClick={() => sortlistItemsTime(listItems.time)}
              >
                Time Order
              </button>
            </div>
            <Task
              listItems={listItems}
              completelistItem={completelistItem}
              removelistItem={removelistItem}
              updatelistItem={updatelistItem}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TaskList;
