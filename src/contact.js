import React, { Component } from 'react'
import { Button, Form, FormGroup,  Input } from 'reactstrap';
import './contact.css'
import resume from '../src/assets/JWhislerResume.pdf'

class Contact extends Component {
    render () {
        return (
            <body name="contact">
              <div className="contact-me">Contact Me</div>
            <Form>
      <FormGroup className="formgroup">
        <Input type="text" name="name" id="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup className="formgroup">
        <Input type="email" name="email" id="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup className="formgroup">
        <Input type="textarea" name="textarea" id="textarea" placeholder="Enter a message"/>
      </FormGroup>
      <Button className="submit">Submit</Button>
    </Form>

    <div className="links">
        <button><a className="link" href="https://github.com/J-Whisler/"></a>Github</button>
        <button><a className="link" href={resume}></a>Resume</button>
        </div>
    </body>
        )
    }
}

export default Contact