import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./Constants/constants";

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}

export function editTask(task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}