import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const {edit} = this.props
    return (
      <button onClick={edit}> Edit</button>
    )
  }
}