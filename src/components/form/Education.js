import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <legend>Education</legend>
        <label htmlFor="School"> School</label>
        <input type="text" id="School"/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major"/>
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year"/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree"/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards"/>
      </fieldset>
    )
  }
}