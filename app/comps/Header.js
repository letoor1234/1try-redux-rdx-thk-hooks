import React, {Fragment, Component} from 'react'
import {
    Route
} from 'react-router-dom'

import LoginForm from './forms/LoginForm'
import UserData from './UserData'

export default class Header extends Component{
    render(){
        return(
            <header
                className='--land-row --port-column --flex-between'
            >
                <h1> Title </h1>
                <Route path='/' exact>
                    <LoginForm
                        registerUrl='/'
                    />
                </Route>
                <Route path='/home'>
                    <UserData/>
                </Route> 
            </header>
        )
    }
}