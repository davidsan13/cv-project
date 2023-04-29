import React, { Component } from "react";

import uniqid from 'uniqid';
import './styles.css';

export default class FormStates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: { 
        fName: "",
        lName: "",
        pNumber: "",
        email: "",
        website: "",
        id: uniqid()},
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
    }
  }
}