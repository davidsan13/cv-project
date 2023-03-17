import React, { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor="title"> Position Title</label>
        <input type="text" id="title" placeholder="Position Title"/>
        <label htmlFor="company"> Company</label>
        <input type="text" id="company" placeholder="Company"/>
        <label htmlFor="location"> City</label>
        <input type="text" id="location" placeholder="City"/>
        <label htmlFor="Duration"> Duration</label>
        <input type="text" id="Duration" placeholder="Duration"/>
        <label htmlFor="resp"> Responsibilities</label>
        <textarea type="text" id="resp" placeholder="Responsibilities"/>
      </>
    )
  }
}