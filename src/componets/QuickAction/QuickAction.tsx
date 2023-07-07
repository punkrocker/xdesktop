import React, {Component} from 'react';
import ActionButton from "../ActionButton/ActionButton";

class QuickAction extends Component {

    constructor() {
        // @ts-ignore
        super();
    }

    props = {}

    render() {
        return (
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <ActionButton/>
                <ActionButton/>
                <ActionButton/>
            </div>
        );
    }
}

export default QuickAction;
