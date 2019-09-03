import React from 'react'

class RatingFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 3
    }
    this.increaseCounter = this.increaseCounter.bind(this)
    this.decreaseCounter = this.decreaseCounter.bind(this)
  }

  increaseCounter() {
    if (this.state.counter < 10) {
      this.setState({
        counter: this.state.counter + 0.5
      })
    }
  }

  decreaseCounter() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 0.5
      })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increaseCounter}>+</button>
        <button onClick={this.decreaseCounter}>-</button>
      </div>
    )
  }
}

export default RatingFilter
