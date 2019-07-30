import React, { Component } from "react";

class Task extends Component {
  renderStatus = status => {
    return status ? "Y" : "N"
  };

  render() {
    const { description, status, dateCreated, dateCompleted } = this.props.task;
    return (
      <tr className="task">
        <td>{description}</td>
        <td>{dateCreated}</td>
        <td>{dateCompleted}</td>
        <td>{this.renderStatus(status)}</td>
      </tr>
    );
  };
};

export default Task;
