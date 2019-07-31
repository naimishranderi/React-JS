import React, { Component } from "react";
import { returnStatement } from "@babel/types";

class Counter extends Component {
  state = {
    name: "Naimish"
  };
  render() {
    //return (  );
    return (
      <React.Fragment>
        <h1> {this.state.name} </h1>
        <button>Submit</button>
      </React.Fragment>
    );
  }
}

export default Counter;
