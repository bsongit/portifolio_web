import {Component} from 'react';
import '../assets/styles/button.css'

class Button extends Component{
    render(){
        return <button className="btn btn-primary">{this.props.children}</button>
    }
}

export default Button;