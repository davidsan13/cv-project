
import './App.css';
import React, { Component } from "react";
import FormCon from './components/Form';
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: [],
      general: [],
      exps: [],
      
    };
  
    this.onSubmitTask = this.onSubmitTask.bind(this)
    this.delete = this.delete.bind(this)
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

  delete(e, id) {
    
    const {name} = e.target
    const array = name === 'exCount' ? 'exps' : 'schools'
    this.setState(prevState => {
        const newArray = prevState[array].filter(item => item.id !== id)
        return {...prevState, [array]: [...newArray]}
    })
    
    console.log(this.state.schools)
  }

  render() {
    const { general, exps, schools } = this.state
    return(
      <>
        <FormCon 
          handleSubmit={this.onSubmitTask}
          handleDelete={this.delete}
          schools={schools}
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
