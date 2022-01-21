import {Component} from 'react';
import Navbar  from '../components/Navbar'

class SignIn extends Component{
    render(){
        return (
        <div className='container-fluid d-flex flex-column justify-content-between w-100 no-pm' style={{height: '100vh'}}>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center'>
                <div className='form-floating mb-3'>
                <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com'/>
                <label for='floatingInput'>Email address</label>
                </div>
                <div className='form-floating'>
                <input type='password' className='form-control' id='floatingPassword' placeholder='Password'/>
                <label for='floatingPassword'>Password</label>
                <br/>
                <button className='ml-5 btn btn-primary'>Enter</button>
            </div>
            <br/>
            <a href='#'>Create a account.</a>
            <a href='#'>Forget this password ? </a>
            </div>
            <div>
                Created by werbeson quadros
            </div>
        </div>);
    }
}

export default SignIn;