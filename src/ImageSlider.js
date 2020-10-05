import { render } from 'enzyme'
// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component{
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
      return (
          <div>
              I am on slide {this.state.currentSlideIndex} 
          </div>
      )  
    }

}

export default ImageSlider















//     constructor() {
//         super()

//         this.state = {
//             currentSlideIndex: 0
//         }
//     }

// render() {
//     return(
//         <h1>I am on slide {this.state.currentSlideIndex}</h1>
//     )
//   }