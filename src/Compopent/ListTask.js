import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
    let tasks = useSelector(state => state);

    return (
        <div>
          {tasks.map(task => {
              return <Task key={task.id} task={task}/>
          })}
        </div>
    )
}

export default ListTask;