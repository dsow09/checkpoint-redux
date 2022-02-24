import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/action";

const completed = <span className="text-success">Complete 👌</span>
const incompleted = <span className="text-danger">Incomplete 👋</span>

function Task({task}) {
    let dispatch = useDispatch();
    const [editable, setEditable] = useState(false);

    return (
        <div>
            <div className="container overflow-hidden">
                <div className="row">
                    <div className="col-4">
                        <div className="p-5">
                            {
                                editable ? 
                                <h5>{task.description} :  {task.isDone ? incompleted : completed}</h5>
                                :
                                <h5>{task.description} :  {task.isDone ? completed : incompleted}</h5>
                            }
                           
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="p-5">
                            <button 
                                onClick={() => setEditable(!editable)} 
                                className="btn btn-primary w-100">
                                    Edit 
                            </button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="p-5 ">
                            <button 
                            className="btn btn-danger w-100"
                            onClick={() => dispatch(deleteTask(task.id))}>X</button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <div className="alert alert-primary" role="alert">
                    Filtrer : 
                </div>
                <button onClick={() =>  dispatch(editTask(!task.isDone))} className="btn btn-success m-4">Tache Complete</button>
                <button onClick={() => dispatch(editTask(task.isDone))} className="btn btn-danger m-4">Tache Incompleted</button>
            </div>
            </div>
        </div>
    )
}

export default Task;