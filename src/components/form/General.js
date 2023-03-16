import React, { Component } from "react";

export default class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Contact Information</legend>
        <label htmlFor="fName"> Full Name</label>
        <input type="text" id="fName"/>
        <label htmlFor="pNumber"> Phone Number</label>
        <input type="text" id="pNumber"/>
        <label htmlFor="email"> Email</label>
        <input type="text" id="email"/>
        <label htmlFor="website"> Personal Website</label>
        <input type="text" id="website"/>
      </fieldset>
    )
  }
}