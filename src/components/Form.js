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
    
      edCount: 1,
      exCount: 1,
    };
    this.countUp = this.countUp.bind(this)
    this.countDown = this.countDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
    

  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
 
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
    const { handleSubmit } = this.props
    return (
      <form >
        <fieldset>
          <legend>Personal</legend>
          <General 
            handleSubmit={ handleSubmit}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <button className='btn-add' name='edCount'onClick={this.countUp}> + </button>
          {[...Array(this.state.edCount)].map((_, i) => 
          <Education key={i} 
          onButtonClicked={this.countDown}
          handleEdit={this.handleEdit}
          handleSubmit={handleSubmit}/>
          )}
          
          
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          { [...Array(this.state.exCount)].map((_, i) => 
          <Experience key={i} 
          onButtonClicked={this.countDown}
          handleSubmit={handleSubmit}
          />
          )}
          <button name='exCount' onClick={this.countUp}> Add</button>
        </fieldset>
        <button> Submit</button>
      </form>
    )
  }
}