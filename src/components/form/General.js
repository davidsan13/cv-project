import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="fName"> First Name</label>
        <input type="text" id="fName" placeholder="First Name"/>
        <label htmlFor="lName"> Last Name</label>
        <input type="text" id="lName" placeholder="Last Name"/>
        <label htmlFor="pNumber"> Phone Number</label>
        <input type="text" id="pNumber" placeholder="Phone Number"/>
        <label htmlFor="email"> Email</label>
        <input type="text" id="email" placeholder="Email"/>
        <label htmlFor="website"> Personal Website</label>
        <input type="text" id="website" placeholder="Personal Website"/>
      </>
    )
  }
}