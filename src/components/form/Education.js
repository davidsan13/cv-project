import React, { Component } from "react";
import uniqid from 'uniqid';
import Save from "./savBtn";
import Button from "./buttons";

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ed: {
        school: "",
        major: "", 
        year: "",
        degree: "",
        id: uniqid(), 
      },
      schools: [],
      edit: false,
    }
  }


  handleChange = (e) => {
    const {name, value} = e.target
    this.setState((prevState) => {
      return {...prevState, ed: {...prevState.ed,[name]:value}
    }})
  }

  sub = () => {
    this.setState((prevState) => {
      return {...prevState,ed: {
        school: "",
        major: "", 
        year: "",
        degree: "",
        id: uniqid(), 
      }
    }})
  }

  toggleEdit = (e) => {
    // e.preventDefault()
    // console.log(this.state.edit)
    this.setState(prevState => ({
      // edit: !prevState.edit,
      // id: prevState.id,
      // return {
      //   ...prevState,
      //   ed: {...prevState.ed, school: prevState.school}
      // }
     edit: !prevState.edit
    }))
    
    console.log(this.state.edit)
  }
  // onSubmitTask = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     schools: this.state.schools.concat(
  //       this.state.ed),
  //     school: "", major: "", year: "", degree: "", id: uniqid(),
  //   })
  //   // this.toggleEdit()
  //   console.log(this.state.ed)
  // }
  
  render() {
    const {ed, edit} = this.state
    const {submit, onButtonClicked} = this.props
  
    return (
      <form >
{/* onSubmit={(e) => {e.preventDefault(); submit(ed); this.toggleEdit()}} */}
        <label htmlFor="School"> School</label>
        <input type="text" id="School" name="school" placeholder="School" value={ed.school} onChange={this.handleChange} disabled={edit}/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" name="major" placeholder="Major" value={ed.major} onChange={this.handleChange} />
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" name="year" value={ed.year} placeholder="Graduation Year" onChange={this.handleChange}/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" name="degree" placeholder="Degree" value={ed.degree} onChange={this.handleChange}/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" name="awards" placeholder="Awards" /> 
        <button onClick={onButtonClicked}>Delete</button>
      
        {!edit? (
          <button onClick={(e) => {e.preventDefault(); this.toggleEdit()}}> Edit</button>)
        : (<button type="submit" onClick={(e) => {e.preventDefault(); this.toggleEdit(); submit(e,ed); }}>Save</button>
        )}
        {/* {!edit? (
          <Button edit={this.toggleEdit}/>
         )
        : (<Save save={submit}/>
        )} */}
        
     
      </form>
    )
  }
}