import React from 'react';
import Bomb from './Bomb';
import ImageSlider from './ImageSlider';

function App(){
    return (
        <div>
            
            < ImageSlider />
            < Bomb initialCount ={120}/>
            
        </div>
        
    );
}

export default App;