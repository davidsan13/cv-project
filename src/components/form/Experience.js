import React, { Component } from "react";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label htmlFor="title"> Position Title</label>
        <input type="text" id="title" name="title" placeholder="Position Title"/>
        <label htmlFor="company"> Company</label>
        <input type="text" id="company" name="company" placeholder="Company"/>
        <label htmlFor="location"> City</label>
        <input type="text" id="location" name="location" placeholder="City"/>
        <label htmlFor="Duration"> Duration</label>
        <input type="text" id="Duration" name="duration" placeholder="Duration"/>
        <label htmlFor="resp"> Responsibilities</label>
        <textarea type="text" id="resp" name="resp" placeholder="Responsibilities"/>
        <button type="submit"> Delete</button>
      </>
    )
  }
}