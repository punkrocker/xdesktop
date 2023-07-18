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
                <ActionButton title={"IDEA"} icon={"idea.jpg"} uri={"D:\\Program Files\\JetBrains\\IntelliJ IDEA 2023.1.2\\bin\\idea64.exe"}/>
                <ActionButton/>
                <ActionButton/>
            </div>
        );
    }
}

export default QuickAction;
