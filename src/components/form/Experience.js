import React, { Component } from "react";
import uniqid from 'uniqid';

export default class Experience extends Component {

  render() {
    const {handleSubmit, handleDelete, handleChange, exps} = this.props

    return (
      <>
        <label htmlFor="company"> Company</label>
        <input type="text" id="company" name="company" data-section="exps" value={exps.company}  placeholder="Company" onChange={(e) => handleChange(e, exps.id)} disabled={exps.edit}/>
        <label htmlFor="location"> City</label>
        <input type="text" id="location" name="location" data-section="exps" value={exps.location} placeholder="City" onChange={(e) => handleChange(e, exps.id)} disabled={exps.edit}/>
        <label htmlFor="title"> Position Title</label>
        <input type="text" id="title" name="title" data-section="exps" value={exps.title} placeholder="Position Title" onChange={(e) => handleChange(e, exps.id)} disabled={exps.edit}/>
        <label htmlFor="Duration"> Duration</label>
        <input type="text" id="Duration" name="duration" placeholder="Duration" onChange={(e) => handleChange(e, exps.id)} disabled={exps.edit}/>
        <label htmlFor="resp"> Responsibilities</label>
        <textarea type="text" id="resp" name="resp" data-section="exps" value={exps.resp} placeholder="Responsibilities" onChange={(e) => handleChange(e, exps.id)} disabled={exps.edit}/>
        <div className='btns-container'>
          <button name='exps' type="submit" onClick={(e)=> handleDelete(e, exps.id)}> Delete</button>
          <button name='edit' data-section="exps" onClick={(e) => {
            e.preventDefault();
            handleSubmit(e,exps.id)
            }}> 
            {exps.edit? "Edit": "Save"}
          </button>
        </div>
      </>
    )
  }
}