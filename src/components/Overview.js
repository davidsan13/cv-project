import React, { Component } from 'react';

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  formatNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }
  render() {
    const { schools, general, experience} = this.props
    return (
      <div className='overview'>
          {general.length === 0 ? 
            <div className='overview-general'>
              <h1>Full Name</h1> 
              <h2>Phone Number</h2>
              <h2>Email</h2>
              <h2>Personal Website</h2>
            </div> : 
            general.map(item => 
            <div key={item.id} className='overview-general'>
              <h1>{item.fName} {item.lName}</h1>
              <h2> {this.formatNumber(item.pNumber)}</h2>
              <h2> {item.email}</h2>
              <h2> {item.website}</h2>
            </div>)
          }
          {experience.length === 0 ?
             <div className='overview-exp'>
              <h1>Experience</h1>
              <h2>Company</h2>
              <h2>Position Title</h2>
              <h2>Location</h2>
              <h2>Duration</h2>
            </div> :
            <div className='overview-exp'>
              <h1>Experience</h1>
              {experience.map((item, index ) => 
              <div key={item.id}className="exp">
                <h2> {item.company}</h2>
                <h2> {item.title}</h2>
                <h2> {item.location}</h2>
              </div>)}
            </div>
          }
       
        <div className='overview-edu'>
          <h1 className="education">Education</h1>
          <h2 className="education-school">School Name</h2>
          <h2 className="education-major">Major</h2>
          <h2 className="education-grad">Graduation Year</h2>
          <h2 className="education-degree">Degree</h2>
        </div>
        
        
      </div>
      // general.map(item => <h1 key={item.id}>{item.fName}</h1>)
      
    )
  }
}