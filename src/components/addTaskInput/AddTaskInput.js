import React from "react";

function AddTaskInput() {
  return (
    <div className="">
      <form className="w-full px-2">
        <input
          type="text"
          // value="Add a task"
          placeholder=" +   Add a task"
          className="w-full py-3 rounded-md px-4 bg-white bg-opacity-90 focus:outline-none hover:bg-opacity-100 focus:bg-opacity-100 shadow-lg shadow-secondary"
        />
      </form>
    </div>
  );
}

export default AddTaskInput;
