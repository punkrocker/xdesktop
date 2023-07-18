import React, {Component, MouseEventHandler} from 'react';
import './ActionButton.css';


class ActionButton extends Component {
    static defaultProps = {
        uri: '',
        icon: 'icon-holder.png',
        title: 'Test',
        action: ''
    };

    props = {
        uri: '',
        icon: 'icon-holder.png',
        title: 'Test'
    }

    render() {
        return (
            <div onClick={() => {
                this.handleClick(this.props.uri)
            }} className={'Button'}>
                <img src={require(`../../icons/${this.props.icon}`)} alt={'plus'} className={'Icon'}/>
                <span>{this.props.title}</span>
            </div>
        );
    }

    private handleClick(uri: string) {
        alert(uri);
    }
}

export default ActionButton;
