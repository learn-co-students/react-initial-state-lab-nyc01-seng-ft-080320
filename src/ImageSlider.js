// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {

    state = { currentSlideIndex: 0}

    renderIndex = () => {
        if(this.state.currentSlideIndex === 0) {
            return this.state.currentSlideIndex
        } 
    }
    
    render() {

        return (
        <p>I am on slide {this.renderIndex()}</p>
        )
    }
}

export default ImageSlider