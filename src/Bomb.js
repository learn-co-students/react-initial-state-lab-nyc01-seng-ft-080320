// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {

    state = {secondsLeft: this.props.initialCount}

    renderTimeLeft = () => {
        if(this.state.secondsLeft === 120) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }else if (this.state.secondsLeft === 0){
            return 'Boom!'
        }
    }
    render() {
        return (
            <p>{this.renderTimeLeft()}</p>
        )
    }
}

export default Bomb
