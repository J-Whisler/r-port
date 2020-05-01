import React, { Component } from 'react'
import './about.css'
import me from './me.jpg'
import resume from '../src/assets/JWhislerResume.pdf'

class About extends Component {
    render () {
        return (
            <body className="about-body" name="About">
        <div className="heading">
          <h2 className="about">About Me</h2>
        </div>
      
        
      
        <div className="row about-div">
      
          <div className="col-md">
            <img src={me} alt="Me" className="my-img"></img>
          </div>
      
          <div className="col-md paragraph">
            <p className="paragraph">My name is Jacob Whisler.  I am 26 years old.  I grew up in Ashland, Ohio where I gratuated from Ashland High School in 2012 and Ashland University in 2016.  I have been living in the Cleveland area since early 2017.</p>
            <p className="paragraph">I am currently enrolled in Case Western Reserve Coding Bootcamp and hope to get a job as a full time web-developer upon graduation in May of 2020</p>
          </div>

          
        </div>
      
    </body>
        )
    }
}

export default About