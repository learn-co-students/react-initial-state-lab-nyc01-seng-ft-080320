// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{

constructor(props){
       super();
        this.state = {
            secondsLeft:props.initialCount
        }
    }

decrement =() =>{
    const newCount = this.state.count -1;
    this.setState({count:newCount})
}


render(){

    const returnValue = () => {
        if(this.state.secondsLeft === 0) {
        return 'Boom!' 
        } else {
        return '{this.state.secondsLeft} left before I go boom!'
        }
    }

    return (
        <div>
            {returnValue}
        </div>
        
    )
}
};

export default Bomb;