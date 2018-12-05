import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={require('./background.png')} style={{animation: 'App-logo-spin infinite 20s linear',
                    align:'center'}}/>
                    <h1 style={{align:'center'}}>12:30</h1>
                </header>
            </div>

        )
            ;
    }
}

export default App;
