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

  upperString(string) {
    const arr = string.toLowerCase().split(' ')
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2= arr.join(' ');
    return str2
  }
  render() {
    const { schools, general, experience} = this.props
    
    return (
      <div className='overview'>
        {
          general.map(item => 
            
          <div key={item.id} className='overview-general'>
             {console.log(this.upperString(item.fName))}
            <h1>{item.fName === ''? "Full Name": `${this.upperString(item.fName)} ${this.upperString(item.lName)}`}</h1>
            <h2>{item.pNumber === ''? "Phone Number": this.formatNumber(item.pNumber)}</h2> 
            <h2>{item.email === ''? "Email": item.email}</h2> 
            <h2>{item.website === '' && item.edit=== false ? "Personal Website": item.website}</h2> 
          </div>)
        }
        {
          <div className='overview-exp'>
            <h1>Experience</h1>
            {experience.map((item, index ) => 
            <div key={item.id}className="item">
              <div className='company-title'>
                <h2 className="item-header">{item.company === ''? "Company": this.upperString(item.company)}</h2>
                <h2>{item.title === ''? "Position Title": item.title}</h2>
              </div>
              <div className='duration'>
                <h2>{item.from === ''? "From": item.from}</h2>
                {item.to !== '' && <h2>-</h2>}
                <h2>{item.to === ''&& item.edit=== false ? 'To' : item.to}</h2>
              </div>
              <h2>{item.location === ''? "Location": this.upperString(item.location)}</h2>
              {item.resp === '' ? <h2>Responsibilities</h2> : this.splitItem(item.resp).map((item,index) => <li key={index}>{item}</li> )}
            </div>)}
          </div>
        }
        {
          <div className='overview-edu'>
            <h1>Education</h1>
            {schools.map((item, index ) => 
            <div key={item.id} className="item">
              <h2 className='item-header'>{item.school === ''? "School Name": this.upperString(item.school)}</h2> 
              <h2>{item.major === ''? "Major": this.upperString(item.Major)}</h2> 
              <h2>{item.year === ''? "Year": item.year}</h2> 
              <h2>{item.degree === ''? "Degree": this.upperString(item.Degree)}</h2> 
            </div>)}
          </div>
        }
        
        
        
      </div>
      // general.map(item => <h1 key={item.id}>{item.fName}</h1>)
      
    )
  }
}