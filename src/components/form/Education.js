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



  toggleEdit = (e) => {
    this.setState(prevState => ({
     edit: !prevState.edit
    }))
  }

  
 
  render() {
    const {ed, edit, section} = this.state
    const {handleSubmit, onButtonClicked, handleDelete, schools, handleChange} = this.props
    
  
    return (
      <>
       
        <label htmlFor="School"> School</label>
        <input type="text" id="School" name="school" data-section="schools" placeholder="School" value={schools.school} onChange={(e) => handleChange(e, schools.id)} disabled={edit}/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" name="major" data-section="schools"  placeholder="Major" value={schools.major} onChange={(e) => handleChange(e, schools.id)} />
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" name="year" data-section="schools"  value={schools.year} placeholder="Graduation Year" onChange={(e) => handleChange(e, schools.id)}/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" name="degree" data-section="schools"  placeholder="Degree" value={schools.degree} onChange={(e) => handleChange(e, schools.id)}/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" name="awards" placeholder="Awards" /> 
        <div className='btns-container'>
          <button name='schools' data-section="schools" onClick={(e) => 
             handleDelete(e, schools.id)}>
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