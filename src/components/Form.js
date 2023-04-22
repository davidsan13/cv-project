import React, { Component } from "react";
import Education from "./form/Education";
import General from "./form/General";
import Experience from "./form/Experience";
import uniqid from 'uniqid';
import './styles.css';

export default class FormCon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: [],
      general: [],
      exps: [],
      edCount: 1,
      exCount: 1,
    };
    this.countUp = this.countUp.bind(this)
    this.countDown = this.countDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmitTask = this.onSubmitTask.bind(this)

  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
 
  }
  
  onSubmitTask = (item, section) => {
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
    console.log(this.state.exps)
  }

 
  countUp(e) {
    e.preventDefault()
    const {name} = e.target
    this.setState({
      [name]: this.state[name] + 1 ,
    });
  }
 
  countDown(e) {
    e.preventDefault()
    const {name} = e.target
    this.setState({
      [name]: this.state[name] - 1 ,
    });
  }

 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Personal</legend>
          <General 
            handleSubmit={this.onSubmitTask}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {[...Array(this.state.edCount)].map((_, i) => 
          <Education key={i} 
          onButtonClicked={this.countDown}
          handleEdit={this.handleEdit}
          submit={this.onSubmitTask}/>
          )}
          
          <button name='edCount'onClick={this.countUp}> Add</button>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          { [...Array(this.state.exCount)].map((_, i) => 
          <Experience key={i} 
          onButtonClicked={this.countDown}
          handleSubmit={this.onSubmitTask}
          />
          )}
          <button name='exCount' onClick={this.countUp}> Add</button>
        </fieldset>
        <button> Submit</button>
      </form>
    )
  }
}