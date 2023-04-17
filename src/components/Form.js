import React, { Component } from "react";
import Education from "./form/Education";
import General from "./form/General";
import Experience from "./form/Experience";
import uniqid from 'uniqid';


export default class FormCon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      schools: [],
      // edit: false,
      edcount: 1,
      excount: 1,
    };
    
    this.edCountUp = this.edCountUp.bind(this);
    this.edCountDown = this.edCountDown.bind(this)
    this.exCountUp = this.exCountUp.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
 
  }
  handleMajor = (e) => {
    this.setState({
      education: {
        major: e.target.value
      },
      
    })
  }

  onSubmitTask = (e, ed) => {
    e.preventDefault()
    this.setState({
      schools: this.state.schools.concat(
        ed),
    })
    // this.toggleEdit()
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
          // handleChange={this.handleChange}
          // ed={this.state.ed}
        
          edit={this.state.edit}
          submit={this.onSubmitTask}
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