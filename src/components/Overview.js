import React, { Component } from 'react';

export default class Overview extends Component {

  formatNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  splitItem(string) {
    return string.split('\n')
  }
  render() {
    const { schools, general, experience} = this.props
    
    return (
      <div className='overview'>
        {
          general.map(item => 
          <div key={item.id} className='overview-general'>
            <h1>{item.fName === ''? "Full Name": `${item.fName} ${item.lName}`}</h1>
            <h2>{item.pNumber === ''? "Phone Number": this.formatNumber(item.pNumber)}</h2> 
            <h2>{item.email === ''? "Email": item.email}</h2> 
            <h2>{item.website === '' && item.edit=== false? "Personal Website": item.website}</h2> 
          </div>)
        }
        {
          <div className='overview-exp'>
            <h1>Experience</h1>
            {experience.map((item, index ) => 
            <div key={item.id}className="item">
              <h2 className="item-header">{item.company === ''? "Company": item.company}</h2>
              <h2>{item.title === ''? "Position Title": item.title}</h2>
              <h2>{item.location === ''? "Location": item.location}</h2>
              <h2>{item.from === ''? "From": item.from}</h2>

              {item.resp === '' ? <h2>Responsibilities</h2> : this.splitItem(item.resp).map((item,index) => <li key={index}>{item}</li> )}
            </div>)}
          </div>
        }
        {
          <div className='overview-edu'>
            <h1>Education</h1>
            {schools.map((item, index ) => 
            <div key={item.id} className="item">
              <h2 className='item-header'>{item.school === ''? "School Name": item.school}</h2> 
              <h2>{item.major === ''? "Major": item.Major}</h2> 
              <h2>{item.year === ''? "Year": item.year}</h2> 
              <h2>{item.degree === ''? "Degree": item.Degree}</h2> 
            </div>)}
          </div>
        }
        
        
        
      </div>
      // general.map(item => <h1 key={item.id}>{item.fName}</h1>)
      
    )
  }
}