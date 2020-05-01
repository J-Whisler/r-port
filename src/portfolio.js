import React, { Component } from 'react'
// import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './portfolio.css'
import beer from './assets/beer.png'
import weather from './assets/weather.jpg'
import dev from './assets/devgen.png'
import password from './assets/password.png'
import planner from './assets/planner.png'
import pinchers from './assets/pp2.png'

class Portfolio extends Component {
    render () {
        return (
            <body className="portfolio-body">
              
            <div className="card-container">
        
            <div className="row">
              <div className="card col ">
                <img src={beer} className="card-img-top image" alt="Brewery Locator"></img>
                <div className="card-body">
                  <h5 className="card-title">Brewery Locator</h5>
                  <p className="card-text">Find a brewery near you using your current location or seach a city and state to see what is available in the area.</p>
                  <a href="https://j-whisler.github.io/Project-1/" target="_blank" className="btn btn-primary">Find a brewery!</a>
                </div>
              </div>
      
              <div className="card col">
                  <img src={weather} className="card-img-top image" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Weather</h5>
                    <p className="card-text">Get the weather of your city by ZIP CODE as well as a 5-day forecast, or search a different city's weather.</p>
                    <a href="https://j-whisler.github.io/Weather-Dashboard2/" target="_blank" className="btn btn-primary">Get Weather!</a>
                  </div>
                </div>

                 <div className="card col">
                <img src={dev} className="card-img-top image" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Developer Profile Generator</h5>
                  <p className="card-text">Generate a  developer profile!</p>
                  <a href="https://j-whisler.github.io/dev-prof-gen/" target="_blank" className="btn btn-primary">Develope a profile!</a>
                </div>
            </div>
            </div>

            
              <div className="card col">
                <img src={pinchers} className="card-img-top image" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Penny Pinchers</h5>
                  <p className="card-text">Use this app to save money!</p>
                  <a href="https://penny-pinchers-v2.herokuapp.com/" target="_blank" className="btn btn-primary">Save!</a>
                </div>
              </div>
      
              <div className="card col">
                  <img src={password} className="card-img-top image" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">Passwrod Generator</h5>
                    <p className="card-text">Use this app to generate a random password</p>
                    <a href="https://j-whisler.github.io/pass-gen/" target="_blank" className="btn btn-primary">Generate!</a>
                  </div>
                </div> 

                 <div className="card col">
                <img src={planner} className="card-img-top image" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Day Planner</h5>
                  <p className="card-text">Plan your day!</p>
                  <a href="https://j-whisler.github.io/Day-Planner/" target="_blank" className="btn btn-primary">Start Planning!</a>
                </div>
            </div>

            

             
            </div>
            
              </body>
        )
    }
}

export default Portfolio