
import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super();

    this.state ={
      count: 0
    }
  }


  handleChange = (event) => {
    
    //re-render
    this.setState({
      count: this.state.count + 1
    })

    //this.state.count = this.state.count + 1 //NOOOOOOOOOO
  }
  

  render() {

    //code  this.method
    // this.props
    // this.state
    // bind, call, apply
    return (
      <>
        <button onClick={this.handleChange}>{this.state.count}</button>
      </>
    )
  }
}

export default App
