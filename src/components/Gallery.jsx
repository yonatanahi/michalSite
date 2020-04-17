import React, { Component } from 'react'
import img1 from "../assets/img1.jpg"

class Gallery extends Component {
    render() {
        return (
            <div>
                <img src={img1} alt=""/>
            </div>
        )
    }
}

export default Gallery;