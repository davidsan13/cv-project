import React, { Component } from "react";

export default class Save extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const {save} = this.props
    return (
      <button onClick={save}> Save</button>
    )
  }
}