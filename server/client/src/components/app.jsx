import React, { Component } from "react";

import Tasks from "./tasks.jsx";
import Input from "./input.jsx";

class App extends Component {
  handleSubmit = event => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    };
  };

  render() {
    return (
      <div className="app">
        <h1>Tasks</h1>
        <Input handleSubmit={this.handleSubmit} />
        <Tasks />
      </div>
    );
  };
};

export default App;
