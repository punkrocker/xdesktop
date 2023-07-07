import React, {Component} from 'react';
import './App.css';
import QuickAction from "./componets/QuickAction/QuickAction";

class App extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: 1080}}>
                <QuickAction  />
            </div>
        );
    }
}

export default App;
