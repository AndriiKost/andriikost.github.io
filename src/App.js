import React, { Component } from 'react';
import './App.css';

let interval;

class App extends Component {
  state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: false
  }

startTime = (action) => {

  this.setState({timer: true})
  
    interval = setInterval(() => {
      if (this.state.minutes === 60) {
        this.setState({
          minutes: 0,
          hours: this.state.hours + 1
        })
      } 
      if (this.state.seconds === 60) {
        this.setState({
          seconds: 0,
          minutes: this.state.minutes + 1
        })
      } 
      if (this.state.seconds <= 60) {
       this.setState({seconds: this.state.seconds + 1})
      } 
      
    }, 1)
}

stopTime = () => {
  this.setState({
    minutes: 0,
    seconds: 0,
    hours: 0,
    timer: false
  })
  clearInterval(interval)
}

  render() {
    return (
      <div className="App">
        <h2> Best Timer For Study </h2>
        <p>It will help you to track time, concentrate and take a breaks</p>
        <div className="Timer">
          <span>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
          <ul>
            <li><button onClick={this.state.timer ? null : this.startTime}>START</button></li>
            <li><button onClick={this.stopTime}>STOP</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
