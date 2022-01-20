import {Component} from 'react';
import Navbar  from '../components/Navbar'

class SignUp extends Component{
    render(){
        return (
        <div className='container-fluid d-flex flex-column justify-content-between w-100 no-pm' style={{height: '100vh'}}>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center'>
            <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingNameInput' placeholder='your name here'/>
                    <label for='floatingNameInput'>Username</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com'/>
                    <label for='floatingInput'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='password' className='form-control' id='floatingPassword' placeholder='Password'/>
                    <label for='floatingPassword'>Password</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='password' className='form-control' id='floatingRepeatPassword' placeholder='Repeat password'/>
                    <label for='floatingRepeatPassword'>Repeat password</label>
                    <br/>
                    <button className='ml-5 btn btn-success'>Registry</button>
                </div>
            </div>
            <div className='w-100 d-flex justify-content-center text-center'>
                <a href='#'>do you have account?</a>
            </div>
            <div>
                Created by werbeson quadros
            </div>
        </div>);
    }
}

export default SignUp;