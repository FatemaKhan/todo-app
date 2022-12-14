import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { RiCloseCircleLine, RiDeleteBackLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { BsCardList } from "react-icons/bs";
import axios from "axios";

//This component is the structure of the task/list item

//
const Task = ({
  listItems,
  completelistItem,
  removelistItem,
  updatelistItem,
}) => {
  //Array that holds the declared state value of 'edit' which is the current state and 'setEdit' which is a function that will update it.
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //Function to submit the update/change to the task/list item
  const submitUpdate = (value) => {
    updatelistItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  //Reads through a map of task/list items and its index and checks to see if the item on the list has been completed or not
  //If the item is clicked on, it is marked as completed and therfore strikedthrough.
  return listItems.map((listItem, index) => (
    <div
      className={listItem.isComplete ? "listItem-row complete" : "listItem-row"}
      key={index}
    >
      <div key={listItem.id} onClick={() => completelistItem(listItem.id)}>
        {listItem.text}
      </div>

      <div>{listItem.time}</div>

      {/*Sets and displays the icons taken from react-icons for delete and edit*/}
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removelistItem(listItem.id)}
          className="remove-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: listItem.id, value: listItem.text })}
          className="edit-icon"
        />

        <BsCardList
          onClick={(e) => {
            e.preventDefault();

            let newTask = {
              Time: listItem.time,
              Task: listItem.text,
            };

            axios.post("http://localhost:3002/savetask", newTask);
          }}
          className="save-icon"
        />
      </div>
    </div>
  ));
};

export default Task;
