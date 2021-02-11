import React, { Component } from "react";

class Sample1 extends Component {

  constructor(props) {
    super();
   
    this.history = props.history;
  }

  
  componentDidMount() {
    
  }

  handleClick = () => {
    console.log('inside handle click');
    this.history.push("/");
  }
  

  render() {
    return <>
    Sample1
        <button onClick={this.handleClick}>Click Me!</button>
    </>;
  }
}

export default Sample1;
