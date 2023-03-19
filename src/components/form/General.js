import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="fName"> First Name</label>
        <input type="text" id="fName" name="fName" placeholder="First Name" required/>
        <label htmlFor="lName"> Last Name</label>
        <input type="text" id="lName" name="lName" placeholder="Last Name" required/>
        <label htmlFor="pNumber"> Phone Number</label>
        <input type="text" id="pNumber" name="pNumber" placeholder="Phone Number"/>
        <label htmlFor="email"> Email</label>
        <input type="email" id="email" name="email" placeholder="Email"/>
        <label htmlFor="website"> Personal Website</label>
        <input type="text" id="website" name="website" placeholder="Personal Website"/>
      </>
    )
  }
}