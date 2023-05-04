import React, { Component } from "react";


export default class Education extends Component {
  
  render() {
    const {handleSubmit, onButtonClicked, handleDelete, schools, handleChange} = this.props
  
    return (
      <>
        <label htmlFor="School"> School</label>
        <input type="text" id="School" name="school" data-section="schools" placeholder="School" value={schools.school} onChange={(e) => handleChange(e, schools.id)} disabled={schools.edit}/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" name="major" data-section="schools"  placeholder="Major" value={schools.major} onChange={(e) => handleChange(e, schools.id)} disabled={schools.edit} />
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" name="year" data-section="schools"  value={schools.year} placeholder="Graduation Year" onChange={(e) => handleChange(e, schools.id)} disabled={schools.edit}/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" name="degree" data-section="schools"  placeholder="Degree" value={schools.degree} onChange={(e) => handleChange(e, schools.id)} disabled={schools.edit}/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" name="awards" placeholder="Awards" /> 
        <div className='btns-container'>
          <button name='schools' data-section="schools" onClick={(e) => 
             handleDelete(e, schools.id)}>
            Delete</button>
          <button name='edit' data-section='schools' onClick={(e) => {
            e.preventDefault(); 
            handleSubmit(e, schools.id)}}> 
            {schools.edit? "Edit": "Save"}
          </button>
        </div>
      </>
    )
  }
}