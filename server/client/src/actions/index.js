import axios from "axios";
import { FETCH_TASKS, DELETE_TASK } from "./types.js";

const base_url = "http://localhost:5000/api/tasks";

export function fetchTasks() {
  return function(dispatch) {
    axios.get(base_url)
      .then(response => dispatch({type: FETCH_TASKS, payload: response.data }));
  };
};

export function deleteTask(id) {
  return function(dispatch) {
    axios.delete(`${base_url}/${id}`)
      .then(response => dispatch({ type: DELETE_TASK, payload: id }));
  };
};
