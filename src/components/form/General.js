import React, { Component } from "react";
import uniqid from 'uniqid';
export default class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        fName: "",
        lName: "",
        pNumber: "",
        email: "",
        website: "",
        id: uniqid()
      },
      section: "general",
      edit: false,
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, general: {...prevState.general,[name]:value}
    }})
  }

  render() {
    const {general, section, edit} = this.state
    const {handleSubmit} = this.props
    return (
      <>
        <label htmlFor="fName"> First Name</label>
        <input type="text" id="fName" name="fName" value={general.fName} placeholder="First Name" onChange={this.handleChange} required/>
        <label htmlFor="lName"> Last Name</label>
        <input type="text" id="lName" name="lName" value={general.lName} placeholder="Last Name" onChange={this.handleChange} required/>
        <label htmlFor="pNumber"> Phone Number</label>
        <input type="text" id="pNumber" name="pNumber" value={general.pNumber} placeholder="Phone Number" onChange={this.handleChange}/>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" name="email" value={general.email} placeholder="Email" onChange={this.handleChange}/>
        <label htmlFor="website"> Personal Website</label>
        <input type="text" id="website" name="website" value={general.website} placeholder="Personal Website" onChange={this.handleChange}/>
        <button onClick={(e) => {
          e.preventDefault();
          !edit && handleSubmit(general,section, this.state)}}> 
          {edit? "Edit": "Save"}
        </button>
      </>
    )
  }
}