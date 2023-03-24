import React, { Component } from "react";
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqid(),
      school: '',
      major: '',
      year: '',
      degree: '',
      award: '',
      schools: [],
      edit: false,
    }
  }
  handleChange = (e) => {
    this.setState({
        school: e.target.value
    })
  }

  handleMajor = (e) => {
    this.setState({
      major: e.target.value
    })
  }

  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }

  handleDegree = (e) => {
    this.setState({
      degree: e.target.value
    })
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }))
  }
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      schools: this.state.schools.concat({
        id: this.state.id,

        school: this.state.school, 
        major: this.state.major,
        year: this.state.year,
        degree: this.state.degree
      }),
      school: "", major: "", year: "", degree: "", id: uniqid(),
    })
    this.toggleEdit()
    console.log(this.state.schools)
  }
  
  render() {
    const {onButtonClicked, school, major, year, degree, schools} = this.state
    // const {keys} = this.props
    return (
      <form onSubmit={this.onSubmitTask}>

        <label htmlFor="School"> School</label>
        <input type="text" id="School" name="school" placeholder="School" value={school} onChange={this.handleChange}/>
        <label htmlFor="Major"> Major</label>
        <input type="text" id="Major" name="major" placeholder="Major" value={major} onChange={this.handleMajor} />
        <label htmlFor="Year"> Graduation Year</label>
        <input type="text" id="Year" name="year" value={year} placeholder="Graduation Year" onChange={this.handleYear}/>
        <label htmlFor="Degree"> Degree</label>
        <input type="text" id="Degree" name="degree" placeholder="Degree" value={degree} onChange={this.handleDegree}/>
        <label htmlFor="Awards"> Awards</label>
        <input type="text" id="Awards" name="awards" placeholder="Awards" />
        <button onClick={onButtonClicked}>Delete</button>
        <button type="submit">Save</button>
        <ul>
          
          {/* {schools.map((item) => {
            return (<><li> {item} </li></>)
          })} */}
        </ul>
      </form>
    )
  }
}