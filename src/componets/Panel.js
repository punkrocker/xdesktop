import React, {Component} from 'react';

class Panel extends Component {

    render() {
        return (
            <div style={{background: this.props.color}} />
        );
    }
}

export default Panel;
