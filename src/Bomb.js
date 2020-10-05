// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
        constructor(props){
            super()
            this.state = {
                secondsLeft: props.initialCount
            }
        }

    bombSaying = () => {
        const secondsLeft = this.state.secondsLeft
        if(secondsLeft !== 0){
            return <div>{secondsLeft} seconds left before I go boom!</div>
        } else if(secondsLeft === 0){
            return <div>Boom!</div>
        }
    }

    render(){
        return (
            this.bombSaying()
        )

    }
}

export default Bomb