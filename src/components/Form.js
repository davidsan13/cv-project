import React, { Component } from "react";
import Education from "./form/Education";
import General from "./form/General";
import Experience from "./form/Experience";


export default class FormCon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <Education/>
        <General/>
        <Experience/>
      </form>
    )
  }
}