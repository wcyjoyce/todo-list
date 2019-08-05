import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteTask } from "../actions/index.js";

class Task extends Component {
  renderStatus = status => {
    return status ? "Y" : "N";
  };

  handleDelete = () => {
    this.props.deleteTask(this.props.task._id);
  };

  render() {
    const { description, status, deadline, dateCreated, dateCompleted } = this.props.task;

    return (
      <tr className="task">
        <td>{description}</td>
        <td>{dateCreated ? new Date(dateCreated).toLocaleDateString() : ""}</td>
        <td>{deadline ? new Date(deadline).toLocaleDateString() : ""}</td>
        <td>{dateCompleted ? new Date(dateCompleted).toLocaleDateString() : ""}</td>
        <td>{this.renderStatus(status)}</td>
        <td>Edit | <button onClick={this.handleDelete}>Delete</button></td>
      </tr>
    );
  };
};

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { deleteTask })(Task);
