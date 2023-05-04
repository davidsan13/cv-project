
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
        edit: false,
        }
      ],
      exps: [
        {
          id: uniqid(),
          title: '',
          company: '',
          location: '',
          from: '',
          to: '',
          resp: '',
          edit: false,
        }
      ],
      schools: [
        {
          school: "",
          major: "", 
          year: "",
          degree: "",
          id: uniqid(),
          edit: false,
        }
      ],
      
    };
  
    this.onSubmitTask = this.onSubmitTask.bind(this)
    this.delete = this.delete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  onSubmitTask = (e,id) => {
    const {name} = e.target
    const {section} = e.target.dataset
    this.setState((prevState) => {
      const newItem = prevState[section].map(item => {
        console.log(item.edit)
        if(item.id === id) {
          return {...item, [name]: !item.edit}
          
        }
        return item
      }) 
      return {...prevState, [section]: [...newItem] }
    })
    console.log(this.state.schools[0])
  }
  // onSubmitTask = (item, section) => {
    
  // }

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
  }


  handleAdd = (e) => {
    const {section} = e.target.dataset
    this.setState(prevState => (
      section === 'schools' ?
      {
        schools: [
        ...prevState.schools,
        {
          school: "",
          major: "", 
          year: "",
          degree: "",
          id: uniqid(),
        }
      ]} :
      {
        exps: [
          ...prevState.exps,
          {
            id: uniqid(),
            title: '',
            company: '',
            location: '',
            resp: '',
          }
        ]
      }
    ))
    console.log(this.state.exps)
  }
  delete(e, id) {
    const {name} = e.target
    // const {section} = e.target.dataset
    this.setState(prevState => {
        const newArray = prevState[name].filter(item => item.id !== id)
        return {...prevState, [name]: [...newArray]}
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
        <Overview 
          general={general}
          experience={exps}
          schools={schools}
        
        />
      </>
      
    )
  }
}

export default App;
