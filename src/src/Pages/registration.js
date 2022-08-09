import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import { useState } from "react";


function Registration() {

  const [appName, setId] = useState('');
  const [appId, setName] = useState('');
  
  const [lob, setLob] = useState('');
  const [gitURL, setGitURL] = useState('');


  const appNameHandler = (event) => {
    setId(event.target.value);
  };

  const techTypeHandler = (event) => {
    setName(event.target.value);
  };

  const lobHandler = (event) => {
    setLob(event.target.value);
  };

  

  const submitHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
        setId('');
        setName('');
        setLob('');
        
       const input = JSON.stringify({applicationName:appName,applicationId:appId,
        applicationLob:lob
      });
console.log(input);
    return alert('Entered Values are: '+ input )


  };

    return (
        <div className=' container center_div'>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId='name'>
        <Form.Label>Project name</Form.Label>
        <Form.Control type="text" placeholder=" Project name" value={appName} onChange={appNameHandler}/>
         </Form.Group>

      <Form.Group className="mb-3" controlId='appID'>
        <Form.Label>Use cae</Form.Label>
        <Form.Control type="text" placeholder="USe case" value={appId} onChange={techTypeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId='lob'>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" value={lob} onChange={lobHandler}/>
      </Form.Group>



      <Button variant="primary" type="submit" className='cen'>
        Submit
      </Button>
    </Form>
    </div>
    );
  }
  
  export default Registration;
  