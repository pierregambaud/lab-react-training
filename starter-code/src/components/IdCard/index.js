import React, { Component } from "react";
import "./IdCard.scss";

class IdCard extends Component {
    render () {
        const { picture, firstName, lastName, gender, height, birth } = this.props;

        return (
            <div className="id-card">
                <div className="avatar">
                    <img src={picture} alt={firstName} />
                </div>
                <div className="user-info">
                    <span><strong>Firstname:</strong> {firstName}</span>
                    <span><strong>Lastname:</strong> {lastName}</span>
                    <span><strong>Gender:</strong> {gender}</span>
                    <span><strong>Height:</strong> {height}</span>
                    <span><strong>birth:</strong> {birth.toUTCString().slice(0,-13)}</span>
                </div>
            </div>
        )
    }
}

export default IdCard;