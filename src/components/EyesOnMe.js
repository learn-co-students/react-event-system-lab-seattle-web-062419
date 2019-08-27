// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
    handleFocus = () => {
        console.log("Good!")
    }

    handleBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    render() {
        return(
            <button type="submit" onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on me</button>
        )
    }
}

export default EyesOnMe