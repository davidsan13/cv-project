import React, { Component } from 'react';

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education, general, experience} = this.props
    return (
      <div className='overview'>
        <div className='overview-general'>
          {general.length === 0 ? <h1>Full Name</h1> : general.map(item => <h1 key={item.id}>{item.fName} {item.lName}</h1>)}
          <h2>Phone Number</h2>
          <h2>Email</h2>
          <h2>Personal Website</h2>
        </div>
        
        <h1>Experience</h1>
        <h2>Company</h2>
        <h2>Position Title</h2>
        <h2>Location</h2>
        <h2>Duration</h2>
        <h1 className="education">Education</h1>
        <h2 className="education-school">School Name</h2>
        <h2 className="education-major">Major</h2>
        <h2 className="education-grad">Graduation Year</h2>
        <h2 className="education-degree">Degree</h2>
        
      </div>
      // general.map(item => <h1 key={item.id}>{item.fName}</h1>)
      
    )
  }
}