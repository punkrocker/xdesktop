import React, {Component} from 'react';

class Panel extends Component {

    render() {
        return (
            <div style={{height:350, background: this.props.color}} />
        );
    }
}

export default Panel;
