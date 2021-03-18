import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'
export default class LoginForm extends Component{

    send=(e)=>{
        e.preventDefault();

       /* const API= this.props.url
        const post= {
            headers:{
                "Content-type": "application/json"
            }
        }*/
    }
    render(){
        return(
            <form 
                className='form --flex-around
                --port--form--column --land--form--row
                --port-width-75 --land-width-30
                --port-block --land-inline'
                onSubmit={(e)=>this.send(e)}
            >
                <label 
                    htmlFor='user'
                    className='form__label --text-center'
                >
                    User name:
                </label>
                <input 
                    type="text" 
                    className='form__input'
                    id='user'
                    placeholder='User Name'
                />

                <label 
                    htmlFor='pass'
                    className='form__label --text-center'
                >
                    Password:
                </label>
                <input 
                    type="password" 
                    className='form__input'
                    id='pass'
                    placeholder='Password'
                />
                
                <button 
                    type="submit"
                    className='form__submit --green'    
                >Login</button> 
                <Link 
                    className=' --text-center --block' 
                    to={this.props.registerUrl}
                >Register</Link>
            </form>
        )
    }
}