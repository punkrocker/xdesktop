import React, {Component} from 'react';
import './App.css';
import Panel from "./componets/Panel";

class App extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', height: 1080}}>
                <div style={{
                    display: 'flex',
                    flex: 3,
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                    alignContent: 'stretch'
                }}>
                    <Panel color={'yellow'} flex={1}/>
                    <Panel color={'green'} flex={3}/>
                    <Panel color={'yellow'} flex={1}/>
                </div>
                <div style={{display: 'flex', flex: 1, background: 'yellow', justifyContent: 'center'}}>
                    <Panel color={'red'} flex={1}/>
                    <Panel color={'blue'} flex={3}/>
                    <Panel color={'red'} flex={1}/>
                </div>
            </div>
        );
    }
}

export default App;
