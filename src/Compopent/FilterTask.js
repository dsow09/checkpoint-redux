import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action";

const FilterTask = ({task}) => {
    let dispatch = useDispatch();
    return (
        <>
            <div className="text-center">
                <div class="alert alert-primary" role="alert">
                    Filter : 
                </div>
                <button onClick={() => dispatch(editTask(task))} className="btn btn-success m-4">Completed</button>
                <button onClick={() => alert('incompleted')} className="btn btn-danger m-4">Incompleted</button>
            </div>
        </>
    )
}

export default FilterTask;