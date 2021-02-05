import React, { Component } from "react";

class Days extends Component {
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

    let daysArr = days.map(day =>{

        return <li>{day}</li>
    })

    //let daysArr = [<li>Monday</li>, <li>Tuesday</li>, <li>Wednesday</li>]

    return (
        <>
            <ul>
                {daysArr}
            </ul>
        </>
    )

  }
}

export default Days;
