import React, {useState, useRef, useEffect} from "react";
import {Row, Form, Button, Dropdown} from 'react-bootstrap';
import { v1 as uuidv1 } from 'uuid';

const AddProject = (props) => {
  const [category, setCategory] = useState("Front-End");
  const [title, setTitle] = useState('');
  const titleRef = useRef(null);

  // useEffect(() => {
  //     console.log(category);
  // }, [category])

  const handleSubmit = (e) => {
    console.log(title);
    e.preventDefault();

    props.addProject({
      id: uuidv1(),
      title: title,
      category: category
    })

    setTitle('');
    titleRef.current.value = '';


  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Row>
        <div className="col-9">
        <Form.Group controlId="formBasicEmail">
          
          <Form.Control ref={titleRef} onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="Enter a project" />
        </Form.Group>
        </div>
        <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {category}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>setCategory("Front-End")} href="#/action-1">Front-End</Dropdown.Item>
            <Dropdown.Item onClick={()=>setCategory("Back-End")} href="#/action-2">Back-End</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </Row>
      <Row>
        <div className="col-12">
        <Button variant="secondary" type="submit">
          Submit
        </Button>
        </div>
      </Row>
</Form>

    </>
  );
};

export default AddProject;
