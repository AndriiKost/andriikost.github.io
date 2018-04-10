import React, { Component } from 'react';
import './App.css';

// import MusicPlayer from './components/MusicPlayer';

let interval;

class App extends Component {
  state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: false,
      chill: false,
      motivation: false
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
      if (this.state.minutes === 60) {
        this.setState({
          chill: false,
          motivation: true})
        setTimeout(() => { 
          this.setState({motivation: false})
         }, 30000);
      }
      if (this.state.minutes === 45) {
        this.setState({chill: true})
      }
    }, 1000)
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
    const videoPlayer = <iframe title="Take a brake" width="420" height="345" src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameBorder="0" allowFullScreen></iframe>;
    const motivationVideo = <iframe title="1 better than 0" width="560" height="315" src="https://www.youtube.com/embed/_Y_3euC4kxA?autoplay=1" frameBorder="0" allowFullScreen></iframe>;
    
    return (
      <div className="App">
        <h2> Best Timer For Study </h2>
        <p>It will help you to track time, concentrate and take a breaks</p>
        <div className="Timer">
          <span>{this.state.hours.toString().length === 1 ? '0' + this.state.hours : this.state.hours}:{this.state.minutes.toString().length === 1 ? '0' + this.state.minutes : this.state.minutes}:{this.state.seconds.toString().length === 1 ? '0' + this.state.seconds : this.state.seconds}</span>
        </div>
          <ul>
            <li><button className="circle-btn" onClick={this.state.timer ? null : this.startTime}>START</button></li>
            <li><button className="circle-btn" onClick={this.stopTime}>STOP</button></li>
          </ul>
        {this.state.chill ? videoPlayer : null}
        {this.state.motivation ? motivationVideo : null}
      </div>
    );
  }
}

export default App;
