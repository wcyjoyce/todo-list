import { FETCH_TASKS, DELETE_TASK } from "../actions/types.js";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS: {
      return action.payload;
    }
    case DELETE_TASK: {
      return state.filter(task => task._id !== action.payload);
    }
    default:
      return state;
  }
}

export default tasksReducer;
