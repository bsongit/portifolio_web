import {Component} from 'react';
import '../assets/styles/navbar.css'
import Button from './Button'

class Navbar extends Component{
    render(){
        return <div className="navbar">{
            <div className='navbar-buttons'>
                <Button>Login</Button>
                <Button>Contact</Button>
                <Button>About us</Button>
            </div>
        }</div>
    }
}

export default Navbar;