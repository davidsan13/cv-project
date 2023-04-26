import React, { Component } from "react";
import uniqid from 'uniqid';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      exp: {
        id: uniqid(),
        title: '',
        company: '',
        location: '',
        resp: '',
      },
      section: "exps",
      edit: false,
    }
  }

  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, exp: {...prevState.exp,[name]:value}
    }})
    
  }

  toggleEdit = (e) => {
    this.setState(prevState => ({
     edit: !prevState.edit
    }))
  }

  handleRes = () => {
    
    const respArray = this.state.exp.resp.split("\n")
    console.log(respArray)
  }
  render() {
    const {exp, section,edit} = this.state
    const {handleSubmit} = this.props
    return (
      <>
        <label htmlFor="title"> Position Title</label>
        <input type="text" id="title" name="title" value={exp.title} placeholder="Position Title" onChange={this.handleChange}/>
        <label htmlFor="company"> Company</label>
        <input type="text" id="company" name="company" value={exp.company}  placeholder="Company" onChange={this.handleChange}/>
        <label htmlFor="location"> City</label>
        <input type="text" id="location" name="location" value={exp.locatoin} placeholder="City" onChange={this.handleChange}/>
        <label htmlFor="Duration"> Duration</label>
        <input type="text" id="Duration" name="duration" placeholder="Duration" onChange={this.handleChange}/>
        <label htmlFor="resp"> Responsibilities</label>
        <textarea type="text" id="resp" name="resp" value={exp.resp} placeholder="Responsibilities" onChange={this.handleChange}/>
        <div className='btns-container'>
          <button name='exCount' type="submit"> Delete</button>
          <button onClick={(e) => {
            e.preventDefault();
            this.toggleEdit()
            console.log(edit)
            !edit && handleSubmit(exp,section, this.state)}}> 
            {edit? "Edit": "Save"}
          </button>
        </div>
        
        
      </>
    )
  }
}