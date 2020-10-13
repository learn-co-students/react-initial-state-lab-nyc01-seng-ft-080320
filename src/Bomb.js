// your Bomb code here!
import React from 'react'
class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount
    }
    render(){
        if ( this.state.secondsLeft === 0){
            return "Boom!"
        }else{
        return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
    }
}

export default Bomb