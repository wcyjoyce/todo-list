import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/app.jsx";
import "./stylesheets/application.scss";

import tasksReducer from "./reducers/tasks_reducer.js";

const reducers = combineReducers({
  tasks: tasksReducer
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
