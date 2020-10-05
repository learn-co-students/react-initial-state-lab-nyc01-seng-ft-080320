import React, { Component} from "react";

class Bomb extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = { secondsLeft: props.initialCount}
    // }
    // same it seems
    state = { secondsLeft: this.props.initialCount}

    timerGoesBoom() {
        return this.state.secondsLeft === 0 ? ('Boom!') : (`${this.state.secondsLeft} seconds left before I go boom!`)
    }

    render() {
        return(
            <p>
                {this.timerGoesBoom()}
            </p>
        )
    }
}

export default Bomb