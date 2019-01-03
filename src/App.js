import React, {Component} from 'react';
import './App.css';
import Panel from "./componets/Panel";

class App extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: 1080}}>
                <div style={{display: 'flex', flex: 3, justifyContent: 'flex-start', alignItems: 'stretch', alignContent: 'stretch'}}>
                    <Panel style={{flex: 1}} color={'black'}/>
                    <Panel style={{flex: 5}} color={'green'}/>
                    <Panel style={{flex: 1}} color={'black'}/>
                </div>
                <div style={{display: 'flex', flex: 1, background: 'yellow'}}>
                    <Panel style={{flex: 1}} color={'red'}/>
                </div>
            </div>
        );
    }
}

export default App;
