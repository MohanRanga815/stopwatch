// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimeRun: false, timeElapsedSec: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false, timeElapsedSec: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRun: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedSec: prevState.timeElapsedSec + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRun: true})
  }

  renderSec = () => {
    const {timeElapsedSec} = this.state
    const sec = Math.floor(timeElapsedSec % 60)

    if (sec < 10) {
      return `0${sec}`
    }
    return sec
  }

  renderMin = () => {
    const {timeElapsedSec} = this.state
    const minutes = Math.floor(timeElapsedSec / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRun} = this.state
    const time = `${this.renderMin()}:${this.renderSec()}`

    return (
      <div className="app-con">
        <div className="bg-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card">
            <div className="logo-head-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="logo"
              />
              <p className="time-head">Timer</p>
            </div>
            <h1 className="timer">{time}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.onStart}
                disabled={isTimeRun}
              >
                Start
              </button>
              <button type="button" className="stop-btn" onClick={this.onStop}>
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
