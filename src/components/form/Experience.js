import React, { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <legend>Experience</legend>
        <label htmlFor="title"> Position Title</label>
        <input type="text" id="title"/>
        <label htmlFor="company"> Company</label>
        <input type="text" id="company"/>
        <label htmlFor="Duration"> Duration</label>
        <input type="text" id="Duration"/>
        <label htmlFor="location"> City, State</label>
        <input type="text" id="location"/>
        <label htmlFor="resp"> Responsibilities</label>
        <input type="text" id="resp"/>
      </fieldset>
    )
  }
}