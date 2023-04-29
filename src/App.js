
import './App.css';
import React, { Component } from "react";
import FormCon from './components/Form';
import Overview from './components/Overview'
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: [
        { 
        fName: "",
        lName: "",
        pNumber: "",
        email: "",
        website: "",
        id: uniqid(),
        }
      ],
      exps: [
        {
          id: uniqid(),
          title: '',
          company: '',
          location: '',
          resp: '',
        }
      ],
      schools: [
        {
          school: "",
          major: "", 
          year: "",
          degree: "",
          id: uniqid(),
        }
      ],
      
    };
  
    this.onSubmitTask = this.onSubmitTask.bind(this)
    this.delete = this.delete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  onSubmitTask = (item, section) => {
    const result = this.state[section].filter(school => school.id === item.id)

    this.setState(prevState => {
      const newArray = []
      for(let i = 0; i < prevState[section].length; i++) {
        const currentItem = prevState[section][i]
        if(currentItem.id === item.id) {
          const updatedSchools = item
          newArray.push(updatedSchools)
        } else {
          newArray.push(currentItem)
        }
      }
      return {
        [section]: result.length > 0 ? 
        newArray : 
        this.state[section].concat(item)
      }
    })
    console.log(this.state.schools)
  }

  handleChange = (e, id) => {
    const {name, value} = e.target
    const {section} = e.target.dataset
    this.setState((prevState) => {
      const newItem = prevState[section].map(item => {
        if(item.id === id) {
          return {...item, [name]: value}
          
        }
        return item
      }) 
      return {...prevState, [section]: [...newItem] }
    })
    console.log(this.state.general)
  }

  handleAdd = (e) => {
    const {section} = e.target.dataset
    this.setState(prevState => ({
      schools: [
        ...prevState.schools,
        {
          school: "",
          major: "", 
          year: "",
          degree: "",
          id: uniqid(),
        }
      ]
    }))
    console.log(this.state.schools)
  }
  delete(e, id) {
    const {name} = e.target
    // const {section} = e.target.dataset
    const array = name === 'exCount' ? 'exps' : 'schools'
    this.setState(prevState => {
        const newArray = prevState[array].filter(item => item.id !== id)
        return {...prevState, [array]: [...newArray]}
    })
  }


  render() {
    const { general, exps, schools } = this.state
    return(
      <>
        <FormCon 
          handleSubmit={this.onSubmitTask}
          handleDelete={this.delete}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          schools={schools}
          general={general}
          exps={exps}
          
        
        />
        {/* <Overview 
          general={general}
          experience={exps}
          schools={schools}
        
        /> */}
      </>
      
    )
  }
}

export default App;
