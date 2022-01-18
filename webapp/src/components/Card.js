import {Component} from 'react';
import '../assets/styles/card.css'

class Card extends Component{
    render(){
        return <div className="card card-primary">{this.props.children}</div>
    }
}

export default Card;