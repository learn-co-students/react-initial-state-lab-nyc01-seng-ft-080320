import React from 'react';

class ImageSlider extends React.Component {

    state = {
        currentSlideIndex: 0
    }

    render(){
        return(
            <React.Fragment>
            <h3>I am on slide {this.state.currentSlideIndex}</h3>
            </React.Fragment>
        )
    }
}

export default ImageSlider;