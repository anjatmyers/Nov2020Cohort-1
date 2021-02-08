import React, { Component } from "react";

class NameList extends Component {
  render() {
      // this.props.data
      // this.props.searchVal
      let filteredData = this.props.data.filter(nameObj =>{

        return nameObj.name.toLowerCase().includes(this.props.searchVal);
      })

      filteredData = this.props.searchVal === "" ? [] :filteredData;
     return <>

        <ul>
            {filteredData.map(names =>(
                <li key={names.id} className={names.sex}>{names.name}</li>
            ))}
        </ul>

        <ul>
        {this.props.data.map(names =>( 
            <li key={names.id} className={names.sex}>{names.name}</li>
        ))}
        </ul>
    </>;
  }
}

export default NameList;
