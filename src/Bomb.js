// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
        console.log(props)
    }
    
    render(){
        
        return (
            this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
            )
    }
  
}

export default Bomb















  // constructor(props) {
    //     super()

    //     this.state = {
    //     secondsLeft: props.initialCount
    //  }
    // }

    // render(){
    //     const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    //     return (
    //         <div>{message}</div>
    //     )
    // }