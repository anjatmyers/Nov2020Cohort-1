import React, { Component } from "react";

class DropDown extends Component {
  render() {

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      
    return (
      <>
        <select>
          <option>Monday</option>
          <option>Tuesday</option>
        </select>
      </>
    );
  }
}

export default DropDown;
