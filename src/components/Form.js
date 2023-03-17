import React, { Component } from "react";
import Education from "./form/Education";
import General from "./form/General";
import Experience from "./form/Experience";


export default class FormCon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edcount: 1,
      excount: 1,
    };
    
    this.edCountUp = this.edCountUp.bind(this);
    this.edCountDown = this.edCountDown.bind(this)
    this.exCountUp = this.exCountUp.bind(this);
  }

  edCountUp(e) {
    e.preventDefault()
    this.setState({
      edcount: this.state.edcount + 1,
    });
  }
  edCountDown(e) {
    e.preventDefault()
    this.setState({
      edcount: this.state.edcount - 1,
    });
  }
  exCountUp(e) {
    e.preventDefault()
    this.setState({
      excount: this.state.excount + 1,
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Personal Information</legend>
          <General />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          { [...Array(this.state.edcount)].map((_, i) => <Education keys={i} onButtonClicked={this.edCountDown}/>) }
          
          <button onClick={this.edCountUp}> Add</button>
          <p>{this.state.edcount}</p>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          <Experience/>
         
          <button onClick={this.exCountUp}> Add</button>
          <p>{this.state.excount}</p>
        </fieldset>
      </form>
    )
  }
}