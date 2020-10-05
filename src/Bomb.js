import React from 'react';

class Bomb extends React.Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    bombMessage = () => {
        return (
            this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'boom!'
        )
    }

    render(){
        return(
            <React.Fragment>
            <h3>{this.bombMessage()}</h3>
            </React.Fragment>
        )
    }
}

export default Bomb;