import React, {Component} from 'react';
import './ActionButton.css';

class ActionButton extends Component{
    static defaultProps = {
        uri: '',
        icon: 'icon-holder.png',
        title: 'Test'
    };

    props = {
        uri: '',
        icon: 'icon-holder.png',
        title: 'Test'
    }

    render() {
        return (
            <div className={'Button'}>
                <img src={require(`../../icons/${this.props.icon}`)} alt={'plus'} className={'Icon'}/>
                <text>{this.props.title}</text>
            </div>
        );
    }
}

export default ActionButton;
