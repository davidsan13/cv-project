import React, { Component } from "react";
import uniqid from 'uniqid';
export default class General extends Component {

  render() {
    const {handleSubmit, handleChange, general} = this.props
    return (
      <>
        <label htmlFor="fName"> First Name</label>
        <input type="text" id="fName" name="fName" data-section="general" value={general.fName} placeholder="First Name" onChange={(e) => handleChange(e, general.id)} disabled={general.edit} required/>
        <label htmlFor="lName"> Last Name</label>
        <input type="text" id="lName" name="lName" data-section="general" value={general.lName} placeholder="Last Name" onChange={(e) => handleChange(e, general.id)} disabled={general.edit} required/>
        <label htmlFor="pNumber"> Phone Number</label>
        <input type="tel" id="pNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"name="pNumber" data-section="general" value={general.pNumber} placeholder="Phone Number" onChange={(e) => handleChange(e, general.id)} disabled={general.edit}/>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" name="email" data-section="general" value={general.email} placeholder="Email" onChange={(e) => handleChange(e, general.id)} disabled={general.edit}/>
        <label htmlFor="website"> Personal Website</label>
        <input type="text" id="website" name="website" data-section="general" value={general.website} placeholder="Personal Website" onChange={(e) => handleChange(e, general.id)} disabled={general.edit}/>
        <button name='edit' data-section="general" onClick={(e) => {
          e.preventDefault();
          handleSubmit(e, general.id)}}>
          {general.edit? "Edit": "Save"}
        </button>
      </>
    )
  }
}