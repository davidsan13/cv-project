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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      education: {
        school: e.target.value
      }
    })
  }

  handleMajor = (e) => {
    this.setState({
      education: {
        major: e.target.value
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(this.state.schools)
    this.setState({
      schools: this.state.schools.concat(this.state.education),
      education: {school: "", major: ""}
    })
    console.log(this.state.schools)

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
  exCountDown(e) {
    e.preventDefault()
    this.setState({
      excount: this.state.excount - 1,
    });
  }

  render() {
    return (
      <>
        <fieldset>
          <legend>Personal Information</legend>
          <General />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {[...Array(this.state.edcount)].map((_, i) => 
          <Education key={i} 
          onButtonClicked={this.edCountDown} 
        
          />
          )}
          
          <button onClick={this.edCountUp}> Add</button>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          { [...Array(this.state.excount)].map((_, i) => <Experience key={i} onButtonClicked={this.exCountDown}/>) }

         
          <button onClick={this.exCountUp}> Add</button>
          
        </fieldset>
      </>
    )
  }
}