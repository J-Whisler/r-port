import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <h2 className="name">Jacob Whisler</h2>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav