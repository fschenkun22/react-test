import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class list extends Component {
    render() {
        return (
            <div>
                list
                <NavLink to='App1'>APP1</NavLink>
                <NavLink to='App2'>APP2</NavLink>
                <NavLink to='App3'>APP3</NavLink>
            </div>
        )
    }
}
