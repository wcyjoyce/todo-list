import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Tasks from "./tasks.jsx";
import New from "./new.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Tasks} />
          <Route path="/new" component={New} />
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
