import React, {Component} from 'react';
import './ActionButton.css';

class ActionButton extends Component {

    constructor() {
        // @ts-ignore
        super();
    }

    props = {}

    render() {
        return (
            <div className={'Button'}>
                <img src={require('../../images/icon-holder.png')} alt={'plus'} className={'Icon'}/>
                <text>Hello</text>
            </div>
        );
    }
}

export default ActionButton;
