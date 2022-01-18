import {Component} from 'react';
import '../assets/styles/row.css'

class Row extends Component{
    render(){
        return <div className="row">{this.props.children}</div>
    }
}

export default Row;