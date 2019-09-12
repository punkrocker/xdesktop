import Addon from '../../Addon'
import React from 'react';

class Plug2 extends Addon {

    render() {
        return (
            <div className="App">
                <div style={{position: 'absolute', left: 0, top: 0, width: 200, height: 200, background: '#ff0000'}}/>
            </div>
        );
    }
}

export default Plug2;
