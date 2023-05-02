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
    const {name} = e.target
    this.setState({
      [name]: this.state[name] - 1 ,
    });
  }

 

  render() {
    const { 
      handleSubmit, 
      handleDelete, 
      handleChange, 
      schools, 
      general, 
      exps, 
      handleAdd
      } = this.props

    const educationItems = schools.map(item => 
      <Education key={item.id}
        handleEdit={this.handleEdit}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleChange={handleChange}
        schools={item}
      />
    )

    const expItems = exps.map(item => 
      <Experience key={item.id}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleChange={handleChange}
        exps={item}
      />
      )
    return (
      <form >
        <fieldset className='form-per'>
          <legend>Personal</legend>
          <General 
            handleSubmit={ handleSubmit}
            handleChange={handleChange}
            general={general[0]}
          />
        </fieldset>
        <fieldset className='form-exp'>
          <legend>Experience</legend>
          {/* { [...Array(this.state.exCount)].map((_, i) => 
          <Experience key={i} 
            onButtonClicked={this.countDown}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            handleChange={handleChange}
            exps={exps[0]}
          />
          )} */}
          {expItems}
          <button className='btn-add' data-section="exps"name='exCount' onClick={handleAdd}> + </button>
        </fieldset>
        <fieldset className='form-edu'>
          <legend>Education</legend>
          <button className='btn-add' data-section="schools" name='edCount'onClick={handleAdd}> + </button>
          {educationItems}
        </fieldset>
        
        <button> Submit</button>
      </form>
    )
  }
}