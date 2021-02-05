import React, { Component } from 'react'
import Contacts from './components/Contacts';
import data from './data/contacts';
import Days from './components/Days';
import DropDown from './components/DropDown';
import Button from './components/Button';

class App extends Component {


  render() {

    //logic  [{}, {}, {}]
    // contacts[0].firstName contacts[0].lastName

    console.log(data);
    let contacts = [
      {
      firstName:"Adam" ,
      lastName: "MacKinnon",
      phoneNum: "333-333-3333",
      email: "adam@dc.com"},
      {
        firstName:"Ally" ,
        lastName: "Deeter",
        phoneNum: "222-222-2222",
        email: "ally@dc.com"},
        {
          firstName:"Andrea" ,
          lastName: "Myers",
          phoneNum: "444-444-4444",
          email: "andrea@dc.com"},
    ]
    //[<Contact>,<Contact/>, <Contact />]
    let contactArr = contacts.map(contactObj =>{

      return <Contacts firstName={contactObj.firstName}
        lastName={contactObj.lastName}
        phoneNum={contactObj.phoneNum}
        email={contactObj.email}
       />
    })

    let allContactsArr = data.map(contactObj =>{

      return <Contacts firstName={contactObj.first_name}
        lastName={contactObj.last_name}
        phoneNum={contactObj.phone}
        email={contactObj.email}
       />
    })


    //[Contact, Contacts, Contact]
    // contact.map(el =>{})  /// [Contact]

  
  //   let name = [<Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
  //   <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
  //   <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>
  
  // ]

    return (
      <>

      <Button color="info" text="Info" />
      <Button color="warning" text="Warning" />
      <Button color="danger" text="Danger" />
      <Button color="secondary" text="secondary" />
      
      <DropDown />
      <Days />
      {/* {allContactsArr} */}
      {/* {contactArr} */}
      {/* <Contacts firstName={contacts[0].firstName} lastName={contacts[0].lastName} phoneNum={contacts[0].phoneNum} email={contacts[0].email} />
      <Contacts firstName={contacts[1].firstName} lastName={contacts[1].lastName} phoneNum={contacts[1].phoneNum} email={contacts[1].email} />
      <Contacts firstName={contacts[2].firstName} lastName={contacts[2].lastName} phoneNum={contacts[2].phoneNum} email={contacts[2].email} /> */}

      </>
    )
  }
}

export default App
