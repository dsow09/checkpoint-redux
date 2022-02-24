import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./Constants/constants";
import { tasks } from "./states";

export let reducer = (state = tasks, action) => {
    let task;
    switch (action.type) {
        case ADD_TASK:
            task = [...state];
            task.push(action.payload);
            return task;

        case EDIT_TASK:
            task = [...state];
            task = task.filter(task => task === action.payload);
            return task;
            
        case DELETE_TASK:
            task = [...state];
            task = task.filter(task => task.id !== action.payload);

            return task;
    
        default:
            return state;
    }
}