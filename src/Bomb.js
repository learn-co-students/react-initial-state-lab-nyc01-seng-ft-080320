import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    generateTimer = () => {
        if(this.props.initialCount !== 0){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }else{
            return `Boom!`
        }
    }

    render() {
        return (
            <div>
                {/* {this.state.secondsLeft} */}
                {this.generateTimer()}
            </div>
        )
    }
}
