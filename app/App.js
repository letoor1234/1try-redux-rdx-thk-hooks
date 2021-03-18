import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from './comps/Header'
export default class App extends Component{
    render(){
        return(
            <Router>
                <Header/>
            </Router>
        )
    }
}