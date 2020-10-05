import React from 'react';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
            <ImageSlider />
            <Bomb initialCount={120} />
            </React.Fragment>
        )
    }
}

export default App;