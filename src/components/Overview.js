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
          {
            general.map(item => 
            <div key={item.id} className='overview-general'>
              {item.fName === '' ? <h1>Full Name</h1> : <h1>{item.fName} {item.lName}</h1>} 
              {item.pNumber === '' ? <h2>Phone Number</h2> : <h2> {this.formatNumber(item.pNumber)}</h2>}
              {item.email === '' ? <h2>Email</h2> : <h2> {item.email}</h2>}
              {item.website === '' ? <h2>Personal Website</h2> : <h2> {item.website}</h2>}
            </div>)
          }
         {
            <div className='overview-exp'>
              <h1>Experience</h1>
              {experience.map((item, index ) => 
              <div key={item.id}className="exp">
                {item.company === '' ? <h2>Company</h2>:<h2> {item.company}</h2>}
                {item.title === '' ? <h2>Position Title</h2>:<h2> {item.title}</h2>}
                {item.location === '' ? <h2>Location</h2>:<h2> {item.Location}</h2>}
              </div>)}
            </div>
          }
       
        {schools.length === 0 ?
          <div className='overview-edu'>
          <h1 className="education">Education</h1>
          <div className="edu">
              <h2 className="education-school">School Name</h2>
              <h2 className="education-major">Major</h2>
              <h2 className="education-grad">Graduation Year</h2>
              <h2 className="education-degree">Degree</h2>
            </div>
          </div> :
          <div className='overview-edu'>
            <h1>Education</h1>
            {schools.map((item, index ) => 
            <div key={item.id}className="edu">
              {item.school === '' ? <h2>School Name</h2>: <h2> {item.school}</h2>}
              {item.major === '' ? <h2>Major</h2>: <h2> {item.major}</h2>}
              {item.year === '' ? <h2>Year</h2>: <h2> {item.year}</h2>}
              {item.degree === '' ? <h2>Degree</h2>: <h2> {item.Degree}</h2>}
            </div>)}
          </div>
        }
        
        
        
      </div>
      // general.map(item => <h1 key={item.id}>{item.fName}</h1>)
      
    )
  }
}