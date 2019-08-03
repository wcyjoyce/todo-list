import React, { Component } from "react";
import { connect } from "react-redux";

import Task from "./task.jsx";
import { fetchTasks } from "../actions/index.js";

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  };

  render() {
    console.log(this.props.tasks);

    return (
      <table className="list table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date Created</th>
            <th>Deadline</th>
            <th>Date Completed</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.props.tasks.map(task => <Task key={task._id} task={task}/>)}</tbody>
      </table>
    );
  };
};

function mapStateToProps(state) {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { fetchTasks })(Tasks);
