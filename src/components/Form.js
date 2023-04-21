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
      general: [],
      edcount: 1,
      excount: 1,
    };
    
    this.edCountUp = this.edCountUp.bind(this);
    this.edCountDown = this.edCountDown.bind(this)
    this.exCountUp = this.exCountUp.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.onSubmitTask = this.onSubmitTask.bind(this)
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
 
  }
  
  onSubmitTask = (item, section,) => {
    const result = this.state[section].filter(school => school.id === item.id)

    this.setState(prevState => {
      const newArray = []
      for(let i = 0; i < prevState[section].length; i++) {
        const currentItem = prevState[section][i]
        if(currentItem.id === item.id) {
          const updatedSchools = item
          newArray.push(updatedSchools)
        } else {
          newArray.push(currentItem)
        }
      }
      return {
        [section]: result.length > 0 ? 
        newArray : 
        this.state[section].concat(item)
      }
    })
    console.log(this.state.general)
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
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <General 
            handleSubmit={this.onSubmitTask}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {[...Array(this.state.edcount)].map((_, i) => 
          <Education key={i} 
          onButtonClicked={this.edCountDown}
          handleEdit={this.handleEdit}
          submit={this.onSubmitTask}/>
          )}
          
          <button onClick={this.edCountUp}> Add</button>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          { [...Array(this.state.excount)].map((_, i) => 
          <Experience key={i} 
          onButtonClicked={this.exCountDown}/>
          )}
          <button onClick={this.exCountUp}> Add</button>
        </fieldset>
        <button> Submit</button>
      </form>
    )
  }
}