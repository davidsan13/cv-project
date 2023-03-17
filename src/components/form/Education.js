import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onButtonClicked} = this.props
    const {keys} = this.props
    return (
      <>
        <label htmlFor="School"> School</label>
        <input type="text" id="School" placeholder="School"/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" placeholder="Major"/>
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" placeholder="Graduation Year"/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" placeholder="Degree"/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" placeholder="Awards"/>
        <button onClick={onButtonClicked}>Delete</button>
      </>
    )
  }
}