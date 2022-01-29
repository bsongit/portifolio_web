import {Component} from 'react';
import Navbar  from '../components/Navbar';
import {handlerChange} from '../helpers/Utils';
import {emailValidation} from '../helpers/Validations';
import {Link } from "react-router-dom";
import API from '../helpers/Api';

class SignIn extends Component{
    constructor(props) {
        super(props)
        this.state = {
            form : {
                email: '',
                password: ''
            }
        }
    }

    async doLogin() {
        try {
            const response = await API.post('/login', {...this.state.form});
            if(response.data){
                alert("Did login successfull!")
                window.location.href = response.data;
            }
            else{
                alert("email or password doesn't found.")
            }
        } catch (err) {
            console.log(err)
        }
    }

    submitForm(){
        if(!emailValidation(this.state.form.email)){
            alert("Invalid email")
        }
        else{
            this.doLogin();
        }
    }

    render(){
        return (
        <div className='container-fluid d-flex flex-column justify-content-between w-100 no-pm' style={{height: '100vh'}}>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center'>
                <div className='form-floating mb-3'>
                <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' name="email" onChange={handlerChange.bind(this)}/>
                <label htmlFor='floatingInput'>Email address</label>
                </div>
                <div className='form-floating'>
                <input type='password' className='form-control' id='floatingPassword' placeholder='Password' name="password" onChange={handlerChange.bind(this)}/>
                <label htmlFor='floatingPassword'>Password</label>
                <br/>
                <button className='ml-5 btn btn-primary' onClick={this.submitForm.bind(this)}>Enter</button>
            </div>
            <br/>
            <Link to='/sign-up'>Create a account.</Link>
            <a href='#'>Forget this password ? </a>
            </div>
            <div>
                Created by werbeson quadros
            </div>
        </div>);
    }
}

export default SignIn;