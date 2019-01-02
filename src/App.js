import React, {Component} from 'react';
import './App.css';
import Panel from "./componets/Panel";

class App extends Component {

    render() {
        return (
            <div style={{flex: 1, flexDirection: 'row'}}>
                <div style={{flex: 3, flexDirection: 'column', alignItem: 'center', justifyContent: 'center'}}>
                    <div style={{flex:1, background: 'yellow'}} />
                    <Panel style={{flex: 1}} color={'black'}/>
                    <Panel style={{flex: 15}} color={'green'}/>
                    <Panel style={{flex: 1}} color={'black'}/>
                </div>
                <div style={{flex: 3, flexDirection: 'row', alignItem: 'center', justifyContent: 'center'}}>
                    <Panel style={{flex: 1}} color={'red'}/>
                </div>
            </div>
        );
    }
}

export default App;
