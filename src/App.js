import React from 'react';
import Bomb from './Bomb';
import ImageSlider from './ImageSlider'

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageSlider />
        <Bomb initialCount={120} />
      </div>
    )
  }
}

export default App;