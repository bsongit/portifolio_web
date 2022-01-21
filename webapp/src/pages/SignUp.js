import {Component} from 'react';
import Navbar  from '../components/Navbar';
import API from '../helpers/API';
import {handlerChange} from '../helpers/Utils';
import {validateUserForm} from '../helpers/Validations';

class SignUp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            form : {
                username: '',
                email: '',
                password: '',
                repeatedPassword: ''
            }
        }

    }
    register = async () => {
        try {
            const response = await API.post('/users/create', {...this.state.form});
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    formValidation(){
        const message = validateUserForm(this.state.form);
        if(this.state.form.password !== this.state.form.repeatedPassword){
            alert("Password confirmation no match!")
        }
        else if(message === 'Valid form'){
            delete this.state.form.repeatedPassword;
            this.register();
        }
        else{
            alert(message);
        }
    }

    render(){
        return (
        <div className='container-fluid d-flex flex-column justify-content-between w-100 no-pm' style={{height: '100vh'}}>
            <Navbar></Navbar>
            <div className='d-flex flex-column align-items-center'>
            <div className='form-floating mb-3'>
                    <input type='text' className='form-control' id='floatingNameInput' placeholder='your name here' name="username" onChange={handlerChange.bind(this)}/>
                    <label htmlFor='floatingNameInput'>Username</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' name="email" onChange={handlerChange.bind(this)}/>
                    <label htmlFor='floatingInput'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='password' className='form-control' id='floatingPassword' placeholder='Password' name="password" onChange={handlerChange.bind(this)}/>
                    <label htmlFor='floatingPassword'>Password</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='password' className='form-control' id='floatingRepeatPassword' placeholder='Repeat password'  name="repeatedPassword" onChange={handlerChange.bind(this)}/>
                    <label htmlFor='floatingRepeatPassword'>Repeat password</label>
                    <br/>
                    <button className='ml-5 btn btn-success' onClick={this.formValidation.bind(this)}>Registry</button>
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