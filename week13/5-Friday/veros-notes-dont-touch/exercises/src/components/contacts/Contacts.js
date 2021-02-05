// import React from "react";
import pic from 'assets/me.jpg';


// const Contacts = (props) => {
    
    
//   return <>
//     Hello
//     <img height="300px" src={pic}  alt=""/>
//   </>;
// };

// export default Contacts;


import React, { Component } from 'react'

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}
const images = importAll(require.context('assets', false, /\.(png|jpe?g|svg)$/));
class Contact extends Component {
    constructor(){
         super();
        this.state = {
            image: ""
        }
    }

    componentWillMount() {
        import('assets/me.jpg').then(image => {this.setState({image: image})})
      }
    
  render() {
      
    console.log('state', this.state.image)
    console.log(images);
    return (
      <>
      hello
      <img width="300px" src={images['me.jpg'].default} alt=""/>
        {/* <img width="300px" src={this.state.image.default} alt=""/> */}
      </>
    )
  }
}

export default Contact

