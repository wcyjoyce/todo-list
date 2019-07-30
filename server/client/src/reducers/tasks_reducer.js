import { FETCH_TASKS } from "../actions/types.js";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TASKS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default tasksReducer;
