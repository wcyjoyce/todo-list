import axios from "axios";
import { FETCH_TASKS } from "./types.js";

const base_url = "http://localhost:5000"

export function fetchTasks() {
  return function(dispatch) {
    axios.get(`${base_url}/api/tasks`)
      .then(response => dispatch({type: FETCH_TASKS, payload: response.data }));
  };
};
