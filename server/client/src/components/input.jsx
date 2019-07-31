import React, { Component } from "react";

class Input extends Component {
  state = { task: "" };

  handleUpdate = event => {
    this.setState({ task: event.target.value })
  };

  render() {
    return (
      <input
        value={this.state.task}
        type="text"
        placeholder="Add Task"
        className="form-control"
        onChange={this.handleUpdate}
        onKeyDown={this.props.handleSubmit}
      />
    );
  };
};

export default Input;
