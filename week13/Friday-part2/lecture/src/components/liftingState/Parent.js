import React, { Component } from 'react';
import Clear from './Clear';
import DisplayInfo from './DisplayInfo';
import Increment from './Increment'

class Parent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
      this.setState({
          count: this.state.count + 1
      })
    }

    resetCount = () => {
      
        this.setState({
            count: 0
        })
    }
    


  render() {
    return (
      <>
        <h1 className="text-center mt-5">Lifting State</h1>

        <div className="row mt-5">
            <div className="col-6 offset-3 formColor p-5 formFont">

                <DisplayInfo count={this.state.count}/>

                <Increment increment={this.incrementCount} />

                &nbsp;&nbsp;
                <Clear reset={this.resetCount}/>

            </div>
        </div>
      </>
    )
  }
}

export default Parent
