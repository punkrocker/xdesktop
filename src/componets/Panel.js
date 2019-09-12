import React, {Component} from 'react';

class Panel extends Component {

    render() {
        return (
            <div style={{background: this.props.color, flex: this.props.flex}}>
            </div>
        );
    }
}

export default Panel;
