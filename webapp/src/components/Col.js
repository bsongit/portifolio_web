import {Component} from 'react';
import '../assets/styles/col.css'

class Col extends Component{
    render(){
        return <div className="col">{this.props.children}</div>
    }
}

export default Col;