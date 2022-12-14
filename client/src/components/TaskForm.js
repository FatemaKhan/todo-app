import React, { useState, useEffect, useRef } from "react";

//This component is the structure of the form the user will be using to add/edit the task/list items on the web app.

function TaskForm(props) {
  //Array that holds the declared state value of 'input' which is the current state and 'setInput' which is a function that will update it.
  //
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //variable autoFocus stores the useRef hook
  const autoFocus = useRef(null);

  //Once the website is open, the useEffect hook allows for the input to be ready to type in without clicking on it.
  useEffect(() => {
    // autoFocus.current.focus();
    console.log(props.username);
  });

  //Function that sets the input to what the user adds/updates task from the list
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Attempted to construct a function where the id value of each task/list item constructed would be given in an increasing consecutive form
  // but it caused bugs to the removelistItem and updatelistItem function.

  // const [id, setId] = useState(1);
  // const giveId = () =>{
  //     setId(id + 1)
  //     return id;
  // }

  //Prevent webpage from refreshing when hitting the add task button aka prevents form returning to a default state
  const handleSubmit = (e) => {
    e.preventDefault();

    //Used this function instead where a random number is generated for the id of each task/item added to the array.
    //Causes no bugs.
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      time:
        new Date().getMonth() +
        1 +
        "/" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    });
    setInput("");
  };

  //Constructs the form depending if we are adding a task/item to the list or updating it.
  return (
    <div>
      {/*compare this with empty string localStorage.setItem("user", JSON.stringify(details.name)); */}
      {!localStorage.getItem("user") ? (
        <div>Please login to add tasks</div>
      ) : (
        <form onSubmit={handleSubmit} className="listItem-form">
          {props.edit ? (
            <div className="task-input-container">
              <div className="task-input">
                <input
                  placeholder="update your task"
                  value={input}
                  onChange={handleChange}
                  name="text"
                  ref={autoFocus}
                  className="listItem-input warning edit"
                />
              </div>
              <div>
                <button onClick={handleSubmit} className="listItem-button edit">
                  Update
                </button>
              </div>
            </div>
          ) : (
            <div className="task-input-container">
              <div className="task-input">
                <input
                  placeholder="drop off package, clean up room..."
                  value={input}
                  onChange={handleChange}
                  name="text"
                  ref={autoFocus}
                  className="listItem-input"
                />
              </div>
              <div>
                <button onClick={handleSubmit} className="listItem-button">
                  Add Task
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default TaskForm;
