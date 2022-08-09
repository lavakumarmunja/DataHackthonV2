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

  const giURLHandler = (event) => {
    setGitURL(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //reset the values of input fields
        setId('');
        setName('');
        setLob('');
        setGitURL('');
       const input = JSON.stringify({applicationName:appName,applicationId:appId,
        applicationLob:lob,
        applicationURL:gitURL
      });
console.log(input);
    return alert('Entered Values are: '+ input )


  };

    return (
        <div className=' container center_div'>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Project name" value={appName} onChange={appNameHandler}/>
         </Form.Group>

      <Form.Group className="mb-3" controlId='appID'>
        <Form.Label>APP ID</Form.Label>
        <Form.Control type="text" placeholder="APp ID" value={appId} onChange={techTypeHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId='lob'>
        <Form.Label>LOB</Form.Label>
        <Form.Control type="text" placeholder="Enter LOB" value={lob} onChange={lobHandler}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId='githubUrl'>
        <Form.Label>Github URL</Form.Label>
        <Form.Control type="text" placeholder="GitHub URL" value={gitURL} onChange={giURLHandler}/>
      </Form.Group>

      <Button variant="primary" type="submit" className='cen'>
        Submit
      </Button>
    </Form>
    </div>
    );
  }
  
  export default Registration;
  