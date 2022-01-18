import {Component} from 'react';
import '../assets/styles/dialog.css';
import Card from './Card';

class Dialog extends Component{
    render(){
        return (
        <div className="dialog">
            <div className="dialog-box">
                <button>close</button>
                <Card>{this.props.children}</Card>
            </div>
        </div>
        );
    }
}

export default Dialog;