import React, { Component } from "react";
import Education from "./form/Education";
import General from "./form/General";
import Experience from "./form/Experience";
import uniqid from 'uniqid';
import './styles.css';

export default class FormCon extends Component {
  
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
        schools={item}/>
    )

    const expItems = exps.map(item => 
      <Experience key={item.id}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleChange={handleChange}
        exps={item}/>
      )

    const genItems = general.map(item => 
      <General key={item.id}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleChange={handleChange}
        general={item}
      />)
    return (
      <form >
        <fieldset className='form-per'>
          <legend>Personal</legend>
         {genItems}
        </fieldset>
        <fieldset className='form-exp'>
          <legend>Experience</legend>
          {expItems}
          <button className='btn-add' data-section="exps"name='exCount' onClick={handleAdd}> + </button>
        </fieldset>
        <fieldset className='form-edu'>
          <legend>Education</legend>
          <button className='btn-add' data-section="schools" name='edCount'onClick={handleAdd}> + </button>
          {educationItems}
        </fieldset>
      </form>
    )
  }
}