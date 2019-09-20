import React, {Component} from 'react';

export interface Props {
    color: string;
    flex: number
}

class Panel extends Component<Props, {}> {

    constructor(props: Props, {}) {
        super(props, {});
        this.props.color = props.color;
        this.props.flex = props.flex
    }

    props = {
        color: 'black',
        flex: 1
    }

    render() {
        return (
            <div style={{background: this.props.color, flex: this.props.flex}}>
            </div>
        );
    }
}

export default Panel;