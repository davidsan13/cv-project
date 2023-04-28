import React, { Component } from "react";
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ed: {
        school: "",
        major: "", 
        year: "",
        degree: "",
        id: uniqid(), 
      },
      section: "schools",
      edit: false,
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
  }

  toggleEdit = (e) => {
    this.setState(prevState => ({
     edit: !prevState.edit
    }))
  }

  
 
  render() {
    const {ed, edit, section} = this.state
    const {handleSubmit, onButtonClicked, handleDelete} = this.props
    
  
    return (
      <>
        <label htmlFor="School"> School</label>
        <input type="text" id="School" name="school" placeholder="School" value={ed.school} onChange={this.handleChange} disabled={edit}/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" name="major" placeholder="Major" value={ed.major} onChange={this.handleChange} />
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" name="year" value={ed.year} placeholder="Graduation Year" onChange={this.handleChange}/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" name="degree" placeholder="Degree" value={ed.degree} onChange={this.handleChange}/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" name="awards" placeholder="Awards" /> 
        <div className='btns-container'>
          <button name='edCount' onClick={(e) => 
            {e.preventDefault(); onButtonClicked(e); handleDelete(e, ed.id)}}>
            Delete</button>
          <button onClick={(e) => {
            e.preventDefault(); 
            this.toggleEdit(); 
            !edit && handleSubmit(ed,section, this.state)}}> 
            {edit? "Edit": "Save"}
          </button>
        </div>
        
      </>
    )
  }
}