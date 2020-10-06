import React from 'react';

class Bomb extends React.Component{
  state = {
    secondsLeft: this.props.initialCount
  }

  countdown = () => {
    if (this.state.secondsLeft > 0) {
      return (
          `${this.state.secondsLeft} seconds left before I go boom!`
      );
    } else {
      return 'Boom!';
    }
  }

  render() {
    return (
      <div>
        {this.countdown()}
      </div>
    );
  }
}

export default Bomb;