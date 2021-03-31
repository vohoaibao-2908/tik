import React, { Component } from 'react'
import Navbar from '../../Component/Header/Navbar';
import Slider from '../../Component/Header/Slider';
export default class header extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Slider />  
            </div>
        )
    }
}

