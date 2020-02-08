import React, { Component } from "react";
import "./DriverCard.scss";
import Rating from "../Rating/";

class DriverCard extends Component {
    render() {
        const {name, rating, img, car} = this.props;

        return (
            <div className="DriverCard">
                <div className="cover">
                    <img src={img} alt={name} />
                </div>
                <div className="details">
                    <h2>{name}</h2>
                    <Rating>{rating}</Rating>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
        )
    }
}

export default DriverCard;