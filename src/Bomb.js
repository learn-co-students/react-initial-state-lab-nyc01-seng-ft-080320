// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{

constructor(props){
       super();
        this.state = {
            secondsLeft: props.initialCount, 
        }
    }

// decrement =() =>{
//     setInterval(()=>{ 
//         this.setState({secondsLeft: this.state.secondsLeft-1})
//     }, 1000)
// }



render(){

    let countDownresponse = this.state.secondsleft===0? 'Boom':`${this.state.secondsLeft} seconds left before I go boom`
    

    return (
        <div>
            {countDownresponse}
        </div>
        
    )
}
};

export default Bomb;