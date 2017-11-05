/*jshint esversion: 6*/

import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { loadClockedInEmployees } from '../../action';
import './styles.css';

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      employeeId : "",
      employeeName : "",
      jobCode: "prep",
      storeNumber : "",
      date: "2017-01-01",
      inTime : null,
      outTime:null,
      error: ""
    };
  }

  componentWillMount(){
    fetch('/api/timecards/clockedIn', {
      method: "GET",
      credentials: "include"
    }).then((response) =>{
      return response.json()
    }).then((data) =>{
      console.log(data)
    })
  }

  //on mount need to get all employees from reducers

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.clockIn(this.state)
  }

  handleEmployeeNameChange = (event) =>{
    console.log(this.state)
    let clockInTime = new Date()
    this.setState({
      employeeName: event.target.value,
      date : ("" + clockInTime.getFullYear()) + "" +("0" + clockInTime.getDate()).slice(-2) + "" + ("0" + (clockInTime.getMonth() + 1)).slice(-2),
      inTime : ("0" + clockInTime.getHours()).slice(-2) + "" + ("0" + clockInTime.getMinutes()).slice(-2)
    })
  }

  handleStoreNumberChange = (event) => {
    console.log(this.state)
    let clockInTime = new Date()
    this.setState({
      storeNumber: event.target.value,
     /* date : ("" + clockInTime.getFullYear()) + "-" +("0" + clockInTime.getDate()).slice(-2) + "-" + ("0" + (clockInTime.getMonth() + 1)).slice(-2),*/
      inTime : ("0" + clockInTime.getHours()).slice(-2) + "" + ("0" + clockInTime.getMinutes()).slice(-2)
    })
  }

  clearState() {
    this.setState({
      employeeName: "",
      storeNumber: ""
    })
  }

  clockIn(employeeInformation){
    //If employee name is not in reducers(clocked in employees)

    //Else clock out function
    console.log(employeeInformation)
    return fetch('/api/timecards', {
      method: "POST",
      credentials : "include",
      headers:
        {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      body : JSON.stringify(employeeInformation)
    }).then((response) =>{
      return(response.json())
    }).then(data =>{


      //action add employee to reducers
      this.props.loadClockedInEmployees(data.id)
      console.log(data);
    })
  }

  render() {
    console.log(this.props.clockedInEmployees);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clock In</h1>
        </header>
      <div className = "clock in form">
        <form onSubmit = {this.handleSubmit} className = "clockInForm">
          <input className = "employeeName" type="text" placeholder = "Employee Name" value = {this.employeeName} onChange = {this.handleEmployeeNameChange} />
          <input className = "storeNumber" type="number" placeholder = "storeNumber" value = {this.storeNumber} onChange = {this.handleStoreNumberChange} />
          <button className="button" type="submit">
            Clock In
          </button>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clockedInEmployees : state.clockedInEmployees
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadClockedInEmployees: clockedInEmployees =>{
      dispatch(loadClockedInEmployees(clockedInEmployees))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);


export default ConnectedApp;
