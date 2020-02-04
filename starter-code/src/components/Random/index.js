import React, { Component } from "react";

const getRandom = (min, max) => {    
    return  Math.floor(Math.random() * (max - min) + min);
}

class Random extends Component {
    render() {
        const { min, max } = this.props;

        return (
            <div className="random">
                Random value between {min} and {max} => {getRandom(min, max)}
            </div>
        )
    }
}

export default Random;